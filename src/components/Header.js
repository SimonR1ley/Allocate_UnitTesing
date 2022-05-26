import {Link} from 'react-router-dom';
import React from 'react';


const Header = () => {
    return (
        <div>
            <div className='nav'>
                <div className='logo'></div>
                <div className='page-links'><h3 className='links L1'><Link to="/">Home</Link></h3></div>
                <div className='page-links'><h3 className='links L2'><Link to="/pagetwo">Expenses</Link></h3></div>
                <div className='page-links'><h3 className='links L3'><Link to="/calculator">Calculator</Link></h3></div>
                <div className='page-links'><h3 className='links L4'>Resources</h3></div>

                <h3 className='salary-heading'>Salary Input</h3>
                <input className='salary' placeholder='eg R15000' type="number"></input>
            </div>
        </div>
    );
}

export default Header;
