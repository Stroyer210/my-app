import "./../App.css";
import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
    return (
        <div className="flex justify-between  mx-10 2xl:mx-96 rounded-3xl mt-10 p-5 text-lg font-bold">
            <div className="max-w-[1200px] sm:h-[150px] p-12 sm:flex justify-between mx-auto items-center inline-block text-center">
                    <span className="text-gray-300 dark:text-gray-600">
                    The Drunken Duck
                    </span>

                    <div className="text-4xl flex sm:flex-row justify-center md:gap-16 py-3 text-gray-300 dark:text-white mt-3 mx-28 md:mt-0">
                        <a href="/About" rel="noreferrer">
                            <AiOutlineInstagram className="contact-shadow dark:text-gray-300 dark:hover:text-gray-900" />
                        </a>
                        <a href="/About" rel="noreferrer">
                            <AiFillLinkedin className="contact-shadow dark:text-gray-300 dark:hover:text-gray-900" />
                        </a>
                        <a
                            href="https://github.com/schneidsmc/diet-detective"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillGithub className="contact-shadow dark:text-gray-300 dark:hover:text-gray-900" />
                        </a>
                        <a href="/About" rel="noreferrer">
                            <AiFillFacebook className="contact-shadow dark:text-gray-300 dark:hover:text-gray-900" />
                        </a>
                    </div>
                    <p className="text-gray-300 mt-3 md:mt-0">
                    ©2024 The Drunken duck <br /> All rights reserved{" "}
                    </p>
                </div>

        </div>
    )
};

export default Footer;