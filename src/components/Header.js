import React from 'react';
import Search from './Search';
import Likes from './Likes'

const Header = function({onSearchClick, handleSearchChange, userInput}){
    return(
          <header className="header">
            <img src="./img/logo.png" alt="Logo" className="header__logo"></img>
            <Search onSearchClick ={ onSearchClick } handleSearchChange = { handleSearchChange } userInput = { userInput }/> 
            <Likes />
          </header> 

    )
}
export default Header