import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h1 className="title" aria-label="Parks of New York">Neighborhood Map - Parks of New York</h1>
            </header>
        )
    }
}

export default Header;