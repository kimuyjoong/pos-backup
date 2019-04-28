import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.PureComponent {
    render() {
        return (
            <>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/precheck'>Precheck</Link></li>
                    <li><Link to='/applyform'>Applyform</Link></li>
                    <li><Link to='/applysuccess'>ApplySuccess</Link></li>
                </ul>
            </>
        )
    }
}

export default Menu;
