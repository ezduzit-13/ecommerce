import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from "./components/Navbar";
import './pages/main.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path = '/login' element = {<Login/>}/>
          <Route exact path = '/signup' element = {<Signup/>}/>
          <Route exact path = '/' element = {<HomePage/>}/>
          <Route exact path = '/product/:id' element = {<ProductPage />}/>
          <Route exact path = '/checkout' element = {<CheckoutPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
