import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export function Index() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Jewelry by Miranda</title>
      </Head>
      <Header />
      <main>
        {/* hero*/}
        <section id="#hero" className="snap-center">
          <Hero />
        </section>
        {/* Another Section Here */}
        <section></section>
        {/* Another Section Here */}
        <section></section>
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
