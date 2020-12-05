import React from 'react'
import * as Components from './Components'

function RoomsList({rooms}) {
    if(rooms.length === 0){
        return <>
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search</h3>
            </div>
        </>
    }
        
    return <> 
        <section className="roomslist">
            <div className="roomslist-center">
            {
                rooms.map(item => <Components.Room key={item.id} room={item}  />)
            } 
            </div> 
        </section>
    </>
}

export default RoomsList
