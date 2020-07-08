import React, { useState, useEffect } from 'react';
import {
  Link,
  // useParams,
} from 'react-router-dom';
import { connect } from 'react-redux';

import BorderTopCard from './BorderTopCard';
import './DebutDeJeu.css';
import './Box.css';

import { changeType } from '../redux/Reducer';

import barique from '../Images/barique.png';
import book from '../Images/book.png';
import couvert from '../Images/couvert.png';
import france from '../Images/france.png';
import raisin from '../Images/raisin.png';

function ChoixQuestionContainer({ dispatch }) {
  return (
    <div>
      <Link to="/debutjeu">
        <BorderTopCard />
      </Link>
      <div className="contenuBoutons">
        <div className="rougeEtVert">
          <div className="CercleBtn">
            <Link className="BtnLink" to="/descriptions" onClick={() => dispatch(changeType('barique'))}>
              <img src={barique} alt="barique" className="BtnImg" />
            </Link>
          </div>
          <div className="CercleBtn">
            <Link className="BtnLink" to="/descriptions" onClick={() => dispatch(changeType('book'))}>
              <img src={book} alt="book" className="BtnImg" />
            </Link>
          </div>
        </div>
        <div className="oeuilEtNez">
          <div className="CercleBtn">
            <Link className="BtnLink" to="/descriptions" onClick={() => dispatch(changeType('couvert'))}>
              <img src={couvert} alt="couvert" className="BtnImg" />
            </Link>
          </div>
          <div className="CercleBtn">
            <Link className="BtnLink" to="/descriptions" onClick={() => dispatch(changeType('france'))}>
              <img src={france} alt="france" className="BtnImg" />
            </Link>
          </div>
        </div>
        <div className="bouche">
          <div className="CercleBtn">
            <Link className="BtnLink" to="/descriptions" onClick={() => dispatch(changeType('raisin'))}>
              <img src={raisin} alt="raisin" className="BtnImg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const ChoixQuestion = connect()(ChoixQuestionContainer);
export default ChoixQuestion;