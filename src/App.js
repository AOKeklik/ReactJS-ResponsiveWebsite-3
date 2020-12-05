import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'
import {RoomProvider} from './context' 
import * as Pages from './pages/Pages'
import * as Components from './components/Components'


function App() {

    return (
        <RoomProvider>
            <BrowserRouter>
                <Components.Navbar />
                <Switch>
                    <Route exact path="/" component={Pages.Home} />
                    <Route exact path="/rooms/" component={Pages.Rooms} />
                    <Route path="/rooms/:slug" component={Pages.SingleRoom} />
                    <Route component={Pages.Error} />
                </Switch>
            </BrowserRouter>
        </RoomProvider>
    ) 
}

export default App;
