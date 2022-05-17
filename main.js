// select elements

let btns = document.querySelectorAll(".btns span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

// localStorage.clear();

btns.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("check")) {
      checkItem();
    }
    if (ev.target.classList.contains("add")) {
      addItem();
    }
    if (ev.target.classList.contains("delete")) {
      deleteItem();
    }
    if (ev.target.classList.contains("show")) {
      showItem();
    }
  });
});

function checkInput() {
  results.innerHTML = "The input can't be empty";
}

function checkItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `Found it in Local Storage <span>${theInput.value}</span>`;
    } else {
      results.innerHTML = `Not Found it in Local Storage <span>${theInput.value}</span>`;
    }
  } else {
    checkInput();
  }
}
function addItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `the item is <span>${theInput.value}</span> already exist`;
    } else {
      localStorage.setItem(theInput.value, theInput.value);
      results.innerHTML = "has been add it";
      theInput.value = "";
    }
  } else {
    checkInput();
  }
}
function deleteItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);
      results.innerHTML = `Found it in Local Storage <span>${theInput.value}</span> and has been delete it`;
      theInput.value = "";
    } else {
      results.innerHTML = `Not Found it in Local Storage <span>${theInput.value}</span>`;
    }
  } else {
    checkInput();
  }
}
function showItem() {
  if (localStorage.length) {
    results.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="keys">${key}</span>`;
    }
  } else {
    results.innerHTML = "Local Storage is empty";
  }
}
