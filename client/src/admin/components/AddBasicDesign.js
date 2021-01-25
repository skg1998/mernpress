import React, { Component } from 'react';
import { Button ,Card ,CardHeader, Grid , withStyles } from '@material-ui/core';
import ColorPicker from '../../components/Color-Picker/ColorPicker';
import FontPicker from '../../components/Text-Picker/TextPicker';


const useStyles = (theme) => ({
    card: {
        alignItems: "center"
      }
  });

class AddBasicDesign extends Component {
    constructor(props){
        super(props);
        this.state = {
            color:'',
            fontfamily:''
        }
    }   

    handleChange=()=>{
        
    }

    handleSubmit = event => {
        event.preventDefault();
        const {color,fontfamily} = this.state;
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
                    <form onSubmit = { this.handleSubmit }>
                        <CardHeader style={{color:'#3f51b5'}} title="Add Basic Design" />
                        <Grid item xs={12}>
                            <ColorPicker  />
                        </Grid>
                        <Grid item xs={12}>
                            <FontPicker  />
                        </Grid>
                        <Button  variant="contained" color="primary" type = "submit" style={{ marginTop:'10px',width:'100%'}}> Submit </Button>
                    </form>
                </Card>
            </Grid> 
        </div>
        );
  }
}

export default withStyles(useStyles)(AddBasicDesign);