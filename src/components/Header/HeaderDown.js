import React from 'react'
import "./HeaderDown.css"
import HeaderList from './HeaderList'

function HeaderDown() {
    return (
        <div className="headerDown">
            <ul>
                <HeaderList list="Development" />
                <HeaderList list="Business" />
                <HeaderList list="Finance & Accounting" />
                <HeaderList list="It & software" />
                <HeaderList list="Office Productivity" />
                <HeaderList list="Personal Development" />
                <HeaderList list="Design" />
                <HeaderList list="Marketing" />
                <HeaderList list="Health & Fitness" />
                <HeaderList list="Music" />
            </ul >
        </div>
    )
}

export default HeaderDown
