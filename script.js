//links
let size_input = document.querySelector("#size_input");
let size_input_btn = document.querySelector("#size_input_button");
let reset_btn = document.querySelector("#reset_sketchbook_button");
let sketchbook = document.querySelector("#sketchbook");
let color_input = document.querySelector("#color_input");
let opacity_input = document.querySelector("#opacity_input");

//creates n boxes based on input
size_input_btn.addEventListener("click", () => {
    let pixels = size_input.value * size_input.value;
    sketchbook.innerHTML = ""; 

    sketchbook.style.width = "500px";
    sketchbook.style.height = "500px";

    for(let i = 0; i < pixels; i++){
        let box = document.createElement("div");
        box.classList.add("box");

        box.style.width = 498 / size_input.value + "px"; 
        box.style.height = 498 / size_input.value + "px";

        sketchbook.appendChild(box);
    }
});

//when mouse hovers over boxes they color.
sketchbook.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("box")){
        let opacity = parseFloat(opacity_input.value) || 0.1;

        if(e.target.style.backgroundColor == ""){
            switch(color_input.value){
                case "":
                    e.target.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${opacity})`;
                    break;
                case "eraser":
                    e.target.style.backgroundColor = "transparent";
                    break;
                default:
                    e.target.style.backgroundColor = color_input.value.replace(/0\.1\)$/, `${opacity})`);
                    break;
            }
        } else {
            if(color_input.value === "eraser"){
                e.target.style.backgroundColor = "transparent";
            }else if(e.target.style.backgroundColor.split(".")[0] == color_input.value.split(".")[0] || color_input.value === ""){
                let currentColor = e.target.style.backgroundColor;
                let currentOpacity = parseFloat(currentColor.split(",")[3].replace(")", ""));
                if(currentOpacity < 1 - opacity){
                    let newOpacity = currentOpacity + opacity;
                    e.target.style.backgroundColor = currentColor.replace(currentOpacity, newOpacity);
                }
            }else{
                e.target.style.backgroundColor = color_input.value.replace(/0\.1\)$/, `${opacity})`);
            }
        }
    }    
});

//reset button
reset_btn.addEventListener("click", () => {
    sketchbook.innerHTML = "";
    size_input.value = "";
});
