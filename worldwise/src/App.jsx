import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound'
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import "./index.css"
import CityList from "./components/CityList"
import Form from "./components/Form"
import City from "./components/City"

import CountriesList from "./components/CountriesList"
import { CitiesProvider } from "./contexts/CitiesContext"

// const BASE_URL = "http://localhost:9000"

function App() {






  return (
    <CitiesProvider>
    <BrowserRouter>
    <Routes>
    <Route index element={<Homepage />}/>
    <Route path="product" element={<Product />}/>
    <Route path="pricing" element={<Pricing />}/>
    <Route path="login" element={<Login />}/>
    <Route path="*" element={<PageNotFound />}/>

    <Route path="app" element={<AppLayout />}>

        <Route index element={<Navigate replace to="cities" />}/>
        <Route path="cities" element={<CityList  />}/>
        <Route path="cities/:id" element={<City />} />
        <Route path="countries" element={<CountriesList  />}/>
        <Route path="form" element={<Form />}/>



    </Route>


    </Routes>

    </BrowserRouter>
    </CitiesProvider>
  )
}

export default App
