import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 xl:items-center flex items-start justify-between max-w-7xl mx-auto z-50">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.etsy.com/shop/JewelryDesignsbyMira"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://facebook.com"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://instagram.com"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://twitter.com"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://youtube.com"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/* // Todo: Resolve UI Render Does Not Match */}
        {/* <Link href="#contact"> */}
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
        {/* </Link> */}
      </motion.div>
    </header>
  );
}

export default Header;
