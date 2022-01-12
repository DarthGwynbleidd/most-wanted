//recupération des elements du DOM dans des constantes

const motifSelect = document.getElementById('motif-select')
const criminalSelect = document.getElementById('criminals-select')
const divInfos = document.getElementById('infos')
const divDenunciations = document.getElementById('denunciations')
const criminalImg = document.getElementById('criminal-img')
const denunciationImg = document.getElementById('denunciation-img')
const inputAvatar = document.getElementById('avatar')

//creation en dur d'un objet contenant le nom en clé et la photo en valeur de chaque individu

const imgObject = {
    Alban_Thaumur : '../assets/img/Alban 187x249.png',
    Ched_Brun : '../assets/img/Ched 187x249.jpg',
    Fred_Andolina: '../assets/img/Fred 187x249.jpg',
    JeanMi_Pailherey : '../assets/img/jean michel 187x249.jpg',
    Jonathan_Narboni : '../assets/img/Jonathan 187x249.jpg',
    Manon_Vavasseur : '../assets/img/Manon 187x249.jpg',
    Melvin_Silva : '../assets/img/melvin 187x249.jpg',
    Michael_Michaux : '../assets/img/mickael 187x249.jpg',
    Nicolas_Bouchet : '../assets/img/nicolas 187x249.jpg',
    Nolan_Wittmann : '../assets/img/nolan 187x249.jpg',
    Stephane_Gagnant : '../assets/img/Stephane 187x249.jpg',
    Thibault_Sechet : '../assets/img/Thibault 187x249.jpg',
    Vincent_Charlette : '../assets/img/vince 187x249.jpg',
    Angelique_Rioux : '../assets/img/Angelique 187x249.jpg',
    Leila_Ait_Itto : '../assets/img/Leila 187x249.jpg',
    Anais_Roussy_Renard : '../assets/img/Anais 187x249.jpg'
}

//ajout des differentes options du selecteur "criminalSelect" a partir de l'objet "imgObject"

for (img in imgObject){
    let option = document.createElement('option')
    let name = `${img.replace(/_/g, " ")}`
    option.text = name
    option.value = img
    criminalSelect.appendChild(option)
}

//gestion evenement sur le selecteur "criminalSelect"

const displayCriminalPicture = (event) =>{
    if (event.target.value === 'Default')
        criminalImg.src = '../assets/logo/Default 187x249.png'
    else{
        criminalImg.src = imgObject[event.target.value]
    }
}

//gestion evenement sur le premier selecteur "motif" avec une fonction

const displayMotif = (event) => {
    if (event.target.value === "informations"){
        divInfos.style.display = 'flex'
        divDenunciations.style.display = 'none'
    }
    else if (event.target.value === 'denunciations'){
        divInfos.style.display = 'none'
        divDenunciations.style.display = 'flex'
    }
    else{
        divInfos.style.display = 'none'
        divDenunciations.style.display = 'none'
    }
}

//fonction (evenement) de previsualisation d'une image avant potentiel upload

const preview = (event) => {
    const picture = event.files[0]
    if (picture)
        denunciationImg.src = URL.createObjectURL(picture)
}

//fonction (evenement) de reset de previsualisation de l'image

const reset = () => {
    inputAvatar.value = ''
    denunciationImg.src = '../assets/logo/Default 187x249.png'
}