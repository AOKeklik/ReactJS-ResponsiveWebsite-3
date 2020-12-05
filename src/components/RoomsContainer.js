import React from 'react'
import {withRoomConsumer} from '../context'
import * as Components from './Components'

function RoomsContainer({context}) {
    const {rooms, sortedRooms, loading} = context

    if(loading) return <Components.Loading />
    
    return <>
        <Components.RoomsFilter rooms={rooms} />
        <Components.RoomsList rooms={sortedRooms} />
    </>
}

export default withRoomConsumer(RoomsContainer)

/*
import React from 'react'
import {RoomConsumer} from '../context'
import * as Components from './Components'

function RoomsContainer() {
    return (
        <RoomConsumer>
            {(value) => {
                const {rooms, sortedRooms, loading} = value
                console.log(value)  

                if(loading) return <Components.Loading />
                
                return <>
                        <Components.RoomsFilter rooms={rooms} />
                        <Components.RoomsList rooms={sortedRooms} />
                </>
            }}
        </RoomConsumer>
    )
}

export default RoomsContainer
*/