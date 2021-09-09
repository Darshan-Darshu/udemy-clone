import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {Avatar} from '@material-ui/core'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <img src="https://www.vectorlogo.zone/logos/udemy/udemy-ar21.svg" alt="" />
                </div>
                <p>Categories</p>
            </div>
            <div className="header__middle">
                <form>
                    <SearchIcon />
                    <input type="text" placeholder="Search for anything" />
                    <button type="submit">submit</button>
                </form>
            </div>
            <div className="header__rigth">
                <ul>
                    <li>
                        <a href="www.udemy.com">Udemy Business</a>
                    </li>
                    <li>
                        <a href="www.udemy.com">Teach on Udemy</a>
                    </li>
                    <li>
                        <a href="www.udemy.com">My learning</a>
                    </li>
                </ul>
            </div>
            <div className="header__icons">
                <div className="header__icon">
                    <FavoriteBorderIcon />
                </div>
                <div className="header__icon">
                    <ShoppingCartIcon />
                </div>
                <div className="header__icon">
                    <NotificationsNoneIcon />
                </div>
                <div className="header__avatar">
                    <Avatar src="" className="header__avatarMain"/>
                </div>
                
            </div>
        </div>
    )
}

export default Header
