import React from 'react'
import './ForumsItem.css'
import {Link} from 'react-router-dom' 

const ForumTop = ({name,url,icon,link})=>{

    return(
        
        <Link to={`/${link}`}  style={{ textDecoration: 'none' }}>
                <div className='ForumsItem' >
                    {icon?<i style={{fontSize:20,color:'#fff'}} className={icon}></i>:
                    <div className='circle' style={{backgroundImage:`url(${url})`}}></div>}
                    
                <p className='ForumsName'>{name}</p>
            </div>
       </Link>
    )
}



export default ForumTop