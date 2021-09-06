require('dotenv').config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const compression = require('compression');

const connectDB = require("./config/db");
const errorHandler = require('./middleware/error');

//Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const SwaggerOptions = require('../swagger.json');
const swaggerDocument = swaggerJsDoc(SwaggerOptions);

// Routes File
const IndexRoutes = require('./routes/index.routes');
const UserRoutes = require("./routes/user.routes");
const AdminRoutes = require('./routes/admin.routes');
const ProductRoutes = require("./routes/product.routes");
const OrderRoutes = require("./routes/order.routes");
const CategoryRoutes = require("./routes/Category.routes");
const ShopRoutes = require('./routes/shop.routes');
const BasicDesignRoutes = require('./routes/basicDesign.routes');
const ReviewRoutes = require('./routes/review.routes');
const BlogRoutes = require('./routes/blog.routes');

var app = express();

connectDB();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger("dev"));
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));

//all API
app.use("/", IndexRoutes);
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/admin', AdminRoutes);
app.use('/api/v1/shop', ShopRoutes);
app.use('/api/v1/category', CategoryRoutes);
app.use('/api/v1/products', ProductRoutes);
app.use('/api/v1/orders', OrderRoutes);
app.use('/api/v1/basicdesign', BasicDesignRoutes);
app.use('/api/v1/review', ReviewRoutes);
app.use('/api/v1/blog', BlogRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

module.exports = app;


