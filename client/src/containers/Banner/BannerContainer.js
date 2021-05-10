import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageBanner from '../../components/Banner/ImageBanner';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const data = [
    {
        text: "clothes",
        image: "https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362",
        target_link: "https://unsplash.com/photos/HkTMcmlMOUQ"
    },
    {
        text: "clothes",
        image: "https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362",
        target_link: "https://unsplash.com/photos/HkTMcmlMOUQ"
    },
    {
        text: "clothes",
        image: "https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362",
        target_link: "https://unsplash.com/photos/HkTMcmlMOUQ"
    }
]


const BannerContianer = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {data.map((banner, i) => (
                    <Grid item md={4} key={i}>
                        <ImageBanner
                            text={banner.text}
                            image={banner.image}
                            target_link={banner.target_link}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default BannerContianer;