import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free cocktails",
                info: "DevTools failed to load SourceMap:"
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "DevTools failed to load SourceME"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle",
                info: "DevTools failed to load SourceME"

            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: "DevTools failed to load SourceME"
            }
        ]
    };
    render() {
        return (
            <div>
                <section className="services">
                <Title title="services"></Title>
                    <div className="services-center">
                        {this.state.services.map( (item, index) => {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>
                        })}
                    </div>
                </section>
            </div>
        )
    }
}

// 1:23:41