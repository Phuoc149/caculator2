const num = document.getElementsByClassName("num");
const result = document.getElementById("result-lb");
const input = document.getElementById("screen-lb");
const chia2 = document.getElementById("Chia");
const nhan2 = document.getElementById("Nhan");
const cong2 = document.getElementById("Cong");
const tru2 = document.getElementById("Tru");
const closeBrac = document.getElementById("close");
const openBrac = document.getElementById("open");
const brac = document.getElementsByClassName("brac");
let count = 0;
for (let bracket of brac) {
  bracket.addEventListener("click", function () {
    cong2.disabled = false;
    tru2.disabled = false;
    nhan2.disabled = true;
    chia2.disabled = true;
    // input.innerHTML += this.value;
  });
}
for (let number of num) {
  number.addEventListener("click", function () {
    chia2.disabled = false;
    cong2.disabled = false;
    tru2.disabled = false;
    nhan2.disabled = false;

    input.innerHTML += this.value;
    count = 0;
    console.log(result);
  });
}

function clean() {
  result.innerHTML = "";
  input.innerHTML = "";
  console.clear();
  location.reload();
  return false;
}
function deleted() {
  let temp = input.innerHTML;
  input.innerHTML = temp.slice(0, -1);
}

function tru() {
  count++;
  console.log(count);
  if (count < 2) {
    input.innerHTML += tru2.value;
    cong2.disabled = true;
    chia2.disabled = true;
    nhan2.disabled = true;
  } else {
    tru2.value = "";
  }
  tru2.value = "-";
}
function chia() {
  count++;
  console.log(count);

  if (count < 2) {
    input.innerHTML += chia2.value;

    cong2.disabled = true;
    tru2.disabled = true;
    nhan2.disabled = true;
  } else {
    chia2.value = "";
  }
  chia2.value = "/";
}
function cong() {
  openBrac.disabled = false;
  closeBrac.disabled = false;
  count++;
  console.log(count);

  if (count < 2) {
    input.innerHTML += cong2.value;

    tru2.disabled = true;
    chia2.disabled = true;
    nhan2.disabled = true;
  } else {
    cong2.value = "";
  }
  cong2.value = "+";
}
function nhan() {
  count++;
  console.log(count);

  if (count < 2) {
    input.innerHTML += nhan2.value;

    cong2.disabled = true;
    chia2.disabled = true;
    tru2.disabled = true;
  } else {
    nhan2.value = "";
  }
  nhan2.value = "*";
}
let countBracket = 0;
let arr = [];

function closes() {
  // input.innerHTML += closeBrac.value;
  countBracket--;
  // closeBrac.disabled = true;
  console.log(countBracket);
  // openBrac.disabled = true;
}
function opens() {
  input.innerHTML += openBrac.value;
  count = 0;
  countBracket++;
  closeBrac.disabled = false;
  console.log(countBracket);
  // tru2.disabled = false;
  // tru2.value = "-";
  // chia2.disabled = true;
  // nhan2.disabled = true;
}

// const regex = /\)\(|\d\(|\)\d|\)\./gm;
//     let output = text.replace(regex, (match) => {
//       return ${match.substr(0, 1)}*${match.substr(1)};
//     });

function equal2() {
  let output;
  let fix;
  let temp = input.innerHTML;
  let openBrackets = temp.split("(").length - 1;
  let closeBracket = temp.split(")").length - 1;
  arr = temp.split("");
  for (let i = 0; i < openBrackets - closeBracket; i++) {
    arr.push(")");
  }
  temp = arr.join("");
  //1+(2+(3))

  if (temp.includes("/0")) {
    console.log("find");
    output = "cant division by 0";
  } else if (temp.includes("()")) {
    console.log("find ()");
    output = "Input valid";
  } else {
    const regex = /\)\(|\d\(|\)\d|\)\./gm;
    //
    fix = temp.replace(regex, (match) => {
      return `${match.substr(0, 1)}*${match.substr(1)}`;
    });
    console.log("temp" + temp);
    console.log("fix" + fix);

    fix = eval(fix);

    output = Math.round(fix * 100000000000) / 100000000000;
  }

  result.innerHTML = output;
  console.log("output" + output);
  console.log("arr" + arr);
  console.log("temp " + temp);
  console.log(countBracket);
  console.log("( :" + openBrackets);
  console.log(") :" + closeBracket);
}
