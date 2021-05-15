const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
require('dotenv').config();

const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

// Routes File
const indexRouter = require("./routes/index.routes");
const usersRouter = require("./routes/users.routes");
const AdminRouter = require('./routes/admin.routes');
const shopRouter = require("./routes/shop.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const slidderRoutes = require("./routes/Slidder.routes");
const TitleRoutes = require("./routes/Title.routes");
const CategoryRoutes = require("./routes/Category.routes");
const BannerRoutes = require("./routes/Banner.routes");
const HeaderRoutes = require("./routes/Header.routes")

var app = express();

// open mongoose connection
connectDB();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/v1/admin", AdminRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/shops/", shopRouter);
app.use("/api/v1/products", productRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use("/api/v1/slidder", slidderRoutes);
app.use("/api/v1/title", TitleRoutes);
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/banner", BannerRoutes);
app.use("/api/v1/header", HeaderRoutes);

//swagger api
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  }
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;


