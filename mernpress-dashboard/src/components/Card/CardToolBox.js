import React from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const ProductListToolbar = (props) => {
    const { clickHandler, title } = props;
    return (
        <Box {...props}>
            <Box
                style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
                <Button style={{ color: '#459cb3' }}>
                    Import
                </Button>
                <Button style={{ color: '#459cb3' }}>
                    Export
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    style={{ background: '#459cb3' }}
                    onClick={() => clickHandler()}
                >
                    {title}
                </Button>
            </Box>
            <Box style={{ marginTop: '15px', marginBottom: '15px' }}>
                <Card>
                    <CardContent>
                        <Box style={{ width: '100%' }}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SvgIcon
                                                fontSize="small"
                                                color="action"
                                            >
                                                <SearchIcon />
                                            </SvgIcon>
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="Search product"
                                variant="outlined"
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default ProductListToolbar;
