import React from 'react'
import './Goods.css'
import GoodItem from './components/GoodItem'
const Goods = props =>{
    const GoodsData = [
        {id:1,img:'https://assets.dcard.tw/dadas-remote-entities/5e783abf9253c02f70bd6c87.jpeg',smalltext:'1人嗨到天邊去',productName:'巴西lntt LADY GOOZ增強液 送按摩棒',price:[1380],tag:['免運','大人玩具']},
        {id:2,img:'https://assets.dcard.tw/dadas-remote-entities/5e79b5a4c37e2f7ab163ce02.jpeg',smalltext:'4間房間變香香',productName:'ANormal簡約擴香瓶',price:[459],tag:['擴香瓶','湊免運']},
        {id:3,img:'https://assets.dcard.tw/dadas-remote-entities/5e742e18a4ad3dfc2579f4fb.jpeg',smalltext:'36人顏值大提升',productName:'Rite口罩套',price:[299,599],tag:['MIT','湊免運']},
        {id:4,img:'https://assets.dcard.tw/dadas-remote-entities/5e742d6451c67e4ba6fb8f20.jpeg',smalltext:'17消除頑固粉刺',productName:'聖克萊爾拔除粉刺系列',price:[699,1080],tag:['超取付款','粉刺剋星']},
        {id:5,img:'https://assets.dcard.tw/dadas-remote-entities/5e7822c260acf84e6490fe01.jpeg',smalltext:'48人抬頭挺萱',productName:'E Heart 機能型美胸衣',price:[479,1379],tag:['湊免運']},
        {id:6,img:'https://assets.dcard.tw/dadas-remote-entities/5e7460f7bb647226a986dc88.png',smalltext:'4張肌膚好保濕',productName:'Vitame B12修護系列',price:[590,1080],tag:['滿千免運','超取付款']},
        {id:7,img:'https://assets.dcard.tw/dadas-remote-entities/5e783646900418653cb38d07.jpeg',smalltext:'31張ㄉㄨㄞ唇',productName:'isoi 積雪草修護潤唇膏',price:[349],tag:['超取付款','湊免運']},
        {id:8,img:'https://assets.dcard.tw/dadas-remote-entities/5e79bd63934aed391de0f79f.jpeg',smalltext:'17人不斷電',productName:'Anker PowerCore行動電源',price:[1125,1659],tag:['超取付款']},
        {id:9,img:'https://assets.dcard.tw/dadas-remote-entities/5e72fa8551c67e7a1afb8cd3.jpeg',smalltext:'79條腸子順暢',productName:'MIHONG® 高效益生菌',price:[369,1800],tag:['益生菌','湊免運']},
    ]
    return(
        <div className='GoodsScreen'>
            <div className='advertisement'>
                <div className='promoteContainer'>
                    <div className='promote'>
                    <div className='timeContainer'>
                        <p>限時限量</p>
                        <span>17</span>: <span>30</span>: <span>50</span>
                    </div>
                    <h1 className='productName'>Genie G唇釉</h1>
                    <div className='priceContainer'>
                        <h2 className='priceS'>$560</h2>
                        <p className='price'>$796</p>
                    </div>
                    <div className='tagContianer'>
                        <div className='tag'>超取付款</div>
                        <div className='tag'>泰國唇釉</div>
                    </div>
                </div>
                </div>
                <div className='promoteImg' alt='img'></div>
            </div>
                <div className='GoodsContainer'>
                    <div className='forumInfo'>
                    <img className='logo' src='https://bpic.588ku.com//original_origin_min_pic/18/11/22/b1ae20e389be3f3e3a16e4f1601c2f4c.jpg' alt='logo' />
                    <h1>好物研究室</h1>
                    </div>
                    <div className='GoodsNav'>
                        <ul>
                            <li className='active'>全部</li>
                            <li>本月放送</li>
                            <li>3C</li>
                            <li>生活</li>
                            <li>服飾</li>
                            <li>美食</li>
                            <li>美妝</li>
                            <li>情趣</li>
                        </ul>
                    </div>
           

            <div className="GoodsList">
                {GoodsData.map((good)=>(
                    <GoodItem
                        id={good.id}
                        smalltext={good.smalltext}
                        productName={good.productName}
                        price={good.price}
                        tag={good.tag}
                        img={good.img}
                    />
                ))}
                
            </div>
            </div>
        </div>
    )
}

export default Goods
