import React from 'react';
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
        src="https://i.etsystatic.com/23690820/r/il/f0450d/4470714247/il_340x270.4470714247_760y.jpg"
        width="300"
        height="300"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      ></Image>
      <h1 className="flex flex-row items-center">
        <span>{text}</span>
        <Cursor cursorColor="gray"></Cursor>
      </h1>
    </div>
  );
}

export default Hero;
