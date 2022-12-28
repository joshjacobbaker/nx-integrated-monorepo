import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Jewelry from '../components/Jewelry';

export function Index() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Jewelry by Miranda</title>
      </Head>
      <Header />
      <main>
        <section id="#hero" className="snap-start">
          <Hero />
        </section>
        <section id="#about" className="snap-center">
          <About />
        </section>
        {/* Another Section Here */}
        <section id="experience" className="snap-center">
          <Jewelry />
        </section>
        {/* Another Section Here */}
        <section></section>
        {/* Another Section Here */}
        <section></section>
        {/* Another Section Here */}
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default Index;
