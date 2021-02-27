import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../Forum'

const api = 'https://www.dcard.tw/service/api/v2'


function Forum(props) {
    const { match: { params: { name } }} = props

    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [forum, setForum] = useState(null)

    const getForums = async() => {
        setIsLoading(true)
        try {
          const { data } = await axios.get(`${api}/forums/${name}`)
          const forumObj = {
              name: data.name,
              logo: data.logo,
              heroImage: data.heroImage     
          }

          console.log('data', data)
          setForum(forumObj)
          setIsLoading(false)
        } catch(err){
          console.log('err', err)
          setIsLoading(false)
        }
      }
    
    const getPosts = async(isPopular = true) => {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`${api}/forums/${name}/posts/?popular=${isPopular}`)
            setPosts(data)
            setIsLoading(false)
        } catch(err){
            console.log('err', err)
            setIsLoading(false)
        }
    }

    
    useEffect(()=> {
        getForums()
        getPosts()
    }, [name])

    return <Layout forum={forum} posts={posts} isLoading={isLoading} getPosts={getPosts}/> 
}

export default Forum