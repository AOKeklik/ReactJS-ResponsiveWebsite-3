import React, { Component } from 'react'
import * as Components from './Components' 
import {RoomContext} from '../context'

class FeaturedRooms extends Component {
    static contextType = RoomContext

    render() {
        let {loading, featuredRooms: rooms} = this.context
        rooms = rooms.map(room => <Components.Room key={room.id} room={room} />)

        return (
            <section className="featured-rooms">
                <Components.Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ?  <Components.Loading /> : rooms} 
                </div>
            </section>
        ) 
    }
}

export default FeaturedRooms

