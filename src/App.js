import React from 'react';
import Hero from './components/Hero';
import NavBar from "./components/NavBar";
import GlobalStyle from "./GlobalStyle";
import ProjectsImages from "./components/ProjectsImage"
import Footer from './components/Footer';

function App() {
  return (
    <>
    <GlobalStyle/>
    <NavBar/>
    <Hero />
    <ProjectsImages/>
    <Footer/>
    </>
  );
}

export default App;
