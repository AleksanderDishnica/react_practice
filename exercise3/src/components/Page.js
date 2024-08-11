import React from 'react'
import './style.css'
import Header from './Header'
import Nav from './Nav'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

export default function Page() {
    return (
        <>
            <Nav />

            {/* <!-- Header --> */}
            <Header />

            {/* <!-- Page content --> */}
            < div className="w3-content" style={{
                maxWidth: '1100px'
            }}>

                {/* <!-- About Section --> */}
                <About />

                {/* <!-- Menu Section --> */}
                <Menu />

                {/* <!-- Contact Section --> */}
                <Contact />

                {/* <!-- End page content --> */}
            </div >

            {/* <!-- Footer --> */}
            <Footer />
        </>
    )
}
