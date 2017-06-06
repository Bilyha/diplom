import React from 'react';
import Header from './../../components/Header/Header';
import Content from './../../components/Content/Content';
import Footer from './../../components/Footer/Footer';
import Main from './../../components/Main/Main';

export default function MainPage() {
  return (
    <div>
      <Header />
      <Content>
        <Main />
      </Content>
      <Footer />
    </div>
  );
}
