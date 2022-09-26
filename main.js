// The inputs
let nameinput = document.querySelector("#i1");
let numerinput = document.querySelector("#i2");
let mminput = document.querySelector(".inp1");
let yyinput = document.querySelector(".inp2");
let cvvinput = document.querySelector(".inp3");
let btn = document.querySelector("button");

// The info
let number = document.querySelector(".p1");
let name = document.querySelector(".p2");
let mm = document.querySelector(".left");
let yy = document.querySelector(".right");
let cvv = document.querySelector(".p4");

// inputs checker
function tast(tester, aain, aainp, e) {
  if (tester) {
    aain.innerText = aainp.value;
    aainp.style.border = "1.7px solid #8e8593";
    e.style.display = "none";
    no = 0;
  } else {
    aainp.style.border = "1.7px solid red";
    e.style.display = "block";
    no = 1;
  }
}

let no = 0;

// card input event name
nameinput.addEventListener("input", () => {
  // eror varible
  let eror = document.querySelector(".eror1");
  // check
  let re = /^[a-z]+[a-z]$/gim;
  let tester = re.test(nameinput.value);
  // checker function
  tast(tester, name, nameinput, eror);
});

// card input event number
numerinput.addEventListener("input", () => {
  // card add space betwen numbers
  numerinput.value = numerinput.value
    .replace(/[\D\W]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  let x = numerinput.value;
  number.innerText = x;
  // eror varible
  let eror = document.querySelector(".eror2");

  if (x === "" || x.length <= 16) {
    number.innerText = `0000 0000 0000 0000`;
    numerinput.style.border = "1.7px solid red";
    eror.style.display = "block";
  } else if (x.length === 19) {
    numerinput.style.border = "1.7px solid #8e8593";
    eror.style.display = "none";
  }
});

// card input event mm
mminput.addEventListener("input", () => {
  // eror varible
  let re = /\d{2}/gi;
  let tester = re.test(mminput.value);

  let eror = document.querySelector(".eror3");

  tast(tester, mm, mminput, eror);
});

// card input event yy
yyinput.addEventListener("input", () => {
  // eror varible
  let re = /\d{2}/gi;
  let tester = re.test(yyinput.value);

  let eror = document.querySelector(".eror3");

  tast(tester, yy, yyinput, eror);
});

// card input event cvv
cvvinput.addEventListener("input", () => {
  // eror varible
  let re = /\d{3}/gi;
  let tester = re.test(cvvinput.value);

  let eror = document.querySelector(".eror4");

  tast(tester, cvv, cvvinput, eror);
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(nameinput.value.length);

  if (
    nameinput.value === "" &&
    numerinput.value === "" &&
    mminput.value === "" &&
    yyinput.value === "" &&
    cvvinput.value === ""
  ) {
    console.log(888);
  } else if (
    nameinput.value.length >= 3 &&
    numerinput.value.length === 19 &&
    mminput.value.length >= 2 &&
    yyinput.value.length >= 2 &&
    cvvinput.value.length >= 3
  ) {
    let form = document.querySelector("form")
    form.style.cssText = `align-items: center;`;
    form.innerHTML = `
    <img src="images/icon-complete.svg" alt="complite" style="width: 80px;">

    <h3 style="padding: 30px 0 10px 0; color: rgb(33, 9, 47); word-spacing: 19px; font-family: Space Grotesk; font-size: 30px; font-weight: 100;"> THANK YOU! </h3>

    <p style="margin-top: 10px;font-family: Space Grotesk; color: hsl(279, 6%, 55%); word-spacing: 9px;"> we've added your card details </p>

    <button style="width: 100%; margin-top: 40px;"> Continue </button>
    
    `



    console.log(form);
  }

});
