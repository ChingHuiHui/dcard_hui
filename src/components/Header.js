import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = ()=>{
    return (
        <div style={styles.headerContainer}>
            <div style={{display:'flex',width:'60%',alignItems:'center'}}>

            <Link to='/'  style={{ textDecoration: 'none' }}>
                <img alt='logo' src='https://sitcon.org/2019/static/img/sponsor/dcard.png' width='90px'/>
            </Link>
            <form style={{width:'100%',margin: '0 10px'}}>
                <input   style={styles.searchInput} type='search' placeholder='搜尋文章、看板、人物' />
                    <button type='submit' title='搜尋' style={styles.submit}>
                        <i className='fas fa-search'/>
                    </button>
            </form>
            
         </div>
         <div style={styles.loginContainer}>
         <div style={styles.icon} className="fas fa-pen"></div>
         <div style={styles.icon} className="fas fa-bell"></div>
         <div style={styles.icon} className="fas fa-square"></div>
              <div style={styles.icon} className="fas fa-envelope"></div>
              <div style={styles.icon} className="fas fa-user"></div>
             <div style={styles.icon} className="fas fa-sort-down"></div>
            </div>
        </div>
    )
}

const styles={
    headerContainer:{
     backgroundColor:'#006AA6',
     display:'flex',
     alignItems:'center',
     justifyContent:'space-around',
    },
    searchInput:{
        width:'45%',
        height:'30px',
        border:'none',
        backgroundColor:'#00588A',
        padding: '0 10px'
    },
    submit:{
        height:30,
        padding:'0px 10px',
        color:'#fff',
        border:'1px solid rgb(0,88,138)',
        backgroundColor:'rgb(0, 106, 166)'
    },
    loginContainer:{
        width: 320,
        display:'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#fff',
    },
    loginTitle:{
        marginRight: 15,
        fontSize: 14
    },
    icon:{
        cursor: 'pointer',
        fontSize: 20,
        position: 'relative',
    }
}

export default Header