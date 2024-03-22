import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import PizzaMenu from "./components/PizzaMenu/Menu";
import BakeryMenu from "./components/BakeryMenu/Menu";


import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Newsletter from "./components/Footer/Newsletter";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Account from "./components/Account/Account";
import Error from "./components/Error/Error";
import { useEffect } from "react";
import { connect } from "react-redux";

const App = ({cart}) => {
  const theme = {
    colors: {
      heading: "#FFF1E3",
      text: "#FFF1E3",
      white: "#fff",
      black: "#212529",
      helper: "#EDE42F",
      bg: "#B8001F",
      btn: "#FBA906",
      btnHover: "#FFCB63",
      footer_bg: "#0a1435",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#fff",
      gradient:
        "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };



  useEffect(() => {

  
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  

  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant-menu" element={<Menu />} />
          <Route path="/bakery-menu" element={<BakeryMenu />} />
          <Route path="/pizza-menu" element={<PizzaMenu />} />


          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps
)(App);
