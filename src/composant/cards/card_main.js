import React from 'react'
import Card from './card'
import './card.scss'

export default function card_main() {
    return (
        <div className="container_card">
                <Card
        title="Batman"
        images="../images/batman.png"
        new_price="500"
        devise="$"
        alt="batman"
       />
       
       <Card
    title="Zelda"
    images="../images/zelda.png"
    new_price="500"
    devise="$"
    alt="zelda"
    />
        <Card
    title="Pika Pika"
    images="../images/zelda.png"
    new_price="500"
    devise="$"
    alt="pokemon"
    />
        </div>
    )
}
