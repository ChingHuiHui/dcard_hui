import React, { useState } from 'react' 
import { Link } from 'react-router-dom' 
import './styles/FourmScreen.css'
import './styles/MainScreen.css'

const DATA = [  
  {id:2,name:'武漢肺炎' ,url:'https://megapx-stage-assets.dcard.io/images/2f8b37b8-c437-4783-b95b-004f2f82479c/full.jpeg',fourm:'2019_ncov'},
  {id:3,name:'女孩' ,url:'https://megapx-stage-assets.dcard.io/images/6dd7b8fa-ec0f-4653-b2bc-a6f7db0d4739/full.jpeg',fourm:'girl'},
  {id:4,name:'有趣', url:'https://megapx-stage-assets.dcard.io/images/91fd89b7-6e27-4d7d-b5ce-1dec5f3650d2/full.jpeg',fourm:'funny'},
  {id:5,name:'美食' ,url:'https://megapx-stage-assets.dcard.io/images/c197b79a-00ad-4994-82b4-a59432ce530f/full.jpeg',fourm:'food'},
  {id:6,name:'心情' ,url:'https://megapx-stage-assets.dcard.io/images/141104f9-6fa7-43a9-8ebf-6b76b5402ead/full.jpeg',fourm:'mood'},
  {id:7,name:'YouTuber' ,url:'https://megapx-assets.dcard.tw/images/5b68ba39-26c6-4a36-8a6b-e7fe9bf60c7f/orig.jpeg',fourm:'youtuber'},
  {id:8,name:'美妝' ,url:'https://megapx-stage-assets.dcard.io/images/9fb1e631-b6cf-4bbc-be70-b2039bc4f28c/full.jpeg',fourm:'makeup'},
  {id:9,name:'官方公告' ,url:'https://megapx-assets.dcard.tw/images/5156f0d1-c338-45bd-b090-77c7f8f0e42a/orig.jpeg',fourm:'announcement'},
  {id:10,name:'小事公益' ,url:'https://megapx-stage-assets.dcard.io/images/fc48b590-6188-498c-a415-75826bc0879d/full.jpeg',fourm:'smallgoodthings'},
  {id:11,name:'新生季', url:'https://megapx-stage-assets.dcard.io/images/c8416d80-1d90-41dc-b183-aad91ce8481f/full.jpeg',fourm:'freshman'},
  {id:12,name:'美甲' ,url:'https://megapx-stage-assets.dcard.io/images/d17fcf4d-23c0-4b6d-a8bf-17650077e55f/full.jpeg',fourm:'manicure'},
  {id:13,name:'醫美' ,url:'https://megapx-stage-assets.dcard.io/images/141104f9-6fa7-43a9-8ebf-6b76b5402ead/full.jpeg',fourm:'facelift'},
  {id:14,name:'追星' ,url:'https://megapx-stage-assets.dcard.io/images/f19275b2-a1cb-4668-ab4e-93acedd45627/full.jpeg',fourm:'entertainer'},
  {id:15,name:'韓星' ,url:'https://megapx-stage-assets.dcard.io/images/9fb1e631-b6cf-4bbc-be70-b2039bc4f28c/full.jpeg',fourm:'korea_star'},
]
function FourmAll() {
  const [ fourmList, setFourmList ] = useState(DATA)

  return(
    <div className='screen'>
      <div className='mainContainer'>
        <div className='titleContainer'>
          <p className='forumsTitle'>全部看板</p>
          <div className='selector'>看板<span className='fas  fa-sort-down'></span></div>
        </div>
        <div className='forumsList'>
          {
            fourmList.map((item)=>(            
              <Link to={`/forum/${item.fourm}`}  style={{ textDecoration: 'none' }}>
              <div className='fourmItem'  >
                <div style={{
                  backgroundImage:`url(${item.url})`, 
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundSize: 'cover'
                }}></div>
                <p className='name' >{item.name}</p>
                <div className='register'>訂閱</div> 
              </div>
            </Link>
          ))}
         </div>
      </div>
    </div>
  )
}


       
export default FourmAll