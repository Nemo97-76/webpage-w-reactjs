import React from 'react';
import NavBar from "./components/nav.js"
import Carousel from "./components/carousel.js"
import Welcome from "./components/welcome.js"
import Options from "./components/options.js"
import Create from "./components/create.js"
import BestSales from "./components/bestSales.js"
import RecentlyOrdered from "./components/recentlyOrdered.js"
import SocialMedia from "./components/socialMedia.js"
import Footer from './components/footer.js';
import BackToTop from './components/backToTop.js';
function App() {

  //TODO:use react-modal-image package
  return (
    <>
      <BackToTop />
      <NavBar />
      <Carousel />
      <Welcome />
      <Options />
      <Create />
      <BestSales />
      <RecentlyOrdered />
      <SocialMedia />
      <Footer />
    </>
  )
}
export default App;
