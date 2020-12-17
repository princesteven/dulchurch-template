import React, { useState } from 'react'
import { menus } from '../nav/menu'
import { navigate } from '@reach/router'
import Hamburger from 'hamburger-react'
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const renderItems = menus.map(menu => {
        return {
            title:menu.name,
            itemId:menu.link,
            elemBefore: () => menu.icon,
            subNav:menu.children ? menu.children.map(subnav => {
                return {
                    title: subnav.name,
                    itemId: subnav.link
                }
            }) : []
        }
    })

    return (
        <div className="md:hidden bg-black">
            <div className="flex justify-between px-3 text-white">
                <span className="py-4">Menu</span>
                <Hamburger color="#FFFFFF" onToggle={toggled => {
                    setIsOpen(toggled)
                    console.log('isOpen', isOpen)
                    console.log('toggled', toggled)
                }} />
            </div>

            <div
                className={`fixed top-0 bottom-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${isOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
                    }`}
            >
                <Navigation
                    activeItemId="/"
                    onSelect={({ itemId }) => {
                        navigate(itemId);
                    }}
                    items={renderItems}
                />
            </div>
        </div>
    )
}

export default MobileMenu
