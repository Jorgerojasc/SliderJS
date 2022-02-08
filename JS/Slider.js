let index =0;
let aux_index = 0
let aux_circulo =0
const imagenes = ['Images/beach1.jpg','Images/beach2.jpg', 'Images/beach3.jpg']//Cambiar o agrgar imagenes
let id_circulo=0;
let index_SC = imagenes.length-1
let index_circulo = imagenes.length -1
let imagen_selected = document.getElementById('img_selected')
const circuloSeleccionado = document.getElementById("circulos")
const circuloSection = document.querySelectorAll(".circulo_subSection")


var tiempoR = setInterval(next, 3000)


imagen_selected.src = imagenes[0]
circuloSection[index_circulo].classList.add('current')
index++;
index_circulo--;

function next(){
        
        imagen_selected.src = imagenes[index]

        for (var i =0 ; i < circuloSection.length ; i++) {
            circuloSection[i].classList.remove('current')
        }
        circuloSection[index_circulo].classList.add('current')
        
        index++;
        aux_index = index-1
        aux_circulo = index_circulo +1
        if (index == imagenes.length) {
            index = 0;
        }
        index_circulo--
        if(index_circulo < 0){
            index_circulo = imagenes.length - 1

        }           
}

function back(){
    if ((aux_index-1) <0) {
        aux_index = imagenes.length
    }
    if (aux_circulo == imagenes.length) {
        aux_circulo = 0
    }
    imagen_selected.src = imagenes[aux_index - 1]
    for (var i =0 ; i < circuloSection.length ; i++) {
        circuloSection[i].classList.remove('current')
    }
    
    circuloSection[aux_circulo].classList.add('current')
    aux_index = index+1
    aux_circulo = index_circulo 
    index--
    index_circulo++
    if (index_circulo == imagenes.length ) {
        index_circulo =0
    }
    if (index <0) {
        index = imagenes.length -1
    }                  
}

// Funcion para los circulos
function selectedCircle(e){
    
    if (e.target.tagName == 'LI') {
        id_circulo = e.target.id

    }
    else{
        id_circulo = e.target.parentNode.id
    }
    
    imagen_selected.src = imagenes[ Math.trunc(index_SC/id_circulo)]
    for (var i =0 ; i < circuloSection.length ; i++) {
        circuloSection[i].classList.remove('current')
    }
    circuloSection[id_circulo-1].classList.add('current')
    
    index_circulo = id_circulo-1
    index = Math.trunc(index_SC/id_circulo)
}

btn_right.addEventListener('click', function(){
    next();
    clearInterval(tiempoR);
    tiempoR = setInterval(next, 3000);
})

btn_left.addEventListener('click', function(){
    back()
    clearInterval(tiempoR);
    tiempoR = setInterval(next, 3000);
})

circuloSeleccionado.addEventListener('click', function(e){
    selectedCircle(e)
    clearInterval(tiempoR);
    tiempoR = setInterval(next, 3000);

})