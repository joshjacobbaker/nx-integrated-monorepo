import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

export function Index() {
  return (
    <div>
      <Head>
        <title>Jewelery by Miranda</title>
      </Head>
      {/* header */}
      <Header />
      <main>
        {/* banner */}
        <section></section>
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
