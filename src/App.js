import Announcement from "./components/announcement/Announcement";
import Header from "./components/header/Header";
import Hero from "./components/HeroSection/Hero";
import SearchForm from "./components/searchform/Search-Form";
import Aboutv1 from "./components/about/Aboutv1";
import Counter from "./components/counter/Counter";
import Aboutv2 from "./components/about/Aboutv2";
import Cards from "./components/cards/Cards";
import Product from "./components/product/Product";
import Apartments from "./components/tab/Apartments";
import Video from "./components/video/Video";
import Category from "./components/category/Category";
import Testimonial from "./components/testimonial/Testimonial";
import BlogSlider from "./components/blogs/BlogSlider";
import CallToAction from "./components/fotter/CallToAction";
import Footer from "./components/fotter/Footer";

function App() {
  return <>
  <Announcement />
  <Header />
  <Hero />
  <SearchForm />
  <Aboutv1 />
  <Counter />
  <Aboutv2 />
  <Cards />
  <Product />
  <Apartments />
  <Video />
  <Category />
  <Testimonial />
  <BlogSlider />
  <CallToAction />
  <Footer />
  </>
  }
  
  export default App;