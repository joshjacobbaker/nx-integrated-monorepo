import React from 'react';
import Image from 'next/image';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article>
      <Image
        height="400"
        width="400"
        alt=""
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://i.etsystatic.com/isla/8def97/46566571/isla_180x180.46566571_tc4lrmmm.jpg?version=0"
      />
    </article>
  );
}

export default ExperienceCard;
