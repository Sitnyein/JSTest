window.addEventListener("scroll",()=> {
    console.log("u scrooll");
    console.log(window.screenY);
})

document.addEventListener("mousemove", (event) => {
    console.clear();
    console.log(event);
})