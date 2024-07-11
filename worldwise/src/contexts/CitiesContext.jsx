import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext(null)


function CitiesProvider({children}) {

  const [cities , setCities] = useState([])
  const [isLoading , setIsLoading] = useState(false)

  useEffect(function(){
  async function fetchCities(){
try {
  setIsLoading(true)
  const res = await fetch(`http://localhost:9000/cities`)
  const data = await res.json()
  setCities(data)
} catch {
  alert("there is a error")
}
finally{
  setIsLoading(false)
}
     }
     fetchCities();
  },[]);

  return <CitiesContext.Provider value={{cities , isLoading}}>
    {children}
  </CitiesContext.Provider>

}


function useCities(){
  const context = useContext(CitiesContext);
  return context

}


export {CitiesProvider , useCities}