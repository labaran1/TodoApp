import React from 'react';
import { Link } from 'react-router-dom';

 function Header() {
    return (
      
<header style={headerStyle}>
            <h1 title="visit home" style={{ cursor: 'pointer' }}>   <Link style={linkStyle} to="/">My Todo </Link></h1>
            <Link to="/today">Daily</Link> || <Link to="/week">Weekly</Link> || <Link to="/month">Monthly</Link>








</header>

    )
}








const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'


}

export default Header;