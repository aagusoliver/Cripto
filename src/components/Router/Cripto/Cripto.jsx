import { useState } from "react"

const Cripto = ({name, price, dolarVenta, logo_url}) => {

    const [cantidad, setCantidad] = useState(1);

    const handleChangeCantidad = (e) => {
        setCantidad(e.target.value);
    }

    return (
        <div className='cripto_stats'>
            <div style={{display:"flex", alignItems:"center" }}>
            <h1>Cripto: {name}</h1>
            <img src={logo_url} alt="criptoimg" style={{width: "48px", height: "48px"}}/>
            </div>
            <h1> Precio: USD {price} </h1>
            <h1>Cotización en Pesos Argentinos: $ {(price * dolarVenta)}</h1>
            <label htmlFor="inputcripto" style = {{fontSize: "2rem", color:"blue"}}>Cantidad: </label>
            <input type="number" id="inputcripto" min="1" value={cantidad} onChange={handleChangeCantidad}/>
            <h1 style={{color: "green"}}>Precio total USD: {cantidad * price}</h1>
            <h1 style={{color: "red"}}>Precio total peso ARG: {cantidad * price * dolarVenta}</h1 >
            <hr />
        </div> 
    )
}

export default Cripto
