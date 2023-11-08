const fs = require("fs");

const jsonData = JSON.parse(
  fs.readFileSync(`${__dirname}/./../ite5315-A1-Car_sales.json`) //using old file for seraching anufacturer
);

exports.f1 = (req, res) => {
  res.render("searchManufacturer");
};

exports.f2 = (req, res) => {
  const { Manufacturer } = req.body;

  const matchingCars = jsonData.filter((car) =>
    car.Manufacturer.toLowerCase().includes(Manufacturer.toLowerCase())
  );

  if (matchingCars.length > 0) {
    const response = matchingCars.map((car) => {
      return {
        InvoiceNo: car.InvoiceNo,
        Manufacturer: car.Manufacturer,
        Model: car.Model,
      };
    });
    res.render("searchManufacturer", { matchingCars: response });
  } else {
    res.render("searchManufacturer", { matchingCars: [] });
  }
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
