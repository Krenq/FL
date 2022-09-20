import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

function Home() {
  return (
    <article className="container-base flex justify-center items-center text-5xl font-bold bg-gray h-1100px">
      / PAGE
    </article>
  );
}

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <Layout title="Главная" description="Описание главной страницы">
      <Header />
      {page}
      <Footer />
    </Layout>
  );
};
