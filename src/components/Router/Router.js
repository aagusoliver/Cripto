import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Currencies from '../../pages/Currencies/Currencies'
import Home from '../../pages/Home/Home'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path='/currencies' component={Currencies}/>
                    <Route exact={true} path='/home' component={Home}/>
                    <Redirect to='/home'/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router
