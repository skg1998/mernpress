const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser')
const logger = require("morgan");
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const config = require("./config/config");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index.routes");
const usersRouter = require("./routes/users.routes");
const adminRouter = require('./routes/admin.routes');
const authRouter = require("./routes/auth.routes");
const shopRouter = require("./routes/shop.routes");
const productRoutes = require("./routes/product.routes");
const orderRoutes = require("./routes/order.routes");
const slidderRoutes = require("./routes/addSlidder.routes");
const TitleRoutes = require("./routes/addTitle.routes");
const CategoryRoutes = require("./routes/Category.routes")

const mongoUrl = "mongodb://localhost:27017/lapimenia";
mongoose.connect(
  mongoUrl,
  { useUnifiedTopology: true, useNewUrlParser: true , useCreateIndex:true },
  () => {
    console.log("MongoDb connected...");
  }
);

var app = express();  

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/shops/", shopRouter);
app.use("/api/v1/products/", productRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/slidder", slidderRoutes);
app.use("/api/v1/addtitle",TitleRoutes);
app.use("api/v1/category",CategoryRoutes);

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

