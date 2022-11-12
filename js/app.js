"use strict";

//SELECTING ALL NECESSAERY HTML ELEMENTS

const products = document.querySelector("#products");
const orders = document.querySelector("#orders");
const packageSelect = document.querySelector("#package");
const accounting = document.querySelector("#accounting");
const terminal = document.querySelector("#terminal");
const list = document.querySelector(".calc__summary ul");
const items = document.querySelector(".calc__summary ul").children;
const options = document.querySelector(".select__dropdown").children;
const itemsArr = [...items];
const inputNums = document.querySelectorAll('input[type="number"]');
const totalPrice = document.querySelector(".total__price");
const summaryTotal = document.querySelector(".summary__total");

// ADDING EVENTS TO INPUT FIELDS AND UPDATING THEIR VALUES
document.addEventListener("DOMContentLoaded", function () {
  const prices = [];

  inputNums.forEach(function (input) {
    input.addEventListener("keyup", function (e) {
      itemsArr.forEach(function (item) {
        if (input.value.length > 0 && Number(input.value) > 0) {
          if (input.id === item.dataset.id) {
            item.classList.add("open");
            // UPDATING INPUT FIELDS
            const child = item.querySelector(".item__calc");
            const price = item.querySelector(".item__price");
            child.textContent = `${input.value} * $0.5`;
            price.textContent = `  ${Number(input.value) * 0.5}`;
            // UPDATING SUM
            summaryTotal.classList.add("open");
            prices.push(Number(price.textContent));
            totalPrice.textContent = `$ ${prices.reduce(
              (acc, el) => acc + el
            )}`;
          }
        } else {
          if (input.id === item.dataset.id) {
            item.classList.remove("open");
            summaryTotal.classList.remove("open");
          }
        }
      });
    });
  });

  // ADDING EVENTS TO DROPDOWNS

  packageSelect.addEventListener("click", function () {
    packageSelect.classList.toggle("open");

    [...options].forEach(function (option) {
      option.addEventListener("click", function () {
        itemsArr.forEach(function (item) {
          if (option && item.dataset.id === "package") {
            item.classList.add("open");
            // UPDATING INPUT FIELDS
            const packageCalc = item.querySelector(".item__calc");
            const packagePrice = item.querySelector(".item__price");
            packageCalc.textContent = `${option.textContent}`;
            packagePrice.textContent = 36.99;
            // UPDATING SUM
            prices.push(Number(packagePrice.textContent));
            totalPrice.textContent = `$ ${prices
              .reduce((acc, el) => acc + el)
              .toFixed(2)}`;
          }
        });
      });
    });
  });
  accounting.addEventListener("click", function () {
    itemsArr.forEach(function (item) {
      if (accounting && item.dataset.id === "accounting") {
        item.classList.toggle("open");
        // UPDATING INPUT FIELDS
        const accountingPrice = item.querySelector(".item__price");
        accountingPrice.textContent = 18.99;
        // UPDATING SUM
        prices.push(Number(accountingPrice.textContent));
        totalPrice.textContent = `$ ${prices
          .reduce((acc, el) => acc + el)
          .toFixed(2)}`;
      }
    });
  });
  terminal.addEventListener("click", function () {
    itemsArr.forEach(function (item) {
      if (accounting && item.dataset.id === "terminal") {
        item.classList.toggle("open");
        //  UPDATING INPUT FIELDS
        const terminalPrice = item.querySelector(".item__price");
        terminalPrice.textContent = 25.49;
        // UPDATING SUM
        prices.push(Number(terminalPrice.textContent));
        totalPrice.textContent = `$ ${prices
          .reduce((acc, el) => acc + el)
          .toFixed(2)}`;
      }
    });
  });
});
