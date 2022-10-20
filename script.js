//Select the section with an id of container without using querySelector.
document.getElementById("container")
//Select the section with an id of container using querySelector.
document.querySelector("#container")
//Select all of the list items with a class of “second”.
document.querySelectorAll("li.second")
//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol li.third")

//Give the section with an id of container the text “Hello!”.
const o = document.querySelector("#container")
o.innerText = "Hello!"

//Add the class main to the div with a class of footer.
//+
//Remove the class main on the div with a class of footer.
const p = document.querySelector(".footer")
p.classList.add("main")

p.classList.remove("main")

//Create a new li element.
//+
//Give the li the text “four”.
//Append the li to the ul element.
const d = document.querySelector("ul")
d.innerHTML += "<li> </li>"

const t = document.querySelectorAll("ul li")
t[3].innerText = "Four"

//Loop over all of the lis inside the ol tag and give them a background color of “green”.
const q = document.querySelectorAll("ol li")
for (let li of q) {
    li.style.backgroundColor = "green";
}
//Remove the div with a class of footer
document.querySelector(".footer").remove()