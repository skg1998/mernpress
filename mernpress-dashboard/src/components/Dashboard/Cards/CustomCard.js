import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { red } from '@material-ui/core/colors';

const CustomCard = (props) => {
    const { name, count, icons, color, iconcolor, desc } = props;

    return (
        <Card
            className="custom-card"
            style={{ background: color }}
            sx={{ height: '100%' }}
            {...props}
        >
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h6"
                        >
                            {name}
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                            {count}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            style={{ background: color, border: `1px solid ${iconcolor}` }}
                            sx={{
                                backgroundColor: red[600],
                                height: 56,
                                width: 56
                            }}
                        >
                            {icons}
                        </Avatar>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        pt: 2,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <ArrowDownwardIcon sx={{ color: red[900] }} />
                    <Typography
                        sx={{
                            color: red[900],
                            mr: 1
                        }}
                        variant="body2"
                    >
                        {desc}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
};

export default CustomCard;