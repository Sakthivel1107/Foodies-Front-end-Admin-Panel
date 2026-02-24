import React from 'react';

const MenuBar = ({toggleSideBarVisibility}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid">
            <button className="btn btn-primary"  onClick={toggleSideBarVisibility} id="sidebarToggle"><i className="bi bi-list"></i></button>
            
        </div>
    </nav>
  )
}

export default MenuBar;