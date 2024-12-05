const myBox = document.querySelector("h2");

console.dir(myBox);
const superEventHandler = {
    onMouse(){
        myBox.style.color = "blue"
        myBox.innerText = "The mouse is here!"
    },
    offMouse(){
        myBox.style.color = "red"
        myBox.innerText = "The mouse is gone!"
    },
    windowResize(){
        myBox.style.color = "green"
        myBox.innerText = "You just resized!"
    },
    rightClick(){
        myBox.style.color = "yellow"
        myBox.innerText = "That was a right click!"
    }
};

myBox.addEventListener("mouseenter",superEventHandler.onMouse);
myBox.addEventListener("mouseleave",superEventHandler.offMouse);
window.addEventListener("contextmenu",superEventHandler.rightClick);
window.addEventListener("resize", superEventHandler.windowResize);

