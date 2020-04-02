import React from 'react' 
import './MainScreen.css'
import PostItem from './components/PostItem'
import axios from 'axios'
class MainScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoaded: true,
            items:[],
            forum:[],
            img:[],
            tag:0
        }
      
    }


    componentWillReceiveProps(nextProps) {
      const proxy = 'https://cors-anywhere.herokuapp.com/'
      var link = nextProps.match.params.name
      if ((this.props.match.params.name !== nextProps.match.params.name) && link!==undefined) {
        axios.get(`${proxy}https://www.dcard.tw/_api/forums/${link}/posts/?popular=true`)
        .then(res => {
            this.setState({
                isLoaded: true,
                items: res.data,
                tag: 1
              });
    
        },(error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        .then(
          axios.get(`${proxy}https://www.dcard.tw/_api/forums/${link}`)
          .then(res => {
              this.setState({
                  isLoaded: true,
                  forum: res.data,
                  img : [ res.data.heroImage.url,res.data.logo.url]
                });
      
          },(error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        )

      }else if(link===undefined){
        axios.get(`${proxy}https://www.dcard.tw/_api/posts?popular=true`)
        .then(res => {
            this.setState({
                isLoaded: true,
                items: res.data,
                tag:0
              });
    
        },(error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }
    
    
    }

    componentDidMount() {
      var link = this.props.match.params.name
      const proxy = 'https://cors-anywhere.herokuapp.com/'
        if(link){
          axios.get(`${proxy}https://www.dcard.tw/_api/forums/${link}/posts/?popular=true`)
          .then(res => {
              this.setState({
                  isLoaded: true,
                  items: res.data,
                  tag: 1
                });
      
          },(error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
          .then(
            axios.get(`${proxy}https://www.dcard.tw/_api/forums/${link}`)
            .then(res => {
                this.setState({
                    isLoaded: true,
                    forum: res.data,
                    img : [ res.data.heroImage.url,res.data.logo.url]
                  });
        
            },(error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
          )
        }else{
          axios.get(`${proxy}https://www.dcard.tw/_api/posts?popular=true`)
          .then(res => {
              this.setState({
                  isLoaded: true,
                  items: res.data
                 
                });
      
          },(error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        }
       
    }
     render() {

        const { error, isLoaded, items,forum,img } = this.state;
      
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
    
          return (
            
          <div style={{backgroundColor:'#fff',width:750,height:800,overflowX:'hidden',overflowY:'scroll',borderRadius:5}}>
          
           

                {this.state.tag===1?(
                    <>
                    <div style={{backgroundImage:`url(${img[0]})`,backgroundSize:'cover',width:'100%',height:250}}> </div>
                        <div className='MainSNav'>
                                <div className='forumInfo'>
                                  <img className='logo' src={img[1]} alt='logo' />
                                   <h1>{forum.name}</h1>
                                </div>
                                      <ul style={{listStyle:'none',display:'flex'}}>
                                          <li className='acitve'>熱門</li>
                                          <li>最新</li>
                                          <li>板規</li>
                                      </ul>
                                  </div>
                                  </>
                  ):(
                  <>
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
                  <div style={{backgroundImage:`url('https://megapx-assets.dcard.tw/images/7f868bea-1203-438a-8700-cf9888efed2d/orig.gif')`,backgroundSize:'cover',width:'100%',height:250}}> </div>
                  </>
                  )
 
                    }


            {                              
            items.map(item => (
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
            ))     
            }
        </div>
     
           

          );
        }
      }
    }


export default MainScreen