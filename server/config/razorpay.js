const Razorpay = require("razorpay");

const RAZORPAY_KEY = process.env.RAZORPAY_KEY_ID

const RAZORPAY_SECRET = process.env.RAZORPAY_SECRET

exports.instance = new Razorpay({
	key_id: RAZORPAY_KEY,
	key_secret: RAZORPAY_SECRET,
});