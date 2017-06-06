import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <h1> AI-Challange </h1>
      </div>
      <div className="header__menu">
        <Link to='/main'> Main </Link>
        <Link to='/statistic'> Statistics </Link>
        <Link to='/scoreboard'>Score Board </Link>
      </div>
      <div className="header__user">
          <span className="user__name">Ilya Babich</span>
          <Image src="https://vignette2.wikia.nocookie.net/mafiagame/images/2/23/Unknown_Person.png/revision/latest?cb=20151119092211" rounded  className="user__photo"/>
      </div>
    </div>
  );
}
