"use strict";

//your JS code here. If required.

const ageElt = document.querySelector("#age");
const fullNameElt = document.querySelector("#name");
const btn = document.querySelector("#btn");

//creating function
const checkAge = function () {
  const prom = new Promise((resolve, reject) => {
    const age = ageElt.value;
    const fullName = fullNameElt.value;
    if (age >= 18) {
      resolve(`Welcome, ${fullName}. You can vote`);
    } else {
      reject(`Oh sorry ${fullName}, You aren't old enough`);
    }
  });

  setTimeout(() => {
    prom
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  }, 4000);
};

// creating of promise

btn.addEventListener("click", function (e) {
  e.preventDefault();
  checkAge();
});
