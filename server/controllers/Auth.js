const bcrypt = require("bcrypt")
const User = require("../models/User")
const OTP = require("../models/OTP")
const jwt = require("jsonwebtoken")
const otpGenerator = require("otp-generator")
const mailSender = require("../utils/mailSender")
const { passwordUpdated } = require("../mail/passwordUpdate")
const Profile = require("../models/Profile")
require("dotenv").config()

// Signup Controller for Registering Users *

exports.signup = async (req, res) => {
    try {
      const { firstName, lastName, email, password, confirmPassword, accountType, contactNumber, otp } = req.body;
  
      if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
        return res.status(400).json({
          success: false,
          message: "All fields are required.",
        });
      }
  
      if (password !== confirmPassword) {
        return res.status(400).json({
          success: false,
          message: "Password and Confirm Password do not match. Please try again.",
        });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "User already exists. Please sign in to continue.",
        });
      }
  
      const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
      if (response.length === 0 || otp !== response[0].otp) {
        return res.status(400).json({
          success: false,
          message: "Invalid OTP.",
        });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      let approved = accountType === "" ? false : true;
  
      const profileDetails = await Profile.create({
        gender: null,
        dateOfBirth: null,
        about: null, 
        contactNumber: null,
      });
  
      const user = await User.create({
        firstName,
        lastName,
        email,
        contactNumber,
        password: hashedPassword,
        accountType,
        approved,
        additionalDetails: profileDetails._id,
        image: "",
      });
  
      return res.status(201).json({
        success: true,
        user,
        message: "User registered successfully.",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again.",
        error: error.message,
      });
    }
  };
  
// Login controller for authenticating users *
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required.",
        });
      }
  
      const user = await User.findOne({ email }).populate("additionalDetails");
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found. Please sign up to continue.",
        });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({
          success: false,
          message: "Incorrect password.",
        });
      }
  
      const token = jwt.sign({ email: user.email, id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "24h" });
  
      user.token = token;
      user.password = undefined; // Don't return password in the response
  
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User login successful.",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Login failed. Please try again later.",
        error: error.message,
      });
    }
  };
  
// Send OTP For Email Verification *
exports.sendotp = async (req, res) => {
    try {
      const { email } = req.body;
  
      const checkUserPresent = await User.findOne({ email });
      if (checkUserPresent) {
        return res.status(409).json({
          success: false,
          message: "User is already registered.",
        });
      }
  
      let otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
  
      let result = await OTP.findOne({ otp });
      while (result) {
        otp = otpGenerator.generate(6, { upperCaseAlphabets: false });
        result = await OTP.findOne({ otp });
      }
  
      const otpPayload = { email, otp };
      const otpBody = await OTP.create(otpPayload);
  
      console.log("OTP sent successfully:", otpBody);
      return res.status(200).json({
        success: true,
        message: "OTP sent successfully.",
        otp,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to send OTP. Please try again.",
        error: error.message,
      });
    }
  };
  

// Controller for Changing Password *
exports.changePassword = async (req, res) => {
    try {
      const userDetails = await User.findById(req.user.id);
      const { oldPassword, newPassword } = req.body;
  
      if (!oldPassword || !newPassword) {
        return res.status(400).json({
          success: false,
          message: "Old password and new password are required.",
        });
      }
  
      const isPasswordMatch = await bcrypt.compare(oldPassword, userDetails.password);
      if (!isPasswordMatch) {
        return res.status(401).json({
          success: false,
          message: "Old password is incorrect.",
        });
      }
  
      const encryptedPassword = await bcrypt.hash(newPassword, 10);
      const updatedUserDetails = await User.findByIdAndUpdate(
        req.user.id,
        { password: encryptedPassword },
        { new: true }
      );
  
      try {
        await mailSender(
          updatedUserDetails.email,
          "Password updated for your account",
          passwordUpdated(updatedUserDetails.email, `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`)
        );
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        return res.status(500).json({
          success: false,
          message: "Password updated, but error sending email notification.",
          error: emailError.message,
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "Password updated successfully.",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to update password. Please try again later.",
        error: error.message,
      });
    }
  };
  