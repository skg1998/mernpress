import React from "react";
import { Box, Container, Grid } from '@material-ui/core';

//components
import globalStyles from "../../styles/styles";
import SEO from '../../components/SEO/Seo';
import CustomCard from "../../components/Dashboard/Cards/CustomCard";

//Icons
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

//chart
import LineChart from '../../components/Dashboard/Charts/Line/LineChartContainer'
import PieChartContainer from "../../components/Dashboard/Charts/Pie/PieCharContainer";
import productVsSellData from '../../data/product-sell.json/product-sell.json'
import product from '../../data/product/product-chart.json'
import order from '../../data/sell/sell-chart.json'
import statusData from '../../data/order/orderStatus.json'

//Api required 
//total product, user , admin, category
//products by date | sell by date
//product by hour
//order by hour

const DashboardPage = () => {
  return (
    <div>
      <SEO title="Dashboard - Mernpress " description="A Multi-vendor ecommerce site dashobard" />
      <h3 style={globalStyles.navigation}>Application / Dashboard</h3>
      <div>
        <div className="dahboard_heading"> <h1>Hi, Welcome back</h1> </div>
        <div>
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
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <CustomCard
                    name={"User"}
                    count={"300"}
                    icons={<PersonIcon style={{ color: "#007b55" }} />}
                    color={"#c8facd"}
                    iconcolor={"#007b55"}
                    desc={"16% Since last month"}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <CustomCard
                    name={"Admin"}
                    count={"300"}
                    icons={<SupervisorAccountIcon style={{ color: "#0c53b7" }} />}
                    color={"#d0f2ff"}
                    iconcolor={"#0c53b7"}
                    desc={"16% Since last month"}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <CustomCard
                    name={"Products"}
                    count={"300"}
                    icons={<ProductionQuantityLimitsIcon style={{ color: "#b78103" }} />}
                    color={"#fff7cd"}
                    iconcolor={"#b78103"}
                    desc={"16% Since last month"}
                  />
                </Grid>
                <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <CustomCard
                    name={"Category"}
                    count={"300"}
                    icons={<CategoryIcon style={{ color: "#b72136" }} />}
                    color={"#ffe7d9"}
                    iconcolor={"#b72136"}
                    desc={"16% Since last month"}
                    sx={{ height: '100%' }} />
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={12}
                  xl={6}
                  xs={12}
                >
                  <LineChart data={product} header={"Product"} />
                </Grid><Grid
                  item
                  lg={6}
                  md={12}
                  xl={6}
                  xs={12}
                >
                  <LineChart data={order} header={"Order"} />
                </Grid>
                <Grid
                  item
                  lg={8}
                  md={12}
                  xl={9}
                  xs={12}
                >
                  <LineChart data={productVsSellData} header={"Product vs Sell"} />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={6}
                  xl={3}
                  xs={12}
                >
                  <PieChartContainer data={statusData} header={"Orders Status"} />
                </Grid>
                <Grid
                  item
                  lg={4}
                  md={6}
                  xl={3}
                  xs={12}
                >
                  {/* <LatestProducts sx={{ height: '100%' }} /> */}
                </Grid>
                <Grid
                  item
                  lg={8}
                  md={12}
                  xl={9}
                  xs={12}
                >
                  {/* <LatestOrders /> */}
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
