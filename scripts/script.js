var safeBG = true
var isHomepage = true

document.addEventListener("DOMContentLoaded",(event) => {
    let title = document.getElementById("title")
    title.classList.add("animate-on-load")
    console.log("something happened")
})

document.addEventListener("keypress", (event) => {
    if(event.key == "e"){
        safeBG = !safeBG
        if (safeBG && !isHomepage){
            activeToggle("gray")
        }
        else if(!safeBG && isHomepage){
            activeToggle("")
        }
        else if(!isHomepage){
            activeToggle("white")
        }
        else if(isHomepage){
            activeToggle("")
        }
    }
})

function moveImage() {
    if (true){
        let roll = Math.random() * 100 //random number between 0-100

        var imageToSelect;
        var imageToHide;

        if (roll < -1) { // < -1 will be always pink, < 101 will be always white, < 50 will be 50/50 chance
            imageToSelect = 1
            imageToHide = 0
        }
        else
        {
            imageToSelect = 0
            imageToHide = 1
        }

        var activeStatic = document.getElementsByClassName("static").item(imageToSelect)
        var inactiveStatic = document.getElementsByClassName("static").item(imageToHide)

        activeStatic.style.opacity = 1
        inactiveStatic.style.opacity = 0

        let softset = getRandOffset()
        activeStatic.style.left = softset.left / 1.5
        activeStatic.style.top = softset.top / 1.5
    }
    
}

setInterval(moveImage, 1000 / 120)

function getRandOffset(){
    // website size
    let size = document.getElementsByTagName("body").item(0).getBoundingClientRect()
    let localWidth = size.width
    let localHeight = size.height
    // image size
    let imgSize = document.getElementsByClassName("static").item(0).getBoundingClientRect()
    let imgWidth = imgSize.width
    let imgHeight = imgSize.height
    // limits
    let leftBound = localWidth - imgWidth
    let topBound = localHeight - imgHeight
    // randomiser / results
    var left = Math.random() * leftBound
    var top = Math.random() * topBound
    // return results
    return {left: left, top: top}
}

function activeToggle(targetId){
    let className = null
    if (safeBG == true){
        className = "not-static"
    }
    else if(safeBG == false){
        className = "static"
    }
    var bgArray = document.getElementsByClassName("bg")
    for (var i = 0; i < bgArray.length; i++){
        var element = bgArray.item(i)
        var elementId = element.id
        var elementClasses = element.classList
        
        if (elementId == targetId && elementClasses.contains(className)){
            element.classList.add("active")
        }
        else{
            element.classList.remove("active")
        }
    }
}



function test(amount){
    var value = 0
    for (var i = 0; i < amount; i++){
        value++
    }
    return value
}

console.log(test(10))
