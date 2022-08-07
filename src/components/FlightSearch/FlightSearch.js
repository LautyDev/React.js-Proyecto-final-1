import { React, useState } from 'react'
import './FlightSearch.css'

const FlightSearch = () => {
    const [flightSearch, setFlightSearch] = useState('')

    const [length, setLength] = useState('')
    const [error, setError] = useState()

    const [hex, setHex] = useState('')
    const [regNumber, setRegNumber] = useState('')
    const [flag, setFlag] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [alt, setAlt] = useState('')
    const [dir, setDir] = useState('')
    const [speed, setSpeed] = useState('')
    const [vSpeed, setVSpeed] = useState('')
    const [squawk, setSquawk] = useState('')
    const [flightNumber, setFlightNumber] = useState('')
    const [flightIcao, setFlightIcao] = useState('')
    const [flightIata, setFlightIata] = useState('')
    const [depIcao, setDepIcao] = useState('')
    const [depIata, setDepIata] = useState('')
    const [arrIcao, setArrIcao] = useState('')
    const [arrIata, setArrIata] = useState('')
    const [airlineIcao, setAirlineIcao] = useState('')
    const [airlineIata, setAirlineIata] = useState('')

	const handleInputChange = ({ target }) => {
		setFlightSearch(target.value)
	}

    const handleSubmit = (e) => {
        e.preventDefault()

        const getInfo = async () => {
            try {
                const response = await fetch(`https://airlabs.co/api/v9/flights?api_key=d473ce28-356b-4883-9100-4d6dba77865b&flight_iata=${flightSearch.toLocaleLowerCase()}`)
                const data = await response.json()

                setLength(data.response.length)
                setError(false)

                setHex(data.response[0].hex || 'No hay datos')
                setRegNumber(data.response[0].reg_number || 'No hay datos')
                setFlag(data.response[0].flag || 'No hay datos')
                setLat(data.response[0].lat || 'No hay datos')
                setLng(data.response[0].lng || 'No hay datos')
                setAlt(data.response[0].alt || 'No hay datos')
                setDir(data.response[0].dir || 'No hay datos')
                setSpeed(data.response[0].speed || 'No hay datos')
                setVSpeed(data.response[0].v_speed || 'No hay datos')
                setSquawk(data.response[0].squawk || 'No hay datos')
                setFlightNumber(data.response[0].flight_number || 'No hay datos')
                setFlightIcao(data.response[0].flight_icao || 'No hay datos')
                setFlightIata(data.response[0].flight_iata || 'No hay datos')
                setDepIcao(data.response[0].dep_icao || 'No hay datos')
                setDepIata(data.response[0].dep_iata || 'No hay datos')
                setArrIcao(data.response[0].arr_icao || 'No hay datos')
                setArrIata(data.response[0].arr_iata || 'No hay datos')
                setAirlineIcao(data.response[0].airline_icao || 'No hay datos')
                setAirlineIata(data.response[0].airline_iata || 'No hay datos')
            } catch (err) {
                console.log(err)
                setError(true)
            }
        }

        getInfo()
    }

    if (error === true) {
        return (
            <section>
                <article className='flightSearch'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Escriba el código IATA del vuelo'
                            name='search'
                            onChange={handleInputChange}
                            value={flightSearch}
                        />
                        <button type='submit'>Buscar</button>
                    </form>
                </article>
                <article className='flightInfo'>
                    <h2>Error al buscar el vuelo</h2> 
                </article>
            </section>
        )
    }

    if (length === 0) {
        return (
            <section>
                <article className='flightSearch'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Escriba el código IATA del vuelo'
                            name='search'
                            onChange={handleInputChange}
                            value={flightSearch}
                        />
                        <button type='submit'>Buscar</button>
                    </form>
                </article>
                <article className='flightInfo'>
                    <h2>Vuelo no encontrado</h2> 
                </article>
            </section>
        )
    }

    if (length === 1) {
        return (
            <section>
                <article className='flightSearch'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Escriba el código IATA del vuelo'
                            name='search'
                            onChange={handleInputChange}
                            value={flightSearch}
                        />
                        <button type='submit'>Buscar</button>
                    </form>
                </article>
                <article className='flightInfo'>
                    <h3>Hex: <strong>{hex}</strong></h3>
                    <h3>Matrícula: <strong>{regNumber}</strong></h3>
                    <h3>País de origen: <strong>{flag}</strong></h3>
                    <h3>Latitud: <strong>{lat}</strong></h3>
                    <h3>Longitud: <strong>{lng}</strong></h3>
                    <h3>Altitud: <strong>{alt}</strong></h3>
                    <h3>Dirección: <strong>{dir}</strong></h3>
                    <h3>Velocidad: <strong>{speed}</strong></h3>
                    <h3>Velocidad vertical: <strong>{vSpeed}</strong></h3> 
                    <h3>Graznido: <strong>{squawk}</strong></h3>
                    <h3>Número de vuelo: <strong>{flightNumber}</strong></h3>
                    <h3>Código ICAO del vuelo: <strong>{flightIcao}</strong></h3>
                    <h3>Código IATA del vuelo: <strong>{flightIata}</strong></h3>
                    <h3>Código ICAO del aeropuerto de salida: <strong>{depIcao}</strong></h3>
                    <h3>Código IATA del aeropuerto de salida: <strong>{depIata}</strong></h3>
                    <h3>Código ICAO del aeropuerto de llegada: <strong>{arrIcao}</strong></h3>
                    <h3>Código IATA del aeropuerto de llegada: <strong>{arrIata}</strong></h3>
                    <h3>Código ICAO de la aerolínea: <strong>{airlineIcao}</strong></h3>
                    <h3>Código IATA de la aerolínea: <strong>{airlineIata}</strong></h3>
                </article>
            </section>
        )
    }

	return (
		<article className='flightSearch'>
			<form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Escriba el código IATA del vuelo'
                    name='search'
                    onChange={handleInputChange}
                    value={flightSearch}
                />
                <button type='submit'>Buscar</button>
            </form>
		</article>
	)
}

export default FlightSearch