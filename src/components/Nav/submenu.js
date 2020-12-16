import React from 'react'
import { Link } from 'gatsby'

export const Submenu = ({ submenus }) => {
    const renderSubMenu = submenus.map(submenu => 
        <li className="hover:bg-white hover:text-blue-primary p-2">
            <Link to={submenu.link} className="flex items-center py-3 px-4 space-x-1" activeClassName="bg-white text-blue-primary">
                <span>{submenu.name}</span>
            </Link>
        </li>
    )
    return (
        <div className="hidden md:block bg-gray-primary animate-flipInX">
            <ul className="flex items-center space-x-1">
                { renderSubMenu }
            </ul>
        </div>
    )
}

export default Submenu
