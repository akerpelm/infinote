import React, { Component } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiFillHome, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { CgNotes } from 'react-icons/cg'
import {BiBookAlt} from 'react-icons/bi'
class SideNav extends Component {
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
                        <li className='sidebar-home'><AiFillHome/></li>
                        <li className='sidebar-notes'><CgNotes/></li>
                        <li className="sidebar-notebooks"><BiBookAlt/></li>
                            <li className="sidebar-git"><AiFillGithub/></li>
                            <li><AiFillLinkedin/></li>
                    
                    </ul>
                </ul>
               </nav>

        )
    }
}

export default SideNav
