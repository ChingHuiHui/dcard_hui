import React from 'react';

const Item = props=>{
    let url = require(`../img/${props.link}`)
  
    return(
        <div  style={{
            backgroundImage: `url(${url})`,  
            backgroundSize: 'cover',
            height: 200,
            width: 200,
            position: 'relative',
            marginBottom: 5
            }}>
            <p style={styles.text}>{props.text}</p>
        </div>
    )
}

const styles = {
    text:{
        position: 'absolute',
        bottom: 5,
        left: 5,
        color: '#fff',
        background: 'rgba(0,0,0,0.8)',
        margin: 0,
        padding: '5px 10px',
        fontSize: 20
    }
}


export default Item