import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../redux/Reducer';

import './Home.css';
import {
  Link,
} from 'react-router-dom';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import BorderTopHome from './BorderTopHome';
import TontonSommelierTitle from '../Images/TontonSommelierTitle.png';
import wine from '../Images/wine.png';

function HomePageContainer({ dispatch }) {
  return (
    <>
      <Link to="/" className="LinkRegister">
        <BorderTopHome />
      </Link>
      <div className="HomeContent">
        <img
          src={TontonSommelierTitle}
          alt="TontonSommelier"
          className="ImgTontonHome"
        />
        <h3 className="TittleHome">Quel est vôtre coffret ?</h3>
        <div>
          <h3 className="TittleHome">
            Scannez le QRcode
            Ou entrez le code :
          </h3>
          <Link className="code QrCodeReaderImg" to="scan">
            <img
              src="https://static.thenounproject.com/png/1433173-200.png"
              alt="ArrowImgTP"
              className="ImgPhoto"
            />
          </Link>
          <div className="InputHomeContent">
            <InputGroup>
              <Input placeholder="Entrez vôtre code" />
              <Link className="code" to="/sessionname" onClick={() => dispatch(changeCategory('1'))}>
                <InputGroupAddon addonType="append"><Button color="secondary"><FontAwesomeIcon icon={faCheck} id="IconCheck" /></Button></InputGroupAddon>
              </Link>
            </InputGroup>
          </div>
        </div>
      </div>
      <div className="HomeBottom">
        <img
          src={wine}
          alt="wine"
          className="ImgWine"
        />
      </div>
    </>
  );
}

const HomePage = connect()(HomePageContainer);
export default HomePage;
