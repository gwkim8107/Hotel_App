import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

export default class FeaturedRoom extends Component {
    static contextType = RoomContext;
    render() {
        const { loading, featuredRooms : rooms } = this.context;
        // eslint-disable-next-line no-const-assign
        const passing_rooms = rooms.map( room => {
            return <Room key={room.id} room={room} />
        });
        
        return (
            <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
                    {loading ? <Loading />: passing_rooms }
                </div>
            </section>
        )
    }
}
//2:18:39