import React, { Component } from 'react';

class Header extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-inverse bg-dark mb-2 text-center">
              <h4 className="text-center text-light" style={{ width: '100%' }}>Todo App</h4>
            </nav>
        );
    }
}

export default Header;