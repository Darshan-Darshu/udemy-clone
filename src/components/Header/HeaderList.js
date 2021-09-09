import React from 'react'
import "./HeaderDown.css"

function HeaderList(props) {
    return (
        <li className="headerList">
            <a href="www.udemy.com">{props.list}</a>
        </li>
    )
}

export default HeaderList
