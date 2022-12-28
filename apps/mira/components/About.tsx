import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        whileInView={{
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        src="https://i.etsystatic.com/23690820/r/il/f0450d/4470714247/il_340x270.4470714247_760y.jpg"
        className="-mb-20 md:mb-10 flex-shrink-0 h-56 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-94 xl:h-[600px] xl:w-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4>
          Here is a{' '}
          <span className="underline decoration-[#d5d0d0]/50">little</span>{' '}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ducimus
          voluptatem accusantium, voluptatum dolor et tempore magni aliquid
          cupiditate libero? Obcaecati asperiores quia animi similique tempore,
          fugiat reiciendis molestias aut minus tempora iure! Voluptatum omnis
          suscipit ab provident illum itaque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis nihil soluta, ea consequuntur
          tenetur recusandae sunt quaerat aliquid natus numquam deleniti ut,
          dolore minus ipsum, qui sequi tempore ex voluptatum officia neque iste
          incidunt harum! Laboriosam cupiditate similique nihil impedit.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
