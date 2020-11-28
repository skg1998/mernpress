import React ,{Component} from "react";
import { Grid,Select,MenuItem } from '@material-ui/core';

const fontFamily = [
 "serif",
 "sans-serif",
 "monospace",
 "cursive",
 "fantasy",
 "system-ui",
 "ui-serif", 
 "ui-sans-serif", 
 "ui-monospace", 
 "ui-rounded", 
 "emoji",
 "math",
 "fangsong",
 "inherit",
 "initial",
 "unset",
]

class TextPicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    handleChange =()=>{

    }

    render(){
        return (
            <Grid item xs={12}>
                <Select
                    name="fontfamily"
                    onChange= {this.handleChange}
                    label="Font Family"
                    variant="outlined"
                    style={{marginTop:'10px', width:'100%'}}
                    >
                    <MenuItem value=""><em>None</em> </MenuItem>
                    {fontFamily.map(data =>
                        <MenuItem value={data}>{data}</MenuItem>
                    )}
                </Select>
            </Grid>
          )
    }
}

export default TextPicker;