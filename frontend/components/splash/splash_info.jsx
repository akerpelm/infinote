import React from 'react';
// import logo from '

const SplashInfo = () => {
    return (
        <>
            <header>
                {<img src='images/infinote_logo_1.png' alt="infinote_logo_1" className='infinote-logo' />}
            </header>
            <div className='splash-info'>
                <div className='titles'>
                <h1 className='slogan'>Accomplish more with better notes</h1>
                <h5 className='subhead'>infiNote helps you capture ideas and find them fast</h5>
                </div>
            </div>
        </>
    )
}

export default SplashInfo

