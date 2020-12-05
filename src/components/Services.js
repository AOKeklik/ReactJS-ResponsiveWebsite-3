import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import * as Components from './Components'

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cooktails",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, numquam!"
            },{
                icon: <FaHiking />,
                title: "endlees fhiking",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, numquam!"
            },{
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, numquam!"
            },{
                icon: <FaBeer />,
                title: "strongest beer",
                info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, numquam!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Components.Title title="services" />
                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            const {icon, title, info} = item
                             
                            return (
                                <article key={index} className="service">
                                    <span>{icon}</span>
                                    <h6>{title}</h6>
                                    <p>{info}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Services
