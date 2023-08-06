<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content=
			"width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<form action="/contact" method="post">
		<input type="text" placeholder="Email" name="email">
		<input type="text" placeholder="Query" name="query">
		<button type="submit">Submit</button>
	</form>
</body>
</html>
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/newCollection", {
useNewUrlParser: true,
useUnifiedTopology: true
});

const contactSchema = {
email: String,
query: String,
};

const Contact = mongoose.model("Contact", contactSchema);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
	extended: true
}));
