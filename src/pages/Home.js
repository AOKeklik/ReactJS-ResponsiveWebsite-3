import React from 'react'
import {Link} from 'react-router-dom'
import * as Components from '../components/Components'

function Home() {
    return (
        <React.Fragment>
            <Components.Hero hero="defaultHero">
                <Components.Banner 
                    title="luxurious rooms" 
                    subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Components.Banner>
            </Components.Hero>
            <Components.Services />
            <Components.FeaturedRooms />
        </React.Fragment>
    )
}

export default Home
