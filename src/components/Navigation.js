import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    <NavLink to="/">
                        <li>accueil</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li>à propos</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default navigation;