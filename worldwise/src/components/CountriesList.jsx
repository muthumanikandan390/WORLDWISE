/* eslint-disable react/prop-types */

import styles from "./CountryList.module.css"
import Spinner from "./Spinner"
import Message from "./Message"
import CountryItem from "./CountryItem";

function CountriesList({cities , isLoading }) {



  if(isLoading) return <Spinner /> ;

  if(cities.length === 0 ) return <Message message="add ur city by clicking on the map"/>


  return <ul className={styles.countriesList}>

          {cities.map(city=> <CountryItem country={city} key={city.country} />)}

        </ul>

}

export default CountriesList