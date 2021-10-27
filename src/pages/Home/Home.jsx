import './Home.css'

import { useHistory } from 'react-router'

const Home = () => {

    const history = useHistory()

    const handleClickPage = () => {
        history.push('/currencies')
    }
    return (
        <div className='home-wrap'>
          <h1 className='title-home'>Bienvendios al Conversor de Criptomonedas</h1>

          <div className='home-content'>
            <h2 className='hombe-content_text'>
                Obtenga el precio de las siguientes criptos las 24 horas del día:
                <ul>
                    <li>Bitcoin (BTC)</li>
                    <li>Ethereum (ETH)</li>
                    <li>Smooth Love Potion (SLP)</li>
                    <li>Shiba Coin (SHIB)</li>
                </ul>

                <button className='change-page_btn' onClick={handleClickPage}>Pagina siguiente</button>
                
            </h2>
            
          </div>
          
        </div>
    )
}

export default Home
