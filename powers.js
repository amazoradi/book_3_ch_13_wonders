document.querySelector("#activate-flight").addEventListener("click", () => {
  function flightHandlerFunction () {
    let flightSection = document.getElementById("flight")
  // this will make it so the class changes every clcik from disable to enabled cool but not waht was required
    // flightSection.classList.toggle("disabled")
    // flightSection.classList.toggle("enabled")
    flightSection.classList.remove("disabled")
    flightSection.classList.add("enabled")
  }
  flightHandlerFunction()
}) 

document.querySelector("#activate-mindreading").addEventListener("click", () => {
  function mindHandlerFunction() {
    let mindSection = document.getElementById("mindreading")
    mindSection.classList.remove("disabled")
    mindSection.classList.add("enabled")
  }
  mindHandlerFunction()
})

document.querySelector("#activate-xray").addEventListener("click", () => {
  function xrayHandlerFunction() {
    let xraySection =document.getElementById("xray")
    xraySection.classList.remove("disabled")
    xraySection.classList.add("enabled")
  }
  xrayHandlerFunction()
})

document.querySelector("#activate-all").addEventListener("click", () => {
  function addToAll () {
    let allSections = document.querySelectorAll("section")
    allSections.forEach(section => {
      section.classList.add("enabled")
      section.classList.remove("disabled")
    })
  }
 addToAll()
})

document.querySelector("#deactivate-all").addEventListener("click", ()=> {
  function deactivateAll () {
    let allSections = document.querySelectorAll("section")
    allSections.forEach(section => {
      section.classList.add("disabled")
      section.classList.remove("enabled")
    });
  }
  deactivateAll()
})