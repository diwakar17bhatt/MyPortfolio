let eye = document.getElementById("eyee")
let eyecross = document.getElementById("eyecross")
let leak = document.getElementById("leak")





let eyeshow = (()=>{
    if(leak.type=="password"){
        leak.type = "text"
    }else if(leak.type == "text"){
        leak.type = "password"
    }
    eye.classList.toggle("hide")
    eyecross.classList.toggle("hide")
})

eyecross.addEventListener('click', eyeshow)
eye.addEventListener('click', eyeshow)





