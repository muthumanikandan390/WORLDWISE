/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './CityItem.module.css'
import { useCities } from '../contexts/CitiesContext';

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));


function CityItem({city}) {


  const { currentCity } = useCities()
  const { date , position , id } = city
  console.log(position)

  function handleClick(e){
    e.preventDefault()
    console.log("hello")
  }



  console.log(city)
  return (
    <li >
      <Link className={`${styles.cityItem} ${id === currentCity.id ? `${styles["cityItem--active"]}` : ""}`} to={`${city.id}?lat=${position.lat}&lan=${position.lng}`} >
      <span className={styles.emoji}>{city.emoji}</span>
      <h3 className={styles.name}>{city.cityName}</h3>
      <time className={styles.date}> ( {formatDate(date)} ) </time>
      <button className={styles.deleteBtn} onClick={handleClick}>&times;</button>
      </Link>

    </li>
  )
}

export default CityItem
