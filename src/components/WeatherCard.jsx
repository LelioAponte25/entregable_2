import {useState } from 'react'
const WeatherCard = ({weather, temp}) => {

  const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp = () => setIsCelsius(!isCelsius)
  return (
    <div className='figure'>
          <article className='caja'>
      <div className='container'>
      <h1>Weather App</h1>
      <h2>{weather?.name}, {weather?.sys.country}</h2>
      <div>
        <div>
        <img src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} 
        alt="" />
        </div>
        <section>
          <h3>"{weather?.weather[0].description}"</h3>
          <ul>
            <li><span className='n'>Wind Speed:</span><span className='lista'>{weather?.wind.speed}m/s</span></li>
            <li><span className='n'>Clouds:</span><span className='lista'>{weather?.clouds.all}%</span></li>
            <li><span className='n'>Pressure:</span><span className='lista'>{weather?.main.pressure}hPa</span></li>
          </ul>
        </section>
      </div>
      <h2>{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit } °F`}</h2>
      <button onClick={handleChangeTemp}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
      </div>
    </article>
    </div>

  )
}

export default WeatherCard