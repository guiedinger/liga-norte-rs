import React from 'react'
import './Card.css'

export default (props) => (
  <div className="content">
    {props.data.map((item, index) => {
      return (
        <div className="card shadow slideIn" key={index}>
          <h1>{item.name}</h1>
          <img src={item.img} alt={item.name}></img>
          <p>{item.content}</p>
          <p className="data">{item.postedAt}</p>
        </div>
      )
    })}
  </div>
)
