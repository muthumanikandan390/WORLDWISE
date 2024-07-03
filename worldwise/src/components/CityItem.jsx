/* eslint-disable react/prop-types */
import styles from '../components/CityItem.module.css'

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));


function CityItem({city}) {

  const { date } = city



  console.log(city)
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{city.emoji}</span>
      <h3 className={styles.name}>{city.cityName}</h3>
      <time className={styles.date}> ( {formatDate(date)} ) </time>
      <button className={styles.deleteBtn}>&times;</button>


    </li>
  )
}

export default CityItem
