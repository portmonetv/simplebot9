let req;
let randomText;

const refs = {
  random: document.querySelector("#random-text-uzarov")
};

function load_text(url) {
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req != undefined) {
    req.onreadystatechange = function() {
      loadDone();
    };
    req.open("GET", url, true);
    req.send("");
  } else {
    console.log("Can't load file");
  }
}

function loadDone() {
  if (req.readyState == 4) {
    if (req.status == 200) {
      alertRndText(req.responseText);
    } else {
      console.log("error:\n" + req.status + "\n" + req.statusText);
    }
  }
}

function rndNum(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function alertRndText(data) {
  let arrText = [];
  arrText = data.split("\n");
  const rnd = rndNum(1, arrText.length - 1);
  randomText = arrText[rnd - 1];
  refs.random.textContent = randomText;
}

load_text("https://portmonetv.github.io/simplebot2/D/data/text.txt");
