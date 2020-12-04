import React, { Component } from 'react';
import { Button,TextField ,Card ,CardHeader, Grid , withStyles } from '@material-ui/core';

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

import * as Api from '../Api';

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
            categories:[]
        }
      }

      resetFormState = () => {
        this.setState({
            id:"",
            name:"",
            files:[],
        });
     }; 
     
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

    updateUser = key => {
        let { categories } = this.state;
        categories[key].updating = true;
  
        this.setState({
           formState: { ...this.state.categories[key], mode: "edit" },
           categories
        });
     };
  
     deleteUser = key => {
        let { categories } = this.state;
        categories.splice(key, 1);
        this.setState({
           categories: [...categories]
        });
     };

    render() { 
        const { classes } = this.props;
        return (
        <div > 
            <Grid
               container
                className={classes.card}
                spacing={0}
                alignItems="center"
                justify="center"
            >
                <Card style={{padding:'20px'}}>
                    <form onSubmit = { this.handleSubmit } noValidate autoComplete="off">
                        <CardHeader style={{color:'#3f51b5'}} title="Add Category" />
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Category Name" variant="outlined"  type = "text" name = "name" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>    
                            <input className={classes.imageupload}  type = "file" accept="image/*" multiple name = "files" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Button  variant="contained" color="primary" type = "submit" style={{ marginTop:'10px',width:'100%'}}> Submit </Button>
                    </form>
                </Card>
            </Grid> 
            <CategoriesTable
               categories={this.state.categories}
               updateUser={this.updateUser}
               deleteUser={this.deleteUser}
            />
        </div>
        );
  }
}

export default withStyles(useStyles)(AddCategory);

const CategoriesTable = ({ categories = [], updateUser, deleteUser }) => {
    return (
        <div>
        <Paper>
        <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Create Date</TableCell>
              <TableCell align="left">Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category,key) => (
              <TableRow key={category.name}>
                <TableCell component="th" scope="category">{category._id} </TableCell>
                <TableCell align="left">{category.name}</TableCell>
                <TableCell align="left"><img src={category.files}/></TableCell>
                <TableCell align="left">{category.created}</TableCell>
                <TableCell align="left">
                    <button onClick={() => updateUser(key)}><EditIcon/></button>
                    <button onClick={() => deleteUser(key)}><DeleteIcon/></button>
                    <button onClick={() => deleteUser(key)}><SaveIcon/></button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Paper>
      </div>
    );
 };