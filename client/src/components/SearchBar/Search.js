import React, { Component } from 'react';
import Search from "../../containers/product/Search";
import {listCategories} from '../../containers//product/api-product.js'

class Searchbar extends Component {
    state={
        categories: []
    }

    componentDidMount = () => {
        listCategories().then((data) => {
            if (data.error) {
            console.log(data.error)
            } else {
            this.setState({categories: data})
            }
        })
    }

    render(){
        return (
               <Search categories={this.state.categories}/>
          );
    }
}

export default Searchbar;