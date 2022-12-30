import React from 'react';
import { motion } from 'framer-motion';
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Best Sellers
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFFFFF]/20">
        {projects.map((project) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              src="https://i.etsystatic.com/23690820/r/il/a691f2/2987056443/il_340x270.2987056443_dndu.jpg"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-x-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/20">
                  Beautifully paired with class & style
                </span>
                {project} of
                {projects.length}
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                voluptatum ipsum enim. At error, ullam natus enim cupiditate,
                placeat cumque doloribus quaerat aliquid vel incidunt quo,
                magnam est magni officia assumenda nostrum ratione illum illo.
                Minima maxime, excepturi odit omnis libero nihil, dignissimos
                corporis consectetur dolore temporibus delectus magni.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[20%] bg-[#F7A0BA]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
