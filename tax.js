"use strict";
const getErrorMsgTax = lbl => (lbl) + '  must be a valid number greater than zero and less than 100.';
const $ = function(id) {
     return document.getElementById(id);
 };

 const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
 };
const calculateTax = (subtotal, taxRate) => {
    const taxAmount = subtotal * taxRate/100;
    return taxAmount;
};
let processEntries = function() {
    let sale = parseFloat($("sale").value);
     let tax = parseFloat($("tax").value);

     if (isNaN(sale) || isNaN(tax)) {
         alert("Both entries must be numeric");
     } else if (isNaN(tax) || tax <= 0 || tax >= 100) {
         alert(getErrorMsgTax("tax"));
         focusAndSelect("tax");
     } else {
         $("total").value = (sale + calculateTax(sale, tax)).toFixed(2);
         $("sale").focus();
     }
 };
 window.onload = function() {
     $("calculate").onclick = processEntries;
 };