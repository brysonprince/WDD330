const links = [
    {
      label: "Week1",
      url: "week1/index.html",
      label: "Week2",
      url: "week2/index.html"
    }
  ]

let list = document.getElementsByTagName('ol')

function createLinks(){
    newList = "";
    for (let i = 0; i < list.length; i++){
        newList += "<li>";
        newList += "<a href=\"";
        newList += links[i].url;
        newList += "\">"
        newList += links[i].label;
        newList += "</a>";
        newList += "</li>";
    }
    list.innerHTML = newList;
}

createLinks()