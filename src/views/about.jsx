import React from 'react'

import { NavLink, Outlet } from "react-router-dom"
import { Map } from '../cmps/google-map-container'

export const About = () => {
    return (
        <section className="about">
            <section className="title-container">
                <h2>About us and toys</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla minus explicabo ipsum necessitatibus cupiditate facere corrupti, praesentium tempora molestias, accusantium repellendus, in quasi. Iste labore maxime, vitae nulla odit sint.</p>
            </section>
            <Map />
        </section>
    )
}