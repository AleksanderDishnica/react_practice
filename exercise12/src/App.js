import React from 'react'
import './components/style.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const menu = [{
    id: 1,
    title: "Bread Basket",
    description: "Assortment of fresh baked fruit breads and muffins",
    price: 5.50
  }, {
    id: 2,
    title: "Honey Almond Granola with Fruits",
    description: "Natural cereal of honey toasted oats, raisins, almonds and dates",
    price: 7.00
  }, {
    id: 3,
    title: "Belgian Waffle",
    description: "Vanilla flavored batter with malted flour",
    price: 7.50
  }, {
    id: 4,
    title: "Scrambled eggs",
    description: "Scrambled eggs, roasted red pepper and garlic, with green onions",
    price: 7.50
  }, {
    id: 5,
    title: "Blueberry Pancakes",
    description: "With syrup, butter and lots of berries",
    price: 8.50
  }]

  const about = [
    {
      id: 1,
      text: 'About Catering'
    },
    {
      id: 2,
      text: 'Tradition since 1889'
    },
    {
      id: 3,
      text: 'The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.'
    },
    {
      id: 4,
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
  ]

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
        <About about={about} />

        {/* <!-- Menu Section --> */}
        <Menu menu={menu} />

        {/* <!-- Contact Section --> */}
        <Contact title="Contact" address="Catering Service, 42nd Living St, 43043 New York, NY" />

        {/* <!-- End page content --> */}
      </div >

      {/* <!-- Footer --> */}
      <Footer />
    </>
  )
}
