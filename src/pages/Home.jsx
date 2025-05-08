import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import "./Home.css"
import { Link } from 'react-router-dom';
import Country from './Country';

function Home() {
  return (
    <main className="home-container">

     <div className="intro-section">

<h1>Lets Explore World</h1>

            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id</p>
   <Link to="/country">
   <button className="explore-btn">
  
    Lets Explore <FaArrowRightLong />
   
    </button> 
    </Link>
     </div>

     <div  className="image-section">
       <img src='/images/world.png' alt='world map' />
     </div>

    </main>
  )
}

export default Home
