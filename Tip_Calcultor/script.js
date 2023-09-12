/*This is typically done to capture a reference to a button element
that you want to add an event listener to.*/

//Variable that gets an HTML element with id attribute "calculate" 
const btnEl = document.getElementById("calculate");
//variable that gets a HTMl element with id attribute "bill"
const billInput = document.getElementById("bill");
//variable that gets a HTML element with id attribute "tip"
const tipInput = document.getElementById("tip");
//variable that gets a HTML element with id attribute "total"
const totalSpan = document.getElementById("total");

function calculateTotal() {
    /* retrieve the value entered by the user in the billInput and
    tipInput fields and store them in the billValue and tipValue variables. */
  const billValue = billInput.value;
  const tipValue = tipInput.value;
    /* calculate the total value of the bill and store it in the totalValue variable.*/
  const totalValue = billValue * (1 + tipValue / 100);
  /* update the total input text with total value obtained */
  totalSpan.innerText = totalValue.toFixed(2);
}

/*add an event listener to call the function calculateTotal*/
btnEl.addEventListener("click", calculateTotal);