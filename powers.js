document.querySelector("#activate-flight").addEventListener("click", () => {
  function flightHandlerFunction () {
    let flightSection = document.getElementById("flight")
    flightSection.classList.toggle("disabled")
    flightSection.classList.toggle("enabled")
  }
  flightHandlerFunction()
}) 