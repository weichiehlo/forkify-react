import React from 'react';
import Search from './Search';
import Likes from './Likes'

const Header = function({onSearchClick, onSearchChange, userInput}){
    return(
          <header className="header">
            <img src="./img/logo.png" alt="Logo" className="header__logo"></img>
            <Search onSearchClick ={ onSearchClick } onSearchChange = { onSearchChange } userInput = { userInput }/> 
            <Likes />
          </header> 

    )
}
export default Header