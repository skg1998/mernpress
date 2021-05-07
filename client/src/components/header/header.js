
import { FavoriteBorderOutlined, MenuRounded, PersonOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import CategoryComponent from './categoryComponent';

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
        <CategoryComponent/>        
            
    </div>
    
        
    );
}

export default header;