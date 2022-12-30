import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Jewelry from '../components/Jewelry';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export function Index() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFFFFF]/60 scroll-smooth">
      <Head>
        <title>Jewelry by Miranda</title>
      </Head>
      <Header />
      <main>
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <Jewelry />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </main>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              width="10"
              height="10"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://i.etsystatic.com/isla/8def97/46566571/isla_500x500.46566571_tc4lrmmm.jpg?version=0"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default Index;
