import React from 'react'
import './GoodItem.css'

const GoodItem =props=>{
    return(
        <div className='GoodItem' >
            <div className='GoodTop' style={{backgroundImage:`url(${props.img})`,width:200,height:200,backgroundSize:'cover',borderRadius:'10px 10px 0 0 '}}></div>
            <div className='GoodpBottom'>
                 <p className='smalltext'>{props.smalltext}</p>
                <p className='GoodName'>{props.productName}</p>
                <p className='GoodPrice'>${props.price[0]}{props.price[1]?`-$${props.price[1]}`:''}</p>
                <div className='tagContainer'>
                  {props.tag.map(t=>(
                        <div className='tag'>{t}</div>
                  ))}
                </div>
            </div>
        </div>
    )
}



export default GoodItem