import React,{useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {Link } from "react-router-dom";
function Header() {
    return (
            <div className="header">
                <p>Hello</p>
                <div>
                    <Link to="/">DashBoard</Link>
                    <Link to="/page2">Source</Link>
                </div>
                
            </div>
    
    )
}

export default Header
