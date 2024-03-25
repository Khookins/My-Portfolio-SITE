var safeBG = true
var isHomepage = true

async function loadPage(pageLink){
    try{
        const response = await fetch(pageLink)
        const pageContent = await response.text()
        document.getElementById("content").innerHTML = pageContent
        console.log(pageContent)
    }
    catch(error){
        console.log(error)
        window.close()
    }

}
function resetScreenTransition(){
    document.getElementById("screen-transition").style.transitionProperty = "none"
    document.getElementById("screen-transition").offsetHeight
    document.getElementById("screen-transition").style.top = "-100%"
    document.getElementById("screen-transition").offsetHeight
    document.getElementById("screen-transition").style.transitionProperty = "top"
}

function screenTransition(){
    setTimeout(transTitle, 500)
    document.getElementById("screen-transition").style.top = "100%"
    setTimeout(resetScreenTransition, 1000)
}
function transTitle(){
    let title = document.getElementById("title")
    title.classList.remove("animate-on-load")
    title.offsetHeight
    title.classList.add("animate-on-load")  
    //document.getElementById("screen-transition").style.top = "-100%"
}
function backClicked(){
    isHomepage = !isHomepage
    var links = document.getElementsByClassName("link")
    


    setTimeout(() => {
        for (var i = 0; i < links.length; i++){
            links.item(i).classList.remove("hidden")
        }
        activeToggle("")
    }, 500)
    setTimeout(() => {
        document.getElementById("back-container").classList.add("hidden")
        document.getElementsByTagName("footer").item(0).style.backgroundColor = "#8200c5"
    }, 800)
    screenTransition()
}
function linkClicked(){
    isHomepage = !isHomepage
    var links = document.getElementsByClassName("link")
   

    setTimeout(() => {
        for (var i = 0; i < links.length; i++){
            links.item(i).classList.add("hidden")
        }
        if(safeBG){
            activeToggle("gray")
        }
        else{
            activeToggle("white")
        }
    }, 500)
    setTimeout(() => {
        document.getElementById("back-container").classList.remove("hidden")
        document.getElementsByTagName("footer").item(0).style.backgroundColor = "#ff8133"
    }, 800)
    screenTransition()
}
function about(){
    linkClicked()
    setTimeout(() => {
        loadPage("pages/about.html")
        document.getElementById("title").textContent = "ABOUT"
    },500)
    console.log("sus")
}
function projects(){
    linkClicked()
    setTimeout(() => {
        loadPage("pages/projects.html")
        document.getElementById("title").textContent = "PROJECTS"
    },500)
}
function skills(){
    linkClicked()
    setTimeout(() => {
        loadPage("pages/skills.html")
        document.getElementById("title").textContent = "SKILLS"
    },500)
}
function hobbies(){
    linkClicked()
    setTimeout(() => {
        loadPage("pages/hobbies.html")
        document.getElementById("title").textContent = "HOBBIES"
    },500)
}
function home(){
    backClicked()
    setTimeout(() => {
        loadPage("pages/home.html")
            document.getElementById("title").textContent = "MY PORTFOLIO"
    },500)
}
function showEye(eye){
    var eyeOn = document.getElementById("epilepsy-mode-on")
    var eyeOff = document.getElementById("epilepsy-mode-off")
    if (eye == true){
        eyeOff.classList.remove("visible")
        eyeOn.classList.add("visible")
    }
    if (eye == false){
        eyeOn.classList.remove("visible")
        eyeOff.classList.add("visible")
    }
}

document.addEventListener("DOMContentLoaded",(event) => {
    transTitle()
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
        showEye(safeBG)
    }
})

function moveImage() {
    if (!safeBG){

        var activeStatic
        var inactiveStatic

        var staticArray = document.getElementsByClassName("static")
        for (var i = 0; i < staticArray.length ; i++){
            if (staticArray.item(i).classList.contains("active")){
                activeStatic = staticArray.item(i)
                inactiveStatic = staticArray.item((i + 1) %staticArray.length)
            }
        }

        activeStatic.style.opacity = 1
        inactiveStatic.style.opacity = 0

        let softset = getRandOffset()
        activeStatic.style.left = softset.left / 1.5
        activeStatic.style.top = softset.top / 1.5
    }
    
}

setInterval(moveImage, 1000 / 60)

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

loadPage("pages/home.html")
console.log(test(10))
