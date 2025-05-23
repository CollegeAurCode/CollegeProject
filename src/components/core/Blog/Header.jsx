import React, { useState } from "react";
import collegeaurcode from "../../../assets/Images/collegeaurcode.svg";
import blog from "../../../assets/Images/blog.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  function changeHandler(event) {
    setSearchText(event.target.value);
  }

  function clickHandler() {
    navigate("/");
  }

  return (
    <div className=" flex justify-center items-center bg-[#0A0A23] py-1 fixed top-0 w-full  ">
      <nav className="flex justify-evenly gap-[20rem] w-[1220px]">
        <div className="flex">
          <img
            src={collegeaurcode}
            alt="Taken by aliens"
            width="300"
            onClick={clickHandler}
            className="cursor-pointer "
          />
          <img
            src={blog}
            alt="trying to recover it"
            width="80"
            onClick={clickHandler}
            className="cursor-pointer "
          />
        </div>

        <div className="flex gap-[5rem] justify-betwe text-center items-center  ">
          <button className=" text-white text-md font-medium">Home</button>
          <input
            type="text"
            value={searchText}
            placeholder="Search here"
            className="px-4 py-2 rounded-md focus:outline-none  focus:ring-1 focus:shadow-sm focus:shadow-white "
            onChange={changeHandler}
          ></input>
        </div>
      </nav>
    </div>
  );
};

export default Header;
