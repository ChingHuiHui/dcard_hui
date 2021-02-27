import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../Main'

const api = 'https://www.dcard.tw/service/api/v2'


function Main() {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([])
    
    const getPosts = async() => {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`${api}/posts/?popular=true`)
            setPosts(data)
            setIsLoading(false)
        } catch(err){
            console.log('err', err)
            setIsLoading(false)
        }
    }

    useEffect(()=> {
        getPosts()
    }, [])

    return <Layout posts={posts} isLoading={isLoading} getPosts={getPosts}/> 
}

export default Main