import React from 'react';
import { FavoriteBorderOutlined, MenuRounded, PersonOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import '../header/header.css';
function header() {
  return (
    <div class = "NavHome">
        <div className= "headerContainer">
          <MenuRounded></MenuRounded>
        <div class ="brandName">MernPress</div>
        <div className="rightnav">
          <SearchOutlined className="categoryIcon"></SearchOutlined>
          <PersonOutlined className="categoryIcon"></PersonOutlined>
          <FavoriteBorderOutlined className="categoryIcon"></FavoriteBorderOutlined>
          <ShoppingCartOutlined className="categoryIcon"></ShoppingCartOutlined>
        </div>
        </div>       
            
    </div>
    
        
    );
}

export default header;