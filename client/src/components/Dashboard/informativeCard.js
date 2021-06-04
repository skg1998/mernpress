import React from 'react'
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';

const Budget = (props) => {
    const { name, value, icon } = props;
    return (
        <Card
            sx={{ height: '100%' }}
        >
            <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h6"
                        >
                            {name}
                        </Typography>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                lg={6}
                                sm={6}
                                xl={6}
                                xs={6}
                            >
                                <Typography
                                    color="textPrimary"
                                    variant="h3"
                                >
                                    {value}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                lg={6}
                                sm={6}
                                xl={6}
                                xs={6}
                                style={{ margin: ' auto' }}
                            >
                                <Typography
                                    color="textPrimary"
                                    variant="h3"
                                >
                                    <Avatar
                                        style={{ width: 50, height: 50 }}
                                    >
                                        {icon}
                                    </Avatar>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    )
}

export default Budget;
