import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Loader from './components/Loader'
function App() {


  const [isLoading, setIsLoading] = useState(true)
  const [coords, setCoords] = useState()//ceamos un estado para guardar los datos recibidos
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect(() => {
    const secces = data1 => {

      const obj = {
        lat: data1.coords.latitude,
        lon:data1.coords.longitude
      }
      setCoords(obj)
    }

    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(secces)//con esta linea de codigo accedemos a la apiai de la ubicacion actual de mi navegador

  },[])

  //este codigo solo se ejecuta cuando coords recibe informacion
  useEffect(() => {
    if(coords) {
      //este codigo
      const ApiKey = 'd3e676c49d9c2aa9fb6d39861630bed6'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`
      axios.get(url)
      .then(res => {
        setWeather(res.data)
        setIsLoading(false)
        const obj = {
          celsius: (res.data.main.temp - 273.15).toFixed(1),
          farenheit:((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
        }
        setTemp(obj)
      })
    }
  },[coords])

console.log(weather)


  return (
<div>
  {
    isLoading
      ? <Loader />
      : (<WeatherCard
      weather={weather}
      temp={temp}
      />)
  }
 
</div>
  )
}

export default App
