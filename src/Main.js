import React from 'react' 
import './styles/MainScreen.css'
import PostItem from './components/PostItem'

function Main(props) {
  const { posts } = props
  return (
    <div style={{
      backgroundColor: '#fff',
      width: 750,
      height :800,
      overflowX: 'hidden',
      overflowY: 'scroll',
      borderRadius: 5
    }}>
     <div className='MainNav'>
        <ul style={{listStyle:'none',display:'flex'}}>
          <li className='acitve'>全部</li>
          <li>追蹤</li>
        </ul>
       <div className='filterContainer'>
          <p> 文章排序依</p>
          <div className='filter'>
            <i className='fas fa-fire'></i> 熱門<i className="fas fa-sort-down"></i>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage:`url('https://megapx-assets.dcard.tw/images/7f868bea-1203-438a-8700-cf9888efed2d/orig.gif')`,backgroundSize:'cover',width:'100%',height:250}}> </div>
        
      {                              
        posts.map(item => (
          <PostItem
            key={item.id}
            gender={item.gender} 
            createdAt={item.createdAt}
            forumName={item.forumName}
            school={item.school}
            title={item.title} 
            excerpt={item.excerpt}
            likeCount={item.likeCount}
            commentCount={item.commentCount}
            media={item.media[0]}
          />
        ))}
    </div>
  )
}

export default Main