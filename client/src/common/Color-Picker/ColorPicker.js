import React, { Component } from "react";
import { TextField , Grid,withStyles  } from '@material-ui/core';
import { SketchPicker } from 'react-color';

const useStyles = (theme) => ({
    card: {
        alignItems: "center"
      },
    colorPickerContainer :{

    },
    colorPickerPalette :{
        position: "absolute",
        zIndex: 100
    },
    colorPickerCover:{
        position:"fixed",
        top:0,
        bottom:0,
        left:0,
        right:0
    }
});

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayColorPicker:false,
            defaultColor:"#999",
            changeColor : "#999",
            color:{
                r:"0",
                g:"9",
                b:"153",
                a:"1"
            }
        }
    } 
    
    onHandlerCloseColorPicker=()=>{
        this.setState({displayColorPicker:false})
    }

    onHandleropenColorPicker=()=>{
        this.setState({displayColorPicker:true})
    }

    ChangeColorPicker =(color)=>{
        this.setState({ color : color.rgb, changeColor:color.hex})
    }

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.colorPickerContainer}>
                <div >
                        <Grid item xs={12}>
                            <TextField aria-readonly label="colorPicker" variant="outlined"  type ="text" name = "color-picker-text" value={this.state.changeColor} onClick={()=>this.onHandleropenColorPicker()} style={{marginTop:'10px', width:'100%'}}/>
                        </Grid>
                        {this.state.displayColorPicker && (
                            <div className={classes.colorPickerPalette}>
                                <div className={classes.colorPickerCover} 
                                  onClick={()=> this.onHandlerCloseColorPicker()}
                                />  
                                <SketchPicker color={this.state.color} onChange={this.ChangeColorPicker}/>
                            </div>
                        )}
                </div>
            </div>
          );
    }
}

export default withStyles(useStyles)(ColorPicker);