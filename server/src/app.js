require('dotenv').config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const errorHandler = require('./middleware/error');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

// Routes File
const IndexRoutes = require('./routes/index.routes')
const authRouter = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const slidderRoutes = require("./routes/Slidder.routes");
const TitleRoutes = require("./routes/Title.routes");
const CategoryRoutes = require("./routes/Category.routes");
const BannerRoutes = require("./routes/Banner.routes");
const HeaderRoutes = require("./routes/Header.routes")

var app = express();

connectDB();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger("dev"));
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", IndexRoutes);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use("/api/v1/slidder", slidderRoutes);
app.use("/api/v1/title", TitleRoutes);
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/banner", BannerRoutes);
app.use("/api/v1/header", HeaderRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

module.exports = app;


