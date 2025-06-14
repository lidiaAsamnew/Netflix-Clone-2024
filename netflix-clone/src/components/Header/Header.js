import React from 'react'
import "./header.css";

const Hearder = () => {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            {/*<li><img src={NetflixLogo} alt="Netflix Logo" width="100"/></li> */}
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShowa</li>
            <li>Movies</li>
            <li>HoLatest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
         </ul>
       </div>
       <div className='header_right'>
          <ul>
            {/*<li><SerchIcon /></li>
            <li><NotificatonNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropIcon /></li>*/}
          </ul>
       </div>
      </div>
    </div>
  )
}

export default Hearder