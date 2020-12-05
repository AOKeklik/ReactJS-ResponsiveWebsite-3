import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import defaultIMG from '../assets/images/room-1.jpeg'
import {StyledHero} from '../components/StyledHero'
import * as Components from '../components/Components'


class SingleRoom extends Component {
    constructor(props){
        super(props)

        this.state = {
            slug: this.props.match.params.slug,
            defaultIMG
        }
    }

    static contextType = RoomContext

    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)

        console.log(room)

        if(!room) return <div className="error">
            <h3>no such room could</h3>
            <Link to="/rooms" className="btn-primary">
                back to rooms
            </Link>
        </div>

        const {images, name, description, price, size, capacity, pets, breakfast, extras} = room
        const [img_0, ...imgs] = images

        console.log(extras)

        return <React.Fragment>
            <StyledHero img={ img_0 /* images[0] */ || this.state.defaultIMG}>
                <Components.Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">back to rooms</Link>
                </Components.Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {
                        imgs.map((image, index) => <img key={index} src={image} alt={name} /> )
                    }
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>price : ${size} SQFT</h6>
                        <h6> max capacity : {" "}
                            {
                                capacity > 1 ? `${capacity} people` : `${capacity} person`
                            }
                        </h6>
                        <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
                        <h6>{breakfast && 'free breakfast included'}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {
                        extras.map((item, index) => <li key={index}>- {item}</li>)
                    }
                </ul>
            </section>
        </React.Fragment>
        
    }
}

export default SingleRoom