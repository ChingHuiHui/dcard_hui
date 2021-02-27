import React from 'react';
import {BrowserRouter as BrowserRouter,Route,Switch} from 'react-router-dom';
import Formus from './components/Forums';
import Header from './components/Header'
import Main from './Containers/Main'
import Forum from './Containers/Forum'
import ForumALL from './ForumALL'
import FourmsHot from './FourmsHot';
import Goods from './Goods'
import Item from './components/Item';

import './styles/App.css'

function App() {
  return (
    <>
 <BrowserRouter basename='/dcard_hui'>
        <main>
          <Header/>
          <div style={{
            backgroundColor: '#00324e',
            padding: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>

            <div style={{width:'1200px',display:'flex',justifyContent:'space-between'}}>
              <Formus style={{ width:'10%' }}/>
              <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/forum/:name"  component={Forum}/>
                <Route path="/forums"  component={ForumALL}/>    
                <Route path="/popular"  component={FourmsHot}/>    
                <Route path="/goods"  component={Goods}/>             
              </Switch>
              <div style={{ width:'200px' }}>
                <Item link='img1.jpg' text='熱愛學習'/>
                <Item link='img3.jpg' text='喜歡團體生活'/>
                <Item link='img2.jpg' text='天馬行空愛創造'/>
                <Item link='img4.jpg' text='有點美感'/>
              </div>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
