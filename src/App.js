import React from 'react';
import {BrowserRouter as BrowserRouter,Route,Switch} from 'react-router-dom';
import Formus from './components/Forums';
import Header from './components/Header'
import MainScreen from './MainScreen'
import ForumScreen from './ForumScreen'
import './App.css'
import FourmsHot from './FourmsHot';
import Goods from './Goods'
import Item from './components/Item';
function App() {
  return (
    <>
 <BrowserRouter basename='/dcard_hui'>
        <div>
        <Header/>

        <div style={{backgroundColor:'#00324e',display:'flex',padding:20,justifyContent:'center',alignItems:'center'}}>
 
      
          <div style={{width:'1200px',display:'flex',justifyContent:'space-between'}}>
          <Formus style={{width:'10%'}}/>

          
          <Switch>
                  <Route path="/" exact component={MainScreen}/>
                  <Route path="/f/:name"  component={MainScreen}/>
                  <Route path="/forums"  component={ForumScreen}/>    
                  <Route path="/popular"  component={FourmsHot}/>    
                  <Route path="/goods"  component={Goods}/>             
          </Switch>
          <div style={{width:'200px'}}>
              <Item link='img1.jpg' text='熱愛學習'/>
              <Item link='img3.jpg' text='喜歡團體生活'/>
              <Item link='img2.jpg' text='天馬行空愛創造'/>
              <Item link='img4.jpg' text='有點美感'/>
          </div>
          </div>
          </div>
     
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
