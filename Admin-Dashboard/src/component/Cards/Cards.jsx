import React from 'react'
import './Cards.css'
import { CardData } from '../../Data/Data'
import Card from '../Card/Card'

const Cards = () => {
  return (
    <div className="Cards">
      {CardData.map((card, id)=>{
        return(
          <div className="parentContainer"  key={id}>
            <Card
        
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            vaue={card.value}
            png={card.png}
            series={card.series}
            
            />
          </div>
        )
      })}
    </div>
  )
}

export default Cards