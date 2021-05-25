import React from 'react';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// all routes
import AddProjectTitle from './AddProjectTitle';
import AddHeader from './AddHeader';
import AddBanner from './AddBanner';
import AddSliderImage from './AddSliderImage';
import AddFooter from './AddFooter';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    title: {
        fontSize: '40px',
        textAlign: 'center'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const components = [
    { id: 1, name: 'Add Title', desc: 'Add Project title', comp: <AddProjectTitle /> },
    { id: 2, name: 'Add Header', desc: 'Add all routes path in header to navigate', comp: <AddHeader /> },
    { id: 3, name: 'Add Banner', desc: 'Add Banner', comp: <AddBanner /> },
    { id: 4, name: 'Add Slidder', desc: 'Add Slidder', comp: <AddSliderImage /> },
    { id: 5, name: 'Add Footer', desc: 'Add Footer', comp: <AddFooter /> }
]

const BasicDesign = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <h1 className={classes.title}>Basic Design</h1>
            <div className={classes.root}>
                {
                    components.map((component, index) => (
                        <Accordion
                            expanded={expanded === `panel_${index}`}
                            onChange={handleChange(`panel_${index}`)}
                            defaultExpanded={true}
                            key={component.id}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className={classes.heading}>{component.name} </Typography>
                                <Typography className={classes.secondaryHeading}> {component.desc}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ margin: 'auto' }}>{component.comp}</div>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </div>
        </div>
    )
}

export default BasicDesign;