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
// const inputNums = document.querySelectorAll('input[type="number"]');
const totalPrice = document.querySelector(".total__price");
const summaryTotal = document.querySelector(".summary__total");

// ADDING EVENTS TO INPUT FIELDS AND UPDATING THEIR VALUES
document.addEventListener("DOMContentLoaded", function () {
  const prices = [0, 0, 0, 0, 0];

  products.addEventListener("keyup", function (e) {
    itemsArr.forEach(function (item) {
      if (products.value.length > 0 && Number(products.value) > 0) {
        if (item.dataset.id === "products") {
          item.classList.add("open");
          // UPDATING INPUT FIELDS
          const child = item.querySelector(".item__calc");
          const price = item.querySelector(".item__price");
          child.textContent = `${products.value} * $0.5`;
          price.textContent = `  ${Number(products.value) * 0.5}`;
          // UPDATING SUM
          summaryTotal.classList.add("open");
          prices[0] = Number(price.textContent);
          totalPrice.textContent = `$ ${prices
            .reduce((acc, el) => acc + el)
            .toFixed(2)} `;
        }
      } else {
        item.classList.remove("open");
        summaryTotal.classList.remove("open");
        prices[0] = 0;
      }
    });
  });
  orders.addEventListener("keyup", function (e) {
    itemsArr.forEach(function (item) {
      if (orders.value.length > 0 && Number(orders.value) > 0) {
        if (item.dataset.id === "orders") {
          item.classList.add("open");
          // UPDATING INPUT FIELDS
          const child = item.querySelector(".item__calc");
          const price = item.querySelector(".item__price");
          child.textContent = `${orders.value} * $0.5`;
          price.textContent = `  ${Number(orders.value) * 0.5}`;
          // UPDATING SUM
          summaryTotal.classList.add("open");
          prices[1] = Number(price.textContent);
          totalPrice.textContent = `$ ${prices
            .reduce((acc, el) => acc + el)
            .toFixed(2)} `;
        }
      } else {
        item.classList.remove("open");
        summaryTotal.classList.remove("open");
        prices[1] = 0;
      }
    });
  });

  // ADDING EVENTS TO DROPDOWNS

  packageSelect.addEventListener("click", function () {
    packageSelect.classList.toggle("open");

    [...options].forEach(function (option) {
      option.addEventListener("click", function () {
        itemsArr.forEach(function (item) {
          if (item.dataset.id === "package") {
            item.classList.toggle("open");
            // UPDATING INPUT FIELDS
            const packageCalc = item.querySelector(".item__calc");
            const packagePrice = item.querySelector(".item__price");
            // UPDATING SUM
            summaryTotal.classList.add("open");

            packageCalc.textContent = `${option.textContent}`;
            packagePrice.textContent = 36.99;
            prices[2] = Number(packagePrice.textContent);
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
      if (accounting.checked && item.dataset.id === "accounting") {
        console.log(item);
        item.classList.add("open");
        //  UPDATING INPUT FIELDS
        summaryTotal.classList.add("open");
        const accountingPrice = item.querySelector(".item__price");
        accountingPrice.textContent = 32.49;
        // UPDATING SUM
        prices[3] = Number(accountingPrice.textContent);
        totalPrice.textContent = `$ ${prices
          .reduce((acc, el) => acc + el)
          .toFixed(2)}`;
      } else {
        prices[3] = 0;
        totalPrice.textContent = `$ ${prices
          .reduce((acc, el) => acc + el)
          .toFixed(2)}`;
      }
    });
  });
  terminal.addEventListener("click", function () {
    itemsArr.forEach(function (item) {
      if (terminal.checked && item.dataset.id === "terminal") {
        console.log(item);
        item.classList.add("open");
        //  UPDATING INPUT FIELDS
        summaryTotal.classList.add("open");
        const terminalPrice = item.querySelector(".item__price");
        terminalPrice.textContent = 25.49;
        // UPDATING SUM
        prices[4] = Number(terminalPrice.textContent);
        totalPrice.textContent = `$ ${prices
          .reduce((acc, el) => acc + el)
          .toFixed(2)}`;
      } else {
        prices[4] = 0;
        totalPrice.textContent = `$ ${prices
          .reduce((acc, el) => acc + el)
          .toFixed(2)}`;
      }
    });
  });

  console.log(prices);
});
