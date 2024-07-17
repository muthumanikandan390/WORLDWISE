// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import styles from "./Form.module.css";
import Button from "./Button";
// import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useCities } from "../contexts/CitiesContext";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"

function Form() {
  const [lat , lng] = useUrlPosition()

  const {createCity} = useCities()

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeocoding , setIsLoadingGeocoding] = useState(false)

  useEffect(function(){

    async function fetchCityData(){

      try{
          setIsLoadingGeocoding(true)
          const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`)
          const data = await res.json()
          console.log(data)
          setCityName(data.city || data.locality || "")
          setCountry(data.countryName)
      }
      catch (err) {

      }
      finally {
        setIsLoadingGeocoding(false)
      }
    }

    fetchCityData()

  } , [lat , lng])


function handleSubmit(e){
e.preventDefault()
if (!cityName || !date ) return;
const emoji = convertToEmoji(country);
const newCity = {
cityName,
country,
date,
emoji,
notes,
position:{lat , lng} ,
}

createCity(newCity)

  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker id="date" onChange={(date)=> setDate(date)} selected={date} dateFormat="dd/MM/yyyy"/>
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary"> add </Button>
        <BackButton />

      </div>
    </form>
  );
}

export default Form;
