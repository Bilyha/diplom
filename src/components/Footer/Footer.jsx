import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__map">
        <Link to='/main'> Main </Link>
        <Link to='/scoreboard'>Score Board </Link>
        <Link to='/statistic'> Statistics </Link>
      </div>
      <h4>Developed By Ilya Babich. All rights reserved.</h4>
    </div>
  );
}
