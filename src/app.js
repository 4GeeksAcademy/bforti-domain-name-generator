/* eslint-disable */

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

window.onload = function() {
  let domi = document.getElementById("dominio");

  for (let a of pronoun) {
    for (let b of adj) {
      for (let c of noun) {
        domi.innerHTML += `<li>${a + b + c + ".com"}</li> <br/>`;
      }
    }
  }

  return domi;
};
