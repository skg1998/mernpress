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
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

// Routes File
const IndexRoutes = require('./routes/index.routes');
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const CategoryRoutes = require("./routes/Category.routes");
const ShopRoutes = require('./routes/shop.routes');
const BasicDesignRoutes = require('./routes/basicDesign.routes');
const ReviewRoutes = require('./routes/review.routes');

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

app.use("/", IndexRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/shop', ShopRoutes);
app.use('/api/v1/category', CategoryRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/basicdesign', BasicDesignRoutes);
app.use('/api/v1/review', ReviewRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

module.exports = app;


