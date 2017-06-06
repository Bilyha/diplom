import React from 'react';
import Header from './../../components/Header/Header';
import Content from './../../components/Content/Content';
import Footer from './../../components/Footer/Footer';
import ScoreBoard from './../../components/ScoreBoard/ScoreBoard';

export default function ScoreBoardPage() {
  return (
    <div>
      <Header />
      <Content>
        <ScoreBoard />
      </Content>
      <Footer />
    </div>
  );
}
