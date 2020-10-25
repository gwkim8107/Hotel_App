import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: "abde"
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: ""
            },
            {
                icon: <FaShuttleVan/>,
                title: "free Shuttle",
                info: ""
            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: ""
            }
        ]
    };
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

// 1:23:41