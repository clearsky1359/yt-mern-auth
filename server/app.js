// import modules
const express = require("express");
const { json, urlencoded } = express;
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

// app
const app = express();

// db
mongoose
	.connect("mongodb+srv://nikan:Nikan2017@cluster0.i9tio.mongodb.net/?retryWrites=true&w=majority", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB CONNECTED"))
	.catch((err) => console.log("DB CONNECTION ERROR", err));

// middleware
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	next();
  });


app.use(morgan("dev"));
app.use(cors({ origin: 'https://3000-clearsky1359-ytmernauth-jnygwczv0sp.ws-us87.gitpod.io', credentials: true }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());

// routes
const userRoutes = require("./routes/user");
app.use("/", userRoutes);

// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
);
