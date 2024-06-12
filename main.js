/* PROYECTO DE: ALEXIS LIOTTA / SEGUNDA ENTREGA */

const agregarTareas = document.getElementById("agregartareas_btn")
const inputTareas = document.getElementById("serchinput")
const listas = document.getElementById("lista")
const divP = document.getElementById("div-p")

let listasGuardadas = []

agregarTareas.addEventListener("click", (e)  => {  
    const noToast = document.getElementById("noToast")
    listas.innerHTML = ""
    let valorInput = inputTareas.value;
    if(!valorInput){
        alert("Debes llenar el input con una tarea")
        return
    }        
        
        listasGuardadas.push(valorInput)
        if(noToast){
            divP.removeChild(noToast)
        }
   

    for(let i = 0; i < listasGuardadas.length ; i++) {
    	console.log(listasGuardadas[i])
        const li = document.createElement("li")
        const borrar = document.createElement("button")
        borrar.innerText = ("borrar")
       
        const conteinterDiv = document.createElement("div")
        li.textContent = listasGuardadas[i];
        conteinterDiv.appendChild(li)         
        conteinterDiv.appendChild(borrar)  
        listas.appendChild(conteinterDiv)
        
        borrar.addEventListener("click", (e)  =>{
            listas.removeChild(conteinterDiv)
            listasGuardadas = listasGuardadas.filter(tarea => tarea != listasGuardadas[i])
        })
    }
            console.clear()  
            inputTareas.value = ""            
    
})