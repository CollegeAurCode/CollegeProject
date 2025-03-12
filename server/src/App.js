import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Contact from "./component/contact/Contact";
import Blog from "./component/blog/Blog";
import Error from "./component/error/Error";
import About from "./component/about/About";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
import CoreSubjects from "./component/course/CoreSubjects";
import CompetitiveSubjects from "./component/course/CompetitiveSubjects";
import CodingSubjects from "./component/course/CodingSubjects";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='coreSubjects' element={ <CoreSubjects /> }/>
        <Route path='competitiveSubjects' element={ <CompetitiveSubjects /> }/>
        <Route path='codingSubjects' element={ <CodingSubjects /> }/>
        <Route path='contact' element={ <Contact /> }/>
        <Route path='blog' element={ <Blog /> }/>
        <Route path='about' element={ <About /> }/>
        <Route path='login' element={ <Login /> }/>
        <Route path='signup' element={ <Signup /> }/>
        <Route path='*' element={ <Error /> }/>
      </Routes>
    </>
  );
}

export default App;
