const links = [
    {
      label: "Week1",
      url: "week1/index.html",
      label: "Week2",
      url: "week2/index.html"
    }
  ]

let list = document.querySelector('.list')

function create_links(){
    links.forEach(element => console.log(element))
}