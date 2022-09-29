import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div  className="bg-slate-200 flex md:flex-row flex-col justify-around items-start">
    <script src="https://cdn.tailwindcss.com"></script>
      <div className="bg-white h-1/2 w-3/4 flex md:flex-row flex-col justify-around items-start m-8 -ml-0 drop-shadow-xl">
        <div className="p-5 ">
          {/* <ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Stream<span className="text-blue-600">line</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul> */}
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">ABOUT US</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Our History
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Product Care
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Store Location
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Sustainability
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">POLICY</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Shipping & Return Policy
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Impressum
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Return Portal
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">CUSTOMER SERVICE</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              General Terms and Conditions
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact Us
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              News
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              FAQ
            </li>
            
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className=" h-1/2 w-1/4 flex md:flex-row flex-col justify-around items-start p-5">
      <div className="p-5">
        <ul>
          <p className="text-gray-800 font-bold text-2xl pb-4">FOLLOW US</p>
          <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-600 h-10 " />
          <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600 h-10" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600 h-10" />
          <FaYoutube className="text-2xl cursor-pointer hover:text-red-600 h-10" />

          <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            GLOBAL ENGLISH
          </li>
        </ul>
      </div>
      
      </div>
      {/* <div className="">
        <h1 className=" text-gray-800 font-semibold">
          © 2021-2022 All rights reserved
        </h1>
      </div> */}
      </div>
      <div  className="bg-slate-200">
      <h1 className=" text-gray-800 font-semibold ">
          © 2021-2022 All rights reserved
        </h1>
      </div>
    </>
  );
}

export default Footer;
