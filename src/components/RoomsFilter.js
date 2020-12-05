import React, {useContext} from 'react'
import {RoomContext} from '../context'
import * as Components from './Components'

// TEKRAR EDEN ICERIKLERI ALMAMASI ICIN set DEGERI KULLANIYORZ
//const getUnique = (items, value) => Array.from(new Set(items.map(item => item[value])))
const getUnique = (items, value) => [...new Set(items.map(item => item[value]))]

const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext)
    const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets} = context
    // get unique types
    let types = getUnique(rooms, 'type')
    //all EKLENDI
    types = ['all', ...types]
    // map to jsx
    types = types.map((item, index) => <option key={index} value={item}>{item}</option>)
    // get unique 
    let people = getUnique(rooms, 'capacity')
    // people to jsx
    people = people.map((item, index) => <option key={index} value={item}>{item}</option>) 

    //console.log(price)

    return <>
        <section className="filter-container">
            <Components.Title title="search rooms" />
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        onChange={handleChange} 
                        value={type} 
                        name="type" 
                        id="type" 
                        className="form-control"
                    > {types}
                    </select>
                </div>
                {/*end select type*/}
                {/*guests*/}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select 
                        onChange={handleChange} 
                        value={capacity} 
                        name="capacity" 
                        id="capacity" 
                        className="form-control"
                    > {people}
                    </select>
                </div>
                {/*end guests*/}
                {/*room price*/}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        onChange={handleChange}
                        min={minPrice}
                        max={maxPrice}
                        value={price}
                        name="price"
                        type="range"
                        className="form-control" />
                </div>
                {/*end room price*/}
                {/*size*/}
                <div className="form-group">
                    <label htmlFor="">room size</label>
                    <div className="size-inputs">
                        <input
                            onChange={handleChange}
                            value={minSize}
                            name="minSize"
                            type="number"
                            className="size-input" />
                        <input
                            onChange={handleChange}
                            value={maxSize}
                            name="maxSize"
                            type="number"
                            className="size-input" />
                    </div>
                </div>
                {/*end size*/}
                {/*extras*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                            onChange={handleChange}
                            checked={breakfast}
                            name="breakfast"
                            id="breakfast"
                            type="checkbox" />
                        <label htmlFor="breakfast">breakfasr</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            onChange={handleChange}
                            checked={pets}
                            name="pets"
                            id="pets"
                            type="checkbox" />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*end extras*/}
            </form>
        </section>            
    </>
}

export default RoomsFilter
