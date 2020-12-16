import React from 'react'
import Header from './header'
import Footer from './footer'
import Nav from "../Nav";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="py-6 px-20">
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
