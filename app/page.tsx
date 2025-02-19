import React from "react";
import { FaSeedling } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import { MdCurrencyExchange } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { RiExchangeFundsLine } from "react-icons/ri";
import { BsBank, BsCreditCard2BackFill } from "react-icons/bs";
import { PiFarm } from "react-icons/pi";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Staking() {
  return (
    <div className="h-[calc(100vh-5rem)] backgorundColor text-white  overflow-auto">

      <section className="relative" id="home">
        <div className="absolute  mx-20 mt-40">
          <h1 className="text-5xl font-bold text-center">
            <span className="text-gray-300">Welcome to <span className="text-6xl text-green-200">Infinite Sprouts</span></span>
          </h1>
          <p className="py-8 text-xl">
            Step into the future of farming, where AI, IoT, and Blockchain seamlessly connecting<br />
            farmers, traders, and investors—in a world of endless possibilities. By bringing crops<br />
            on-chain, we open up global markets, enhance profitability, and offer unparalleled <br />
            accessibility and flexibility
          </p>
        </div>
        <div className="">
          <img src="images/rice background img - Copy.png" alt="rice" className="h-[calc(100vh-5rem)] w-full opacity-40" />
        </div>
      </section>

      <section className="grid gap-6 mt-20 mb-10 max-w-6xl mx-auto scroll-mt-50" id="about">
        <h1 className="mt-20 mb-10 text-6xl font-bold text-center text-green-200 about_heading">
          About Us
        </h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-7">
            <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaSeedling className="text-green-200" />
            </span>
            <h3 className="mb-1 text-xl font-semibold text-gray-300">Question 1: <span className="text-green-400 text-lg font-medium me-2 px-2.5 py-0.5 rounded-sm">What really is infinie sprouts?</span></h3>
            <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">Infinite Sprouts is a visionary ecosystem that is expanding the scope and scale of agriculture. introducing social networking connecting farmer's, global agricultural market, new trading era with crop token, flexible investment ecosystem and open source farm practices for a more efficient agriculture, a home for farmer's, trader's and investor's bringing agriculture on chain, a place of limitless opportunities.</p>
          </li>
          <li className="mb-10 ms-7">
            <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaSeedling className="text-green-200" />
            </span>
            <h3 className="mb-1 text-xl font-semibold text-gray-300">Question 2: <span className="text-green-400 text-lg font-medium me-2 px-2.5 py-0.5 rounded-sm">What is the vision?</span></h3>
            <p className="text-xl font-normal text-gray-500 dark:text-gray-400">We envision revolutionizing agriculture by merging blockchain technology, AI, and smart solutions to create a more efficient, transparent, and globally accessible agribusiness ecosystem..</p>
          </li>
          <li className="mb-10 ms-7">
            <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaSeedling className="text-green-200" />
            </span>
            <h3 className="mb-1 text-xl font-semibold text-gray-300">Question 3: <span className="text-green-400 text-lg font-medium me-2 px-2.5 py-0.5 rounded-sm">What is the goal?</span></h3>
            <p className="text-xl font-normal text-gray-500 dark:text-gray-400">We aim to transform agricultural commodity trading with blockchain to establish a secure, efficient, and transparent marketplace. Our vision extends to enhancing farming practices and introducing a new model for agricultural investment that empowers farmers, traders, and investors alike.</p>
          </li>
          <li className="mb-10 ms-7">
            <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FaSeedling className="text-green-200" />
            </span>
            <h3 className="mb-1 text-xl font-semibold text-gray-300">Question 4: <span className="text-green-400 text-lg font-medium me-2 px-2.5 py-0.5 rounded-sm">What is the mission?</span></h3>
            <p className="text-xl font-normal text-gray-500 dark:text-gray-400">Our mission is to build a decentralized platform that digitizes agricultural assets, streamlines supply chain processes, and opens a new era of investment and trading through innovative crop tokens and smart contracts.</p>
          </li>
        </ol>
      </section>

      <section className="grid gap-6 mt-20 mb-10 max-w-6xl mx-auto scroll-mt-50" id="ecosystem">
        <h1 className="mt-10 text-6xl text-center text-green-200 about_heading">
          Our Ecosystem
        </h1>
        <div className="flex grid grid-cols-3 gap-4">
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <div className="grid justify-center items-center p-2 border w-12 border-green-200 rounded-full shadow-green-shadow">
                <SlGlobe className="text-3xl text-green-200" />
              </div>
            </span>
            <span className="grid justify-center items-center text-xl font-bold text-gray-300">Sproutlink</span>
            <span className="grid justify-center items-center text-center">A thriving network for farmers, traders, and investors to connect, exchange insights, and build a collaborative agricultural ecosystem. Promotes knowledge sharing and engagement, driving innovation and growth within the community.</span>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <div className="grid justify-center items-center p-2 border w-12 border-green-200 rounded-full shadow-green-shadow">
                <MdCurrencyExchange className="text-3xl text-green-200" />
              </div>
            </span>
            <span className="grid justify-center items-center text-xl font-bold text-gray-300">Sprouts Exchange</span>
            <span className="grid justify-center items-center text-center">A dynamic platform that bridges farmers to a world of buyers and investors, unlocking access to global markets and fair pricing. Empowering farmers to scale their reach and enabling investors to tap into agricultural opportunities worldwide.</span>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <div className="grid justify-center items-center p-2 border w-12 border-green-200 rounded-full shadow-green-shadow">
                <ImLab className="text-3xl text-green-200" />
              </div>
            </span>
            <span className="grid justify-center items-center text-xl font-bold text-gray-300">Sproutslabs</span>
            <span className="grid justify-center items-center text-center">A dynamic platform that bridges farmers to a world of buyers and investors, unlocking access to global markets and fair pricing. Empowering farmers to scale their reach and enabling investors to tap into agricultural opportunities worldwide.</span>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <div className="grid justify-center items-center p-2 border w-12 border-green-200 rounded-full shadow-green-shadow">
                <RiExchangeFundsLine className="text-3xl text-green-200" />
              </div>
            </span>
            <span className="grid justify-center items-center text-xl font-bold text-gray-300">SproutStake</span>
            <span className="grid justify-center items-center text-center">A rewarding investment opportunity where users can stake their tokens and earn passive income from platform revenues. Supports agricultural growth while providing a sustainable way for investors to share in the platform’s success.</span>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <div className="grid justify-center items-center p-2 border w-12 border-green-200 rounded-full shadow-green-shadow">
                <BsBank className="text-3xl text-green-200" />
              </div>
            </span>
            <span className="grid justify-center items-center text-xl font-bold text-gray-300">Sprouts bank</span>
            <span className="grid justify-center items-center text-center">A dynamic platform that bridges farmers to a world of buyers and investors, unlocking access to global markets and fair pricing. Empowering farmers to scale their reach and enabling investors to tap into agricultural opportunities worldwide.</span>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <div className="grid justify-center items-center p-2 border w-12 border-green-200 rounded-full shadow-green-shadow">
                <BsCreditCard2BackFill className="text-3xl text-green-200" />
              </div>
            </span>
            <span className="grid justify-center items-center text-xl font-bold text-gray-300">Sproutlink Wallet</span>
            <span className="grid justify-center items-center text-center">A dynamic platform that bridges farmers to a world of buyers and investors, unlocking access to global markets and fair pricing. Empowering farmers to scale their reach and enabling investors to tap into agricultural opportunities worldwide.</span>
          </div>
          <div className="flex-y grid col-start-2 justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <div className="grid justify-center items-center p-2 border w-12 border-green-200 rounded-full shadow-green-shadow">
                <PiFarm className="text-3xl text-green-200" />
              </div>
            </span>
            <span className="grid justify-center items-center text-xl font-bold text-gray-300">Sproutlink farm</span>
            <span className="grid justify-center items-center text-center">Real-world agricultural ventures as a core revenue source. Users can invest in or actively participate in farming projects, transforming agricultural potential into sustainable profits.</span>
          </div>
        </div>

        <div className="flex justify-between items-center bg-gradient-to-l from-[#1e0e34] via-black-950 to-[#0d0417] my-2 p-6 rounded-3xl text-center shadow-lg border-2 border-purple-500">
          <p className="text-left pl-8">
            STAKED: 4 TIMES | REWARDS: 2 UNLOCKED
          </p>
          <hr className="lg:w-80 h-1 bg-gradient-to-l from-purple-900 to-purple-100 border-0 rounded dark:bg-gray-900" />
          <button className="bg-gradient-to-l from-[#4d1f8d] via-[#7c70c7] to-[#6051e7] hover:bg-purple-800 py-1 px-4 rounded-lg shadow-md">
            Withdrawals
          </button>
        </div>
      </section>

      <section className="grid gap-6 mt-20 mb-10 max-w-7xl mx-auto scroll-mt-50" id="team_section">
        <h1 className="mt-20 mb-10 text-6xl font-bold text-center text-green-200 about_heading">
          Our Team
        </h1>
        <div className="flex grid grid-cols-5 gap-4">
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Emmanuel Ali (Sprouts king)</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Founder</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Richardson</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Farm director</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Stunner Jr</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Project manager</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">George (Zannakonda)</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Development admin</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Legend</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Frontend/UI dev</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Jonathan Philip</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Graphic designer</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Zach</span>
              <span className="grid justify-center items-center text-gray-300 text-center">DC. Community manager </span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Femi</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Advisors</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Advisors</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Crypto genius</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Advisory</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Phm. John</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Marketing team</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Adalot</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Marketing team</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Cryptiana BMS</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Social manager</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Faith</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Mike Gambo</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Farm team</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Gideon Peter</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Farm team</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Isaac (ice)</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Farm team</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Nomsu Eli</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Farm team</span>
            </div>
          </div>
          <div className="flex-y grid justify-center items-center bg-black-800  px-8 py-8 space-y-2 border border-black-600 hover:border-green-200 rounded-2xl hover:scale-105 ease-in-out duration-500">
            <span className="grid justify-center items-center">
              <img src="images/NFT..4432.png" alt="" className="w-30 h-30 border border-green-200 rounded-full" />
            </span>
            <div className="grid justify-center items-center text-xl font-bold text-gray-300 py-8">
              <span className="grid justify-center items-center text-green-200 text-center">Ezra Luka</span>
              <span className="grid justify-center items-center text-gray-300 text-center">Farm team</span>
            </div>
          </div>

        </div>
      </section>

      <footer className="flex justify-around p-6 bg-black-800">
        <div className="flex items-center gap-4">
          <a href="#home" className="p-2 border border-black-600 rounded-lg hover:border-green-200 hover:scale-125 ease-out duration-500"><FaGoogle className="text-2xl " /></a>
          <a href="#home" className="p-2 border border-black-600 rounded-lg hover:border-green-200 hover:scale-125 ease-out duration-500"><FaFacebookF className="text-2xl " /></a>
          <a href="#home" className="p-2 border border-black-600 rounded-lg hover:border-green-200 hover:scale-125 ease-out duration-500"><FaTwitter className="text-2xl " /></a>
        </div>
        <div></div>
        <div className="text-lg">
          All rights reserved @infinite_sprouts 2024.
        </div>
      </footer>
    </div>
  );
}