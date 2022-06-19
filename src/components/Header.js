import {Link} from 'react-router-dom';
import React from 'react';


const Header = () => {
    return (
        <div>
            <div className='nav'>
                <div className='logo'></div>
                <div className='page-links'><h3 className='links L1'><div className='icon-1'></div><Link to="/">Home</Link></h3></div>
                <div className='page-links'><h3 className='links L2'><div className='icon-2'></div><Link to="/pagetwo">Expenses One Salary</Link></h3></div>
                <div className='page-links'><h3 className='links L2'><div className='icon-3'></div><Link to="/pagethree">Expenses Two Salaries</Link></h3></div>
                <div className='page-links'><h3 className='links L3'><div className='icon-4'></div><Link to="/calculator">Calculator</Link></h3></div>
                <div className='page-links'><h3 className='links L4'><div className='icon-5'></div><Link to="/resources">Resources</Link></h3></div>
            </div>
        </div>
    );
}

export default Header;
