import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Jewelry for every occassion ',
      'Beautiful on the inside-and-out',
      'Treat Yo Self',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="https://i.etsystatic.com/iusa/f24517/84099923/iusa_75x75.84099923_34mh.jpg?version=0"
        alt=""
        width="300"
        height="300"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      ></Image>
      <div className="z-20">
        <p className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Jewelry by Mira
        </p>
        <div className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="gray"></Cursor>
        </div>
        <div>
          <Link href="#hero">
            <button className="heroButton">Reviews</button>
          </Link>
          <Link href="#">
            <button className="heroButton">Dimensions</button>
          </Link>
          <Link href="#">
            <button className="heroButton">Price</button>
          </Link>
          <Link href="#">
            <button className="heroButton">Materials</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
