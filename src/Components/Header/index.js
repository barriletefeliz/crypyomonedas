import React from 'react';
import './Style.scss'


const Header = ({title}) => {
    return (
        <header className="header">
                      <div className="chip"></div>
            <h1 className="title breadcrumb-item active btn alert">{title}</h1>
        </header>
    );
}

export default Header;