//links
let size_input = document.querySelector("#size_input");
let size_input_btn = document.querySelector("#size_input_button");
let reset_btn = document.querySelector("#reset_sketchbook_button");
let sketchbook = document.querySelector("#sketchbook")
let color_input = document.querySelector("#color_input");
let opacity_input = document.querySelector("#opacity_input");
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
            switch(color_input.value){
                case "":
                    e.target.style.backgroundColor = `rgba(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${0.1})`;
                    break;
                case "rgba(0, 0, 0, 0.1)":
                    e.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                    break;
                case "rgba(255, 0, 0, 0.1)":
                    e.target.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
                    break;
                case "rgba(0, 0, 255, 0.1)":
                    e.target.style.backgroundColor = "rgba(0, 0, 255, 0.1)";
                    break;
                case "rgba(0, 255, 0, 0.1)":
                    e.target.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
                    break;
                case "rgba(255, 255, 0, 0.1)":
                    e.target.style.backgroundColor = "rgba(255, 255, 0, 0.1)";
                    break;
                case "eraser":
                    e.target.style.backgroundColor = "transparent";
                    break;
            }

        }else{
            if(color_input.value.split(".")[0] == e.target.style.backgroundColor.split(".")[0]){
                let newOpacity;
                let currentColor = e.target.style.backgroundColor;
                let currentOpacity = parseFloat(currentColor.split(",")[3].replace(")", ""));
                if(currentOpacity < 0.96){
                    newOpacity = currentOpacity + 0.08;
                e.target.style.backgroundColor = currentColor.replace(currentOpacity, newOpacity);
                }
            }else if(color_input.value.split(".")[0] != e.target.style.backgroundColor.split(".")[0]){
                switch(color_input.value){
                    case "":
                        let newOpacity;
                        let currentColor = e.target.style.backgroundColor;
                        let currentOpacity = parseFloat(currentColor.split(",")[3].replace(")", ""));
                        if(currentOpacity < 0.96){
                            newOpacity = currentOpacity + 0.08;
                        e.target.style.backgroundColor = currentColor.replace(currentOpacity, newOpacity);
                        }
                        break;
                    case "rgba(0, 0, 0, 0.1)":
                        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                        break;
                    case "rgba(255, 0, 0, 0.1)":
                        e.target.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
                        break;
                    case "rgba(0, 0, 255, 0.1)":
                        e.target.style.backgroundColor = "rgba(0, 0, 255, 0.1)";
                        break;
                    case "rgba(0, 255, 0, 0.1)":
                        e.target.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
                        break;
                    case "rgba(255, 255, 0, 0.1)":
                        e.target.style.backgroundColor = "rgba(255, 255, 0, 0.1)";
                        break;
                    case "eraser.":
                        e.target.style.backgroundColor = "transparent";
                        break
                    }
                }

        }
    }    
});
//reset button
reset_btn.addEventListener("click", () => {
    sketchbook.innerHTML = "";
    size_input.value = "";
})