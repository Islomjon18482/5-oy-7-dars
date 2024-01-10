const btn = document.querySelector("#btn")
const name = document.querySelector("#name")
const nameError = document.querySelector(".error__name")
const img = document.querySelector("#img")
const imgError = document.querySelector(".error__img")
const color = document.querySelector("#color")
const colorError = document.querySelector(".error__color")
const type = document.querySelector("#type")
const typeError = document.querySelector(".error__type")
const def = document.querySelector("#def")
const defError = document.querySelector(".error__def")
const form = document.querySelector("form")
const cost = document.querySelector("#cost")
const costError = document.querySelector(".error__cost")


function isHttpValid(str) {
    try {
      const newUrl = new URL(str);
      return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch (err) {
      return false;
    }
}

function validet(){



    if(!name.value || !name.value.trim()){
        nameError.style.display = "block"
        focus();
        return false
    }else{
        nameError.style.display = "none"
    }



    if(!img.value || !isHttpValid(img.value)){
        imgError.style.display = "block"
        focus();
        return false
    }else{
        imgError.style.display = "none"
    }

    

    if(!color.value){
        colorError.style.display = "block"
        focus();
        return false
    }else{
        colorError.style.display = "none"
    }



    if(!type.value){
        typeError.style.display = "block"
        focus();
        return false
    }else{
        typeError.style.display = "none"
    }



    if(!def.value || !def.value.trim()){
        defError.style.display = "block"
        focus();
        return false
    }else{
        defError.style.display = "none"
    }



    if(!cost.value|| !Number(cost.value)){
        costError.style.display = "block"
        focus();
        return false
    }else{
        costError.style.display = "none"
    }



    return true
}

btn.addEventListener("click", function(){
    if(validet()){
        let phone = {
            name:name.value,
            img:img.value,
            color:color.value,
            type:type.value,
            def:def.value,
            cost:cost.value,
            id:Date.now()
        }
        let info = []
        if(localStorage.getItem("info")){
            info =JSON.parse(localStorage.getItem("info")) 
        }
        info.push(phone)
        localStorage.setItem("info", JSON.stringify(info))
        form.reset()
    }
})