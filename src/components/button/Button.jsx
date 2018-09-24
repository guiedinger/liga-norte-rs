import React from 'react'
import './button.css'
import mapMarker from './../../assets/map-marker.svg'

export default (props) => (
    <button  className={'btn ' + props.color}>
    <img src={mapMarker} alt="icon"/>
    {props.children}
    </button>
)