import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Grid } from '@material-ui/core'
import Pie from './Pie'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    header: {
        padding: '10px',
        fontSize: '25px',
    },
    chart: {
        height: '350px',
    },
}))

const PieChartContainer = (props) => {
    const { header, data } = props
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Card>
                <div className={classes.header}>
                    <Grid container>
                        <Grid item xs={9}>
                            {' '}
                            {header}{' '}
                        </Grid>
                    </Grid>{' '}
                </div>
                <CardContent className={classes.chart}>
                    <Pie data={data} />
                </CardContent>
            </Card>
        </div>
    )
}

export default PieChartContainer
