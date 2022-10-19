const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/lago.jpg") {
    myImage.setAttribute("src", "images/lago2.jpg");
  } else {
    myImage.setAttribute("src", "images/lago.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
      } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Riparto con una nuova guida, ${myName}!`;
      }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Riparto con una nuova guida, ${storedName}!`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  