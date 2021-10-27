import Cripto from '../../components/Router/Cripto/Cripto'
import { useHistory } from 'react-router'
import { instance } from '../../axios/axios'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Currencies = () => {
    
    // Creo mis estados para las criptos y para el dólar Blue
    
    const [currencyPrice, setCurrencyPrice] = useState(0)
    const [currencyName, setCurrencyName] = useState('')
    
    const [dolarCompra, setDolarCompra] = useState(0)
    const [dolarVenta, setDolarVenta] = useState(0)
    
    const [cripto, setCripto] = useState ([]);
    // Creo mis constantes para la API key y el TOKEN

    const apiKey = '928742e102b3a41a4e85bd96f464e2efc5e870fc'
    const TOKEN = '943f30310f51c578d85fbf41ec9d0511'

    // Realizo mi llamada que va a devolver el valor de la cripto elegida

    const getCurrencie = async (currencie) => {
        try {

            const res = await instance.get(`currencies/ticker?key=${apiKey}&ids=BTC,ETH,SLP,SHIB,XRP,ZUT,GBX&convert=USD`)

            console.log()

            setCurrencyName(res.data[0].name)
            setCurrencyPrice(res.data[0].price )
            
            setCripto(res.data)
        } catch (error) {
            alert(`ERROR: ${error}`)
        }
    }


    // Creo mi función que agarra el valor del input y lo lleva al parámetro de mi llamada

    const handleChangeOption = (e) => {
        getCurrencie(e.target.value)
    }

    // Creo mi función que me devuelva el valor del dolar Blue

    const getDolarBlue = async () => {
        const res = await axios.get('https://dolarblue.herokuapp.com/api/dolar-blue', {
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        })
        setDolarCompra(res.data.data.compra)
        setDolarVenta(res.data.data.venta)
    }

    // Uso un useEffect para mostrar el valor de compra y venta del dolar cuando se recargue la página

    useEffect(() => {
        getDolarBlue()
    }, [])

    
    // Creo un botón que me devuelta a la página anterior

    const history = useHistory()

    const handleClickPage = () => {
        history.push('/home')
    }

    useEffect(() => {
        getCurrencie()
    }, []);

    return (
        <div>
            {/* <h1>Seleccioná la criptomoneda a cotizar</h1>
            <select onChange={handleChangeOption}>
                <option value='BTC'>BTC</option>
                <option value='ETH'>ETH</option>
                <option value='SLP'>SLP</option>
                <option value='SHIB'>SHIB</option>

            </select> */}
            
            <div className='dolarBlue'>
                <h1>Dolar Blue cotización</h1>
                <h1>Compra {dolarCompra}</h1>
                <h1>Venta {dolarVenta}</h1>
                <hr />
            </div>
            <div>
                {cripto.map((c, i) => <Cripto key= {i} {...c} dolarVenta = {dolarVenta} />)}
            </div>
            <button className='home-page_btn' onClick={handleClickPage}>Home</button>
        </div>
    )
}

export default Currencies
