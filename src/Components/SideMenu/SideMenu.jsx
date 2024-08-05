
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './SideMenu.css';

const SideMenu = () => {
    const [activeItem, setActiveItem] = useState('home');

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="side-menu">
            <div
                className={`menu-item ${activeItem === 'home' ? 'active' : ''}`}
                onClick={() => handleClick('home')}
            >
                <i className="fas fa-home"></i>
                
            </div>
            <div
                className={`menu-item ${activeItem === 'chart' ? 'active' : ''}`}
                onClick={() => handleClick('chart')}
            >
                <i className="fas fa-chart-column"></i>
                
            </div>
            <div
                className={`menu-item ${activeItem === 'todo' ? 'active' : ''}`}
                onClick={() => handleClick('todo')}
            >
                <i className="fas fa-clipboard-check"></i>
                
            </div>
            <div
                className={`menu-item ${activeItem === 'wallet' ? 'active' : ''}`}
                onClick={() => handleClick('wallet')}
            >
                <i className="fas fa-wallet"></i>
                
            </div>
            <div
                className={`menu-item ${activeItem === 'cart' ? 'active' : ''}`}
                onClick={() => handleClick('cart')}
            >
                <i className="fas fa-bag-shopping"></i>
                
            </div>

            <div
                className={`menu-item ${activeItem === 'cart' ? 'active' : ''}`}
                onClick={() => handleClick('cart')}
            >
                <i className="fas fa-sign-out"></i>
                
            </div>
        </div>
    );
};

export default SideMenu;
