//Create "Contact"-h2 and moves the h2 to the top in the contact-section
let sectionConatact = document.querySelector("#contact");
let h2Contact = document.createElement("h2");
h2Contact.textContent = "Contact";
sectionConatact.insertBefore(h2Contact, sectionConatact.childNodes[0]);

//Creat "About"-h2 and moves the about-section to the top 
let sectionAbout = document.querySelector("#about");
let h2About = document.createElement("h2");
let pTag = document.createElement("p");
sectionAbout.textContent = ""; //removes all text in teh section
h2About.textContent = "About"; //add h2 texContent
pTag.textContent ="We're the best in fruits & vegetables" //wrap the text with a ptag
sectionAbout.appendChild(h2About);
sectionAbout.appendChild(pTag);

let main = document.querySelector("#main");
main.insertBefore(sectionAbout, main.childNodes[0]);// moves about-section to the top in main

//red h1 and new text
let h1 = document.querySelector("h1");
h1.textContent = "Fruits & Vegetables Corp"
h1.setAttribute("style", "color: red");

//remove "banana" from list and add "vegetables"
let ul = document.querySelector("ul");
let li = document.createElement("li");
let aVegetables = document.createElement("a");
aVegetables.setAttribute("href", "#vegetables");
aVegetables.textContent = "Vegetables";
li.appendChild(aVegetables);
ul.removeChild(ul.lastElementChild); //remove banana
ul.appendChild(li);//add Vegetables to list

//fix table 
let thead = document.querySelector("thead");
thead.removeChild(thead.childNodes[1]); //remove existing td emelents

let tableRow = document.createElement("tr");
let th1 = document.createElement("th"); //add new th element
let th2 = document.createElement("th");
th1.textContent = "Name";
th2.textContent = "Email";
tableRow.appendChild(th1);
tableRow.appendChild(th2);
thead.appendChild(tableRow);

//add main.css
let head = document.querySelector("head")
let linkCss = document.createElement("link");
linkCss.setAttribute("rel", "stylesheet");
linkCss.setAttribute("href", "main.css");
head.appendChild(linkCss);


//head title 
headTitle = document.querySelector("title");
headTitle.textContent = "Fruits & Vegetables Corp";




