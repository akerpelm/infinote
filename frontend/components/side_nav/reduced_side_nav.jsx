import React, { Component } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiFillTag, AiFillHome, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { CgNotes } from 'react-icons/cg'
import {BiBookAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'

class ReducedSideNav extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let userInitial = this.props.currentUser.username ?  this.props.currentUser.username[0].toUpperCase() : this.props.currentUser.email[0].toUpperCase()
        return (
 
               <nav className="sidebar">
                <ul className="sidebar-buttons">
                    <li className='sidebar-user'>
                        <span className="user-initial">
                            {userInitial}
                        </span>
                    </li>
                    <li className="buttons-1">
                        <button className="sidebar-search"><BsSearch/></button>
                        <button className="sidebar-new">+</button>
                    </li>
                    <ul className="buttons-2">
                        <Link to="/notes"><li className='sidebar-home'><AiFillHome/></li></Link>
                        <Link to="/notes"><li className='sidebar-notes'><CgNotes/></li></Link>
                        <Link to="/notebooks"><li className='sidebar-notebooks'><BiBookAlt/></li></Link>
                        <Link to="/notebooks"><li className='sidebar-tags'><AiFillTag/></li></Link>
                        <li><a href="https://www.github.com/akerpelm" target="_blank"><AiFillGithub/></a></li>
                        <li><a href="https://www.linkedin.com/in/alexander-kerpelman-22587584/" target="_blank"><AiFillLinkedin/></a></li>
                    </ul>
                </ul>
               </nav>

        )
    }
}

export default ReducedSideNav
