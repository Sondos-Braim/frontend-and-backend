import styles from '../styles.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from '../components/login';
import Movies from '../components/movies';

import React,{useState} from 'react';
function Header(props){
  return(


      <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>

          </Nav>
      </Navbar>


  )
}

function Footer(props){
  return(

        <footer className={styles.footer}>  
      <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
          <small>@Copyright</small>

          </Nav>
      </Navbar>
      </footer> )}



export default function Home(props) {
  const [token,setToken] = useState('');

  const userLogin = (tok) =>{
    setToken(tok)
    console.log(tok);
    
  }
  return (

  <>

    <Header />
    <Login userLogin={userLogin}/>
    <Movies token={token}/>
    <Footer />

  </>

  )
  }    
