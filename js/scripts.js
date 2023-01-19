function replaceVowels(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  else {
    const textArray = text.split("");
    let newArray = [];
    for (let i = 0; i < textArray.length; i += 1) {
      if (textArray[i] === "a" || textArray[i] === "e" || textArray[i] === "i" || textArray[i] === "o" || textArray[i] === "u" || textArray[i] === "y") {
        console.log(textArray[i]);
        newArray.push("-");
      } else {
        console.log(textArray[i]);
        newArray.push(textArray[i]);
      }
    }
    document.body.innerHTML = "";
    let newArray1 = newArray.join("");
    const header = document.createElement("h3");
    header.append("This is your sentence with hidden vowels:");
    document.body.append(header);
    const paragraph = document.createElement("p");
    paragraph.append(newArray1);
    document.body.append(paragraph);
  }
}

//Interface Logic 
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function (event) {
    event.preventDefault();
    let array = document.getElementById("input").value;
    let array1 = array.toString();
    replaceVowels(array1);
  }
}
