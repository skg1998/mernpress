import React, { Component } from 'react';
import { Button,TextField ,Card ,CardHeader, Grid , withStyles,Select,MenuItem } from '@material-ui/core';
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

class AddHeader extends Component {
    constructor() {
        super();
        this.state = {
           style:{},
           route:{}
        }
      }
    handleSubmit = event => {
        event.preventDefault();
        const {style, route} = this.state;
        let formData = new FormData();

        formData.append("style",style)
        formData.append("route",route)

        // Api.AddHeader(formData).then((data) => {
        //     if (data.error) {
        //         console.log(data.error)
        //     } else {
        //         console.log(data)
        //     }
        // })
    }
    
    handleChange = (event) => {
        const target = event.target;
        const field =  target.name;
        const value = target.value

        this.setState({
            [field]:  value
        });
    }


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
                        <CardHeader style={{color:'#3f51b5'}} title="Add Header" />
                        <Grid item xs={12}>
                            <TextField  label="Style" variant="outlined"  type = "text" name = "style" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField  label="Route" variant="outlined"  type = "text" name = "route" onChange= {this.handleChange} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        <Button  variant="contained" color="primary" type = "submit" style={{ marginTop:'10px',width:'100%'}}> Add AddHeader</Button>
                    </form>
                </Card>
            </Grid> 
        </div>
        );
  }
}

export default withStyles(useStyles)(AddHeader);