import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';
import { useState } from 'react';

export function HeaderMenu() { 
  
  const [isArrowClicked, setArrowClicked] = useState(false);

  function clickArrowInHeaderMenu() {
    setArrowClicked(!isArrowClicked);
  }
  
  return ( 
    <div className="images-container"> 
      <SettingIcon /> 
      {/* ToDo: zamienić import avatara na komponent <RoundImage/> */}
      <div className="circular_image">
        <img src={require("../../Images/avatar.png")} alt='avatar' />
        {/* <img src='http://placekitten.com/500/500' alt="avatar" /> */}
      </div>
      <div className="name-surname-container">
        <h4>Wojciech Wysocki</h4>
        <h5>kursant</h5>
      </div>

      <button onClick={clickArrowInHeaderMenu} className='header-button-arrow'>
        <MenuArrow className='menu-arrow' />
      </button>
      {isArrowClicked && (
        <div className='header-hiding-div'>
          <button className='header-button-log-in'>Zaloguj się</button>
          <p className='header-question'>
            Nie masz konta?{' '}
            <span className='header-button-register'>Zarejestruj się</span>
          </p>
        </div>
      )}

      
    </div> 
  );
}
