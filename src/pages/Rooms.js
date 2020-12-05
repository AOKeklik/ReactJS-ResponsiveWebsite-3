import React from 'react'
import {Link} from 'react-router-dom'
import * as Components from '../components/Components' 

function Rooms() {
    return (
        <>
            <Components.Hero hero="roomsHero">
                <Components.Banner title="our rooms">
                    <Link to="/" className="btn-primary">return home</Link>
                </Components.Banner>
            </Components.Hero>
            <Components.RoomsContainer />
        </>
    )
}

export default Rooms
