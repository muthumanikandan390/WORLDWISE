import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext(null)


function CitiesProvider({children}) {

  const [cities , setCities] = useState([])
  const [isLoading , setIsLoading] = useState(false)
  const [currentCity , setCurrentCity] = useState({});

  useEffect(function(){
  async function fetchCities(){
try {
  setIsLoading(true)
  const res = await fetch(`http://localhost:9000/cities`)
  const data = await res.json()
  setCities(data)
  console.log("Fetched Cities: ", data); // Log fetched cities
} catch {
  alert("there is a error")
}
finally{
  setIsLoading(false)
}
     }
     fetchCities();
  },[]);


  async function getCity(id) {

    try {
      const res = await fetch(`http://localhost:9000/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("error man 1");
    }
    finally{
      setIsLoading(false)
    }
  }
  async function createCity(newCity) {

    try {
      const res = await fetch(`http://localhost:9000/cities/` , { method : 'POST' , body: JSON.stringify(newCity) , headers : {"content-type":"application/json"}});
      const data = await res.json();
      setCities((cities)=> [...cities , data])
    } catch {
      alert("error man 1");
    }
    finally{
      setIsLoading(false)
    }
  }


  return <CitiesContext.Provider value={{cities , isLoading , currentCity , getCity , createCity}}>
    {children}
  </CitiesContext.Provider>

}


function useCities(){
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("citties context was used outside the cities provider")
  return context

}


export {CitiesProvider , useCities }