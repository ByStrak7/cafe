const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/cafe01.png" },
  { name: "Voluptatem", image: "images/cafe02.png" },
  { name: "Explicabo", image: "images/cafe03.png" },
  { name: "Rchitecto", image: "images/cafe01.png" },
  { name: " Beatae", image: "images/cafe02.png" },
  { name: " Vitae", image: "images/cafe03.png" },
  { name: "Inventore", image: "images/cafe01.png" },
  { name: "Veritatis", image: "images/cafe02.png" },
  { name: "Accusantium", image: "images/cafe03.png" },
]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }