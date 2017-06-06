import React from 'react';
import Header from './../../components/Header/Header';
import Content from './../../components/Content/Content';
import Footer from './../../components/Footer/Footer';
import Statistic from './../../components/Statistic/Statistic';

export default function StatisticPage() {
  return (
    <div>
      <Header />
      <Content>
        <Statistic />
      </ Content>
      <Footer />
    </div>
  );
}
