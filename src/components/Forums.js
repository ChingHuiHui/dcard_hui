import React from 'react'
import ForumsItem from './ForumsItem'
import ForumTop from './ForumTop'

const Forums = props=>{

 
    const ForumsData = [
        
        {id:2,name:'武漢肺炎' ,url:'https://megapx-stage-assets.dcard.io/images/2f8b37b8-c437-4783-b95b-004f2f82479c/full.jpeg',fourm:'2019_ncov'},
        {id:3,name:'女孩' ,url:'https://megapx-stage-assets.dcard.io/images/6dd7b8fa-ec0f-4653-b2bc-a6f7db0d4739/full.jpeg',fourm:'girl'},
        {id:4,name:'有趣', url:'https://megapx-stage-assets.dcard.io/images/91fd89b7-6e27-4d7d-b5ce-1dec5f3650d2/full.jpeg',fourm:'funny'},
        {id:5,name:'美食' ,url:'https://megapx-stage-assets.dcard.io/images/c197b79a-00ad-4994-82b4-a59432ce530f/full.jpeg',fourm:'food'},
        {id:6,name:'心情' ,url:'https://megapx-stage-assets.dcard.io/images/141104f9-6fa7-43a9-8ebf-6b76b5402ead/full.jpeg',fourm:'mood'},
        {id:7,name:'YouTuber' ,url:'https://megapx-assets.dcard.tw/images/5b68ba39-26c6-4a36-8a6b-e7fe9bf60c7f/orig.jpeg',fourm:'youtuber'},
        {id:8,name:'美妝' ,url:'https://megapx-stage-assets.dcard.io/images/9fb1e631-b6cf-4bbc-be70-b2039bc4f28c/full.jpeg',fourm:'makeup'},

    ]

    const renderList = ()=>{
      return ForumsData.map((f)=><ForumsItem name={f.name} url={f.url} key={f.url} fourm={f.fourm}/>) 
    }
    return(
    <div>

        <ForumTop name='所有看板' icon='fas fa-list-alt' link='forums'/>
        <ForumTop name='即時熱門看板' icon='fas fa-fire' link='popular'/>
        <ForumTop name='好物研究室' icon='fas fa-shopping-cart' link='Goods'/>
        <p style={{color:'#547588',fontSize:14,padding: '0 15px'}}>追蹤的看板</p>
        <ForumsItem id='1' name='輔仁大學' url='https://megapx-assets.dcard.tw/images/65316159-38dd-4fc4-bac8-03833d2530fb/orig.jpeg' fourm='fju'/>
        <p style={{color:'#547588',fontSize:14,padding: '0 15px'}}>即時熱門看板</p>
        {renderList()}
        

    </div>
    )
}

export default Forums