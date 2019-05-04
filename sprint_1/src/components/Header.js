import React from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg'
import uploadIcon from '../assets/Icons/SVG/Icon-upload.svg'

function Header(props) {
    return (
        <header>
            <img className="header__logo" src={logo} alt="Brainflix Logo"></img>
            <form id="searchForm" className="header__search">
                <input type="text" name="searchBox" placeholder="Search"></input>
                <button type="submit" form="searchForm"></button>
            </form>

            <div className="header__upload--container">
                <button className="header__upload--button">
                    <img src={uploadIcon} alt="Upload Button Icon"></img>
                    UPLOAD
        </button>
                <div className="profilepic__container">
                    <img src={props.profilePic} alt="Profile"></img>
                </div>
            </div>
        </header>
    )
}

export default Header;