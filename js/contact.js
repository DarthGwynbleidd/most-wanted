const motifSelect = document.getElementById('motif-select')
const criminalSelect = document.getElementById('criminals-select')
const divInfos = document.getElementById('infos')
const divDenunciations = document.getElementById('denunciations')
const divEuh = document.getElementById('euh')
const criminalImg = document.getElementById('criminal-img')
const imgObject = {
    Alban : '../assets/img/Alban 187px.png',
    Ched : '../assets/img/Ched 187x249.jpg',
    Fred : '../assets/img/Fred 187x249.jpg',
    JeanMi : '../assets/img/jean michel 187x249.jpg',
    Jonathan : '../assets/img/Jonathan 187x249.jpg',
    Manon : '../assets/img/Manon 187x249.jpg',
    Melvin : '../assets/img/melvin 187x249.jpg',
    Michael : '../assets/img/mickael 187x249.jpg',
    Nicolas : '../assets/img/nicolas 187x249.jpg',
    Nolan : '../assets/img/nolan 187x249.jpg',
    Stephane : '../assets/img/Stephane 187x249.jpg',
    Thibault : '../assets/img/Thibault 187x249.jpg',
    Vincent : '../assets/img/vince 187x249.jpg',
    Angelique : '../assets/img/Angelique 187x249.jpg',
    Leila : '../assets/img/Leila 187x249.jpg',
    Anais : '../assets/img/Anais 187x249.jpg'
}

motifSelect.addEventListener('change', (event) =>{
    if (event.target.value === "informations"){
        divInfos.style.display = 'block'
        divDenunciations.style.display = 'none'
        divEuh.style.display = 'none'
    }
    else if (event.target.value === 'denunciations'){
        divInfos.style.display = 'none'
        divDenunciations.style.display = 'block'
        divEuh.style.display = 'none'
    }
    else if (event.target.value === 'euh'){
        divInfos.style.display = 'none'
        divDenunciations.style.display = 'none'
        divEuh.style.display = 'block'
    }
    else{
        divInfos.style.display = 'none'
        divDenunciations.style.display = 'none'
        divEuh.style.display = 'none'
    }
})
criminalSelect.addEventListener('change', (event) =>{
    if (event.target.value === 'default')
        criminalImg.style.display = 'none'
    else{
        criminalImg.style.display = 'block'
        criminalImg.src = imgObject[event.target.value]
    }

})
