const fs = require("fs");

const jsonData = JSON.parse(
  fs.readFileSync(`${__dirname}/./../ite5315-A1-Car_sales.json`) // using new file for searching invoice
);

exports.f1 = (req, res) => {
  res.render("searchInvoice");
};

exports.f2 = (req, res) => {
  const invoiceNo = req.body.invoiceNo;
  //const jsonData = JSON.parse(data);

  // console.log(invoiceNo);

  const matchingCars = jsonData.filter(
    (car) => car["Invoice ID"] === invoiceNo
  );

  if (matchingCars.length > 0) {
    const response = matchingCars.map((car) => {
      return {
        InvoiceNo: car["Invoice ID"],
        Image: car.image,
        Name: car.name,
      };
    });
    res.render("searchInvoice", { matchingCars: response });
  } else {
    res.render("searchInvoice", { matchingCars: [] });
  }
};

exports.f3 = (req, res) => {
  const index = req.params.id * 1;
  const invoiceNo = jsonData[index]?.InvoiceNo || null;

  res.render("invoicebyindex", { invoiceNo });
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
