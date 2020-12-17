import React from 'react'
import Header from './header'
import Footer from './footer'
import Nav from "../nav";
import MobileNav from '../nav/mobile'

const Layout = ({ children }) => {
    return (
        <div className="font-normal">
            <Header />
            <MobileNav />
            <div className="py-6 px-5 md:px-10 lg:px-20">
                <Nav />
                <div className="py-6">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
