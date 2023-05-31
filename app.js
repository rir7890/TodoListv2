const addBtn = document.getElementById("btn");
const title = document.getElementById("title");
const resText = document.getElementById("resText");
const showR = document.getElementById("showResult");
const cBox = document.querySelector(".contentBox");
const dC = document.querySelector(".deleteContnt");

function Perform(event) {
  event.preventDefault();
  //   console.log(title.value);
  //   resText.innerHTML = title.value;
  showR.innerHTML += `
   <div class="contentBox" draggable="true">
          <div id="resText">${title.value}</div>
          <span id="cross" onclick="Remove(event)">X</span> 
        </div>
  `;
  title.value = "";
}

for (cB in cBox) {
  cB.addEventListener("dragstart", (e) => {
    console.log("drag start is triggered ");
    setTimeout(() => {
      e.target.classList = "hide";
    }, 0);
  });
  cBox.addEventListener("dragend", (ev) => {
    console.log("dragend is triggered");
    ev.target.parentElement.remove();
  });
}

function Remove(event) {
  event.preventDefault();
  //   console.log(event);
  // console.log(event.target.parentElement.remove());
  event.target.parentElement.remove();
}
