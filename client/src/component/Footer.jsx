import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ul className= "footer__categories">
        <li><Link to="/posts/categories/Agriculture">Agriculture</Link></li>
        <li><Link to="/posts/categories/Bussiness">Bussiness</Link></li>
        <li><Link to="/posts/categories/Education">Education</Link></li>
        <li><Link to="/posts/categories/Entertainment">Entertainment</Link></li>
        <li><Link to="/posts/categories/Art">Art</Link></li>
        <li><Link to="/posts/categories/Investment">Investment</Link></li>
        <li><Link to="/posts/categories/Uncategorised">Uncategorised</Link></li>
        <li><Link to="/posts/categories/Weather">Weather</Link></li>
        <li><Link to="/posts/categories/Health">Health</Link></li>
        <li><Link to="/posts/categories/Fashion">Fashion</Link></li>
      </ul>
      <div className="footer__copyright">
          <small>All Rights Reserved &copy; Copyright, POOJA MITTAL.<FaHeart /></small>
      </div>
    </footer>
  )
}

export default Footer