import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Jewelry from '../components/Jewelry';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export function Index() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
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
        <section id="contactMe" className="snap-start">
          <Contact />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default Index;
