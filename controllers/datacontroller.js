const fs = require("fs");

const jsonData = JSON.parse(fs.readFileSync(`${__dirname}/../SuperSales.json`));

exports.f1 = (req, res) => {
  const filteredData = jsonData.filter((item) => item.Rating > 0);
  res.render("viewData", { jsonData: filteredData });
};

/****************************************************************************** ***
 *	ITE5315 – Assignment 2
 *	I declare that this assignment is my own work in accordance with Humber Academic Policy.   *  No part of this assignment has been copied manually or electronically from any other source *  (including web sites) or distributed to other students.
 *
 *	Name: Deepanker Student ID: N01545191 Date: ____________________
 *
 *
 ******************************************************************************
 **/
