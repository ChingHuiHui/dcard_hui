import React, { useEffect, useState } from 'react'
import './styles/MainScreen.css'
import PostItem from './components/PostItem'

function Main(props) {

    const { isLoading, forum, posts, getPosts } = props

    const [ isPopular, setIsPopular ] = useState(true)
    const [ name, setName ] = useState("")
    const [ hero, setHero ] = useState("")
    const [ logo, setLogo ] = useState("")

    useEffect(()=> {
        if(!forum) return 

        setName(forum.name)
        setHero(forum.heroImage.url)
        setLogo(forum.logo.url)
    }, [forum])

    useEffect(()=> {
        getPosts(isPopular)
    }, [isPopular])

    return (
        <div style={{ 
            backgroundColor:'#fff',
            width: 750,
            height: 800,
            overflowX:'hidden',
            overflowY:'scroll',
            borderRadius:5
        }}>
            <div style={{
                backgroundImage:`url(${hero})`,
                backgroundSize:'cover'
                ,width:'100%',
                height:250
            }}/>
            <div className='MainNav'>
                <div className='forumInfo'>
                    <img className='logo' src={logo} alt='logo' />
                    <h1>{name}</h1>
                </div>
                <ul style={{listStyle:'none',display:'flex'}}>
                    <li onClick={()=>setIsPopular(true)} className={isPopular? 'active' : '' }>熱門</li>
                    <li onClick={()=>setIsPopular(false)} className={!isPopular? 'active' : '' }>最新</li>
                    <li>板規</li>
                </ul>
            </div>
            {                              
                posts.map(post => (
                    <PostItem
                      key={post.id}
                      gender={post.gender} 
                      createdAt={post.createdAt}
                      forumName={post.forumName}
                      school={post.school}
                      title={post.title} 
                      excerpt={post.excerpt}
                      likeCount={post.likeCount}
                      commentCount={post.commentCount}
                      media={post.media[0]}
                  />
                ))     
            }
        </div>
    )
}

export default Main