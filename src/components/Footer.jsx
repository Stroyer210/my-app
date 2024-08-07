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
        <div className="flex justify-between md:mx-10 2xl:mx-96 rounded-3xl mt-10 md:p-5 text-lg font-bold">
            <div className="max-w-[1200px] sm:h-[150px] md:p-12 sm:flex justify-between mx-auto items-center inline-block text-center">
                    <span className="text-gray-300 dark:text-gray-600 biorhyme">
                    The Drunken Duck
                    </span>

                    <div className="text-4xl flex sm:flex-row justify-center lg:gap-16 py-3 text-gray-300 dark:text-white mt-3 mx-28 md:mt-0">
                        <a href="https://www.instagram.com/sthiwar_17/" target="_blank" rel="noreferrer">
                            <AiOutlineInstagram className="contact-shadow dark:text-gray-100 dark:hover:text-gray-900" />
                        </a>
                        <a href="https://www.linkedin.com/in/sergio-ardila-alvarado-550b40152/" target="_blank" rel="noreferrer">
                            <AiFillLinkedin className="contact-shadow dark:text-gray-100 dark:hover:text-gray-900" />
                        </a>
                        <a
                            href="https://github.com/Stroyer210/Drunken-Duck"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillGithub className="contact-shadow dark:text-gray-100 dark:hover:text-gray-900" />
                        </a>
                        <a href="https://www.facebook.com/sthiwar13" target="_blank" rel="noreferrer">
                            <AiFillFacebook className="contact-shadow dark:text-gray-100 dark:hover:text-gray-900" />
                        </a>
                    </div>
                    <p className="text-gray-300 mt-3 md:mt-0 text-sm">
                    ©2024 The Drunken Duck <br /> All rights reserved{" "}
                    </p>
                </div>

        </div>
    )
};

export default Footer;