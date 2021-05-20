
import React from 'react'

const Information = () => {
    return (
        <div className='information-page'>
            {/* <div> */}
            <img className='infographic' src="images/infinote_splash_infographic.png" alt="infographic" />
            <div className='information-list'>
                <li>
                    <h2>INFINITE POTENTIAL</h2>
                    <p>No data caps allows you to write as many notes as you desire.</p>
                </li>
                <li>
                    <h2>YOUR NOTES, YOUR WAY</h2>
                    <p>Notes can be placed into notebooks for clearer organization and ease of access</p>
                </li>
                <li>
                    <h2>CAPTURE AND ARRANGE YOUR IDEAS</h2>
                    <p>With the click of a button, a notepad is immediately available to capture your greatest ideas.</p>
                </li>      
            </div>
        </div>
    )
}

export default Information
