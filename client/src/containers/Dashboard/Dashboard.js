import React from "react";
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import InformativeCard from '../../components/Dashboard/informativeCard'

//icons
import GroupIcon from '@material-ui/icons/Group';
import CategoryIcon from '@material-ui/icons/Category';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const informative = [
  { name: 'Total Products', value: 15, icon: <BusinessCenterIcon /> },
  { name: 'Total Categories', value: 5, icon: <CategoryIcon /> },
  { name: 'Toal Customers', value: 15, icon: <GroupIcon /> },
  { name: 'Total Admins', value: 3, icon: <PersonIcon /> }
]

export default function Dashboard() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          {
            informative.map(data => (
              <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
              >
                <InformativeCard name={data.name} value={data.value} icon={data.icon} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Box>
  );
}

