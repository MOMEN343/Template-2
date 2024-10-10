// Showing the list when the toggle-menu on the header clicked (on the mobile screen) 
let toggleMenuIcon = document.getElementsByClassName("toggle-menu")[0];
toggleMenuIcon.addEventListener("click", function(){
    let list = document.getElementsByTagName("ul")[0];
    if (list.style.display == "flex") {
        list.style.display = "none";
    } else {
        list.style.display = "flex";
        list.style.position = "absolute";
        list.style.flexDirection = "column";
        list.style.top = "100%";
        list.style.left = 0;
        list.style.width = "100%";
        list.style.backgroundColor = "#0000005c";
    };
});

function ChangeContentRight() {
    let active = new Array(document.getElementsByTagName("li")[6], document.getElementsByTagName("li")[7], document.getElementsByTagName("li")[8]);
    for (let index = 0; index < active.length; index++) {
        if (active[index].getAttribute("class") == "active") {
            active[index].setAttribute("class", "");
            active[++index].setAttribute("class", "active");
        }
    }
}
function ChangeContentLeft() {
    let active = new Array(document.getElementsByTagName("li")[6], document.getElementsByTagName("li")[7], document.getElementsByTagName("li")[8]);
    for (let index = 0; index < active.length; index++) {
        if (active[index].getAttribute("class") == "active") {
            active[index].setAttribute("class", "");
            active[index - 1].setAttribute("class", "active");
        }
    }
}

// Set the active class for the selected(clicked) item on the list at portfolio section
let li = new Array(document.getElementsByTagName("li")[13], document.getElementsByTagName("li")[14], document.getElementsByTagName("li")[15], document.getElementsByTagName("li")[16], document.getElementsByTagName("li")[17]);

for (let index = 0; index < li.length; index++) {
    li[index].addEventListener("click", function () {       
        for (let i = 0; i < li.length; i++) {
             li[i].setAttribute("class", "");            
        }
        li[index].setAttribute("class", 'active');
    });
}
