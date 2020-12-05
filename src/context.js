import React, { Component, useState } from 'react'
import items from './data'

const RoomContext = React.createContext()

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,

        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }
//state DEGERLERINI BASLANGICATA BOYLE OLMASI ICIN DEGISTRDIK
    componentDidMount(){
        let rooms = this.formatData(items)//TUM DATA DUZENLENDI
        let featuredRooms = rooms.filter(room => room.featured === true)//featured ODALAR AYRILDI

        let maxPrice = Math.max(...rooms.map(room => room.price))//ENYUKSEK UCRET
        let maxSize = Math.max(...rooms.map(room => room.size))//EN GENIS ODA

        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false,

            price: maxPrice,
            maxPrice,
            maxSize
        })
    }
//BILGILERI FORMATLADIK
    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = {...item.fields, images, id}

            return room
        })

        return tempItems
    }
// slug OZELLIKLERI BENZESEN room LARI BUL
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find(room => room.slug === slug)

        return room
    }
// ODA FILTRELEME ICIN FORM VERILERINI AL
    handleChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value 
        const name = target.name 

        this.setState({
            [name]: value
        }, this.filterRooms)

        console.log({name, value, type: target.type})
    }
// 
    filterRooms = () => {
        const {rooms,type,capacity,price,minSize,maxSize,breakfast,pets} = this.state
        // all the rooms
        let tempRooms = [...rooms]
        // transform values
        //capacity = parseInt(capacity)
        //price = parseInt(price)
        //  filter by type
        if(type !== 'all') tempRooms = tempRooms.filter(room => room.type === type)
        // filter by capacity
        if(capacity !== 1) tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price)
        // filter by size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
        // filter by brakfast
        if(breakfast) tempRooms = tempRooms.filter(room => room.breakfast === true)
        // filter by pets
        if(pets) tempRooms = tempRooms.filter(room => room.pets === true)

        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() {
        //console.log(this.state.rooms)
        return (
            <RoomContext.Provider value={{
                ...this.state, 
                getRoom: this.getRoom,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component){
    return function ConsumenrWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export {RoomProvider, RoomConsumer, RoomContext}
