import React, { Component } from 'react';
import { Button ,TextField , withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import * as Api from '../../Api';

const useStyles = (theme) => ({
    card: {
        alignItems: "center"
      },
      imageupload:{
        padding : "18.5px 0px",
        borderRadius: "3px",
        width: "100%",
        borderWidth: "1px",
        borderStyle: 'inset',
        borderColor: 'rgb(173 173 173 / 76%)'
    }    
  });
class AddCategory extends Component {
    constructor() {
        super();
        this.state = {
            id:"",
            name:"",
            files:[],
            categories:[],
            isAddCategory:false
        }
      }
     
    componentDidMount() {
        Api.Category()
        .then(categoryData => {
            console.log(categoryData)
            this.setState({ categories: categoryData });
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { name, files } = this.state;
        console.log("files",files);
        let formData = new FormData();
        formData.append("name", name);
        for (let i = 0; i < files.length; i++) {
            formData.append(`files[${i}]`, files[i])
        }

        Api.AddCategory(formData).then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data)
            }
        })
    }
    
    handleChange = (event) => {
        const target = event.target;
        const field =  target.name;
        const value = target.value

        this.setState({
            [field]:  value
        });
    }

    updateCategory = key => {
        let { categories } = this.state;
        categories[key].updating = true;
  
        this.setState({
           formState: { ...this.state.categories[key], mode: "edit" },
           categories
        });

     };
  
     deleteCategory = key => {
        let { categories } = this.state;
        categories.splice(key, 1);
        this.setState({
           categories: [...categories]
        });

        Api.DeleteCategoryBy(key).then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data)
            }
        })
     };

     resetFormState = () => {
        this.setState({
            id:"",
            name:"",
            files:[],
        });
     };
     
    addCategory = () => {
       this.setState({isAddCategory:!this.state.isAddCategory})
     }

    render() { 
        return (
        <div > 
            <CategoriesTable
               {...this.state}
               categories={this.state.categories}
               updateCategory={this.updateCategory}
               deleteCategory={this.deleteCategory}
               handleSubmit={this.handleSubmit}
               addCategory={this.addCategory}
               handleChange={this.handleChange}
            />
        </div>
        );
  }
}

export default withStyles(useStyles)(AddCategory);


const CategoriesTable = ({ categories = [], addCategory, updateCategory,handleChange, deleteCategory ,id, handleSubmit, ...props}) => {
    return (
        <form onSubmit={()=>handleSubmit()}>
        <Paper>
        <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Create Date</TableCell>
              <TableCell align="left"><Button onClick={()=>addCategory()}><AddCircleIcon/></Button></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {props.isAddCategory?<NewCategory id={id} />:""}
            {categories.map((category,key) => (
                <TableRow key={category._id}>
                    <TableCell component="th" scope="category">{category._id} </TableCell>
                    <TableCell align="left">{category.name}</TableCell>
                    <TableCell align="left"><img src={category.files} alt="files" /></TableCell>
                    <TableCell align="left">{category.created.toString()}</TableCell>
                    <TableCell align="left">
                        <Button onClick={() => updateCategory(key)}><EditIcon/></Button>
                        <Button onClick={() => deleteCategory(key)}><DeleteIcon/></Button>
                    </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Paper>
      </form>
    );
 };


 const NewCategory = ({id , ...props})=>{
     return (
        <TableRow>
            <TableCell >  </TableCell>
            <TableCell align="left">
                <TextField id="outlined-basic" label="Category Name" variant="outlined"  type = "text" name = "name" onChange= {props.handleChange} style={{marginTop:'10px', width:'100%'}}/>
            </TableCell>
            <TableCell align="left">
                <input  type = "file" accept="image/*" multiple name = "files" onChange= {props.handleChange} style={{marginTop:'10px', width:'100%'}}/>
            </TableCell>
            <TableCell align="left"> </TableCell>
            <TableCell align="left">
                <Button type = "submit"><SaveIcon/></Button>
            </TableCell>
        </TableRow>
     )
 }