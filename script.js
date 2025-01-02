//links
let size_input = document.querySelector("#size_input");
let size_input_btn = document.querySelector("#size_input_button");
let reset_btn = document.querySelector("#reset_sketchbook_button");
let sketchbook = document.querySelector("#sketchbook")
//creates n boxes based on input

size_input_btn.addEventListener("click", () => {
    pixels = size_input.value* size_input.value;
    sketchbook.innerHTML = ""; 

    sketchbook.style.width = "500px";
    sketchbook.style.height = "500px";

    for(let i = 0; i < pixels; i++){
        let box = document.createElement("div");
        box.classList.add("box");

        box.style.width = 498/size_input.value + "px"; // flex has to fit them trough, if they are equal i think border distorts them or anyway there must be a small bffer space, so i made them occupy 498px instead of 500px
        box.style.height = 498/size_input.value + "px";

        sketchbook.appendChild(box);
    }
});
//when mouse hovers over boxes they color.
sketchbook.addEventListener("mouseover", (e) => {

    if(e.target.classList.contains("box")){
        if(e.target.style.backgroundColor == ""){
            e.target.style.backgroundColor = `rgba(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${0.1})`;

        }else{
            let newOpacity;
            let currentColor = e.target.style.backgroundColor;
            let currentOpacity = parseFloat(currentColor.split(",")[3].replace(")", ""));
            if(currentOpacity < 1){
                newOpacity = currentOpacity + 0.1;
            } else {
                newOpacity = 1;
            }
            e.target.style.backgroundColor = currentColor.replace(currentOpacity, newOpacity);
        }
    }    
});
//reset button
reset_btn.addEventListener("click", () => {
    sketchbook.innerHTML = "";
    size_input.value = "";
})