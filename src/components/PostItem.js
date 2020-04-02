import React from 'react'
import './PostItem.css'

const PostItem = props =>{
    

const createdAt = new Date(props.createdAt).toLocaleString()
const avater = `gender ${props.gender}`
console.log(createdAt.split(' '))
    return(
        <div className='postItem'>
            <div className='dataContainer'>
                <div className={avater}></div>
    <p className='dataText dot'>{props.forumName}</p>
    <p className='dataText dot'>{props.school?props.school:'匿名'}</p>
    <p className='dataText'>{createdAt}</p>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className='contentContainer'>
                <div className='titleContainer'>
    <h3>{props.title}</h3>
                   <p className='description'>
                  {props.excerpt}
                    </p> 
                    <div className='commentContainer'>
                <p>{props.likeCount}</p>
                        <p>回應 {props.commentCount}</p>
                        <p><i className="fas fa-bookmark" style={{marginRight:5}}></i>收藏</p>
                    </div>
                </div>
              
               {typeof props.media=='object'?(  <div style={{height:84,width:84,backgroundImage:`url(${props.media.url})`,backgroundSize:'cover',borderRadius:5}}>
                </div>):''}
            </div>
        </div>
    )
  
}

export default PostItem