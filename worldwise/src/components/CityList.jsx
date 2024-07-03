/* eslint-disable react/prop-types */
import CityItem from "./CityItem";
import styles from "./CityList.module.css"
import Spinner from "./Spinner"
import Message from "./Message"

function CityList({cities ,isLoading }) {

  if(isLoading) return <Spinner /> ;

  if(cities.length === 0 ) return <Message message="add ur city by clicking on the map"/>


  return <ul className={styles.CityList}>

          {cities.map(city=> <CityItem city={city} key={city.id}/>)}

        </ul>

}

export default CityList
