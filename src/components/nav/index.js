import React, { useState } from 'react'
import { Link } from 'gatsby'
import { menus } from './menu'
import Submenu from './submenu'
import { navigate } from '@reach/router'

const Nav = () => {
    const [hasChildren, setHasChildren] = useState(false)
    const [children, setChildren] = useState([])

    const checkChildren = (menu) => {
        if (menu.children) {
            setHasChildren(true)
            setChildren(menu.children)
        } else {
            setHasChildren(false)
            setChildren([])
            navigate(menu.link)
        }
    }

    const renderMenu = menus.map(menu => 
        <li className="hover:bg-gray-primary">
            <Link to={menu.children ? '#' : menu.link} onClick={ () => checkChildren(menu)} className="flex items-center py-3 px-4 space-x-1" activeClassName="bg-gray-primary">
                {menu.icon}
                <span>{menu.name}</span>
            </Link>
        </li>
    )

    return (
        <nav>
            <div className="hidden md:block">
                <ul className="flex flex-wrap items-center space-x-1 text-sm">
                    { renderMenu }
                </ul>
            </div>
            
            { hasChildren ? <Submenu submenus={children} /> : '' }
        </nav>
    )
}

export default Nav
