const filterArray = [
    "cusao",
    "bucetinha",
    "xereca",
    "puta",
    "caralho",
    "foda-se",
    "vai tomar no seu cu",
    "fodase",
    "merda",
    "cacete",
    "porra",
    "filho da puta",
    "viado",
    "bicha",
    "gayzinho",
    "arrombado",
    "vagabundo",
    "desgracado",
    "idiota",
    "imbecil",
    "retardado",
    "anormal",
    "estupido",
    "babaca",
    "burro",
    "cuzao",
    "pau no cu",
    "chupa-cabra",
    "piranha",
    "vadia",
    "prostituta",
    "buceta",
    "xoxota",
    "pepeca",
    "pinto",
    "rola",
    "mamilo",
    "seios",
    "peitos",
    "tetinhas",
    "bunda",
    "cu",
    "anus",
    "testiculos",
    "testiculos",
    "saco",
    "escroto",
    "penis",
    "vulva",
    "clitoris",
    "vagina",
    "mamilos",
    "seio",
    "peito",
    "tetinha",
    "gordo",
];

const inputFile = document.getElementById("myfile");
const btnFile = document.getElementById("btn-custom");

btnFile.addEventListener('click', ()=>{
    inputFile.click();
});

inputFile.addEventListener('change', ()=>{
    const files = inputFile.files;
    const selectedFiles = document.getElementById("selected-files");
    const areaFiles = document.getElementById("area-files");

    selectedFiles.style.display = 'flex';

    for(let i=0; i < files.length; i++){
        areaFiles.innerHTML += `<li>${files[i].name}</li>`;
    }
});

const error = document.getElementById("error");

const removeSpecials = (text) => {
    text = text.replace(/[ÀÁÂÃÄÅ]/, "A");
    text = text.replace(/[àáâãäå]/, "a");
    text = text.replace(/[ÈÉÊË]/, "E");
    text = text.replace(/[éèê]/, "e");
    text = text.replace(/[íìî]/, "i");
    text = text.replace(/[ÌÍÎ]/, "I");
    text = text.replace(/[óòõô]/, "o");
    text = text.replace(/[ÒÓòÔÕ]/, "O");
    text = text.replace(/[Ç]/, "C");
    text = text.replace(/[ç]/, "c");
    return text.replace(/[^a-z0-9]/gi, " ");
};

const filter = () => {
    let inputTopic = document.getElementById("topic").value;
    let inputContent = document.getElementById("content").value;
    let btnSubmit = document.getElementById("btnSubmit");

    let inputTopicValid = true;
    let inputContentValid = true;

    inputTopic = removeSpecials(inputTopic);
    inputContent = removeSpecials(inputContent);

    inputTopic = inputTopic.toLowerCase();
    inputContent = inputContent.toLowerCase();

    inputTopic = inputTopic.trim();
    inputContent = inputContent.trim();

    inputTopic = inputTopic.split(" ");
    inputContent = inputContent.split(" ");

    inputTopic.forEach(element => {
        inputTopicValid = filterArray.indexOf(element) == -1 ? true : false;
    })
    inputContent.forEach(element => {
        inputContentValid = filterArray.indexOf(element) == -1 ? true : false;
    })

    if (
        inputContentValid == false ||
        inputTopicValid == false
    ) {
        error.innerHTML = `Por favor, não digite palavras deste viés`;
        btnSubmit.disabled = true;
    } else {
        error.innerHTML = "";
        btnSubmit.disabled = false;
    }
};


//tratativa de inputs vazios 
const completedFields = () =>{
    const inputTopic = document.getElementById("topic").value;
    const inputContent = document.getElementById("myfile");
    const inputEmail = document.getElementById("emailUser").value;

    error.innerHTML = '';

    const isValid = {
        email: false,
        content: false,
        topic: false,
        file: true
    };

    let validFile = inputContent.value; 
    validFile = validFile.split('.');
    if(validFile[validFile.length -1] == 'exe'){
        error.innerHTML = 'Arquivo inválido';
        isValid.file = false;
    } 

    isValid.topic = inputTopic != '' ? true : false; 
    isValid.content = inputContent != '' ? true : false; 
    isValid.email = inputEmail != '' ? true : false; 

    for(const element in isValid){
        if(isValid[element] == false && isValid.file == true){
            error.innerHTML = 'Por favor! Complete todos os campos';
            return false;
        }else if(isValid[element] == true && isValid.file == false){
            error.innerHTML = 'Arquivo inválido';
            return false;
        }
    }
}

const input = document.getElementById("myfile");

input.addEventListener("change", () => {
    const files = input.files;
    const maxFileSize = 26214400; // 25 MB em bytes
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size > maxFileSize) {
        alert(`O arquivo ${file.name} é maior que 25 MB e não pode ser enviado.`);
        input.value = "";
        return;
      }
    }
});

const form = document.getElementById("form");

const loadButton = ()=>{
    const button = document.createElement("button");
    button.type = "submit";
    button.id = "btnSubmit";
    button.innerHTML = '<i class="bi bi-cloud-arrow-up"></i> Enviar';

    form.insertAdjacentElement('beforeend', button)
}

loadButton();


//tratando erros vindos do php causado pelo usuarios
url = window.location.href;
url = url.split('?');

if(url[1] == 'sendFileError'){
    error.innerHTML = `Erro ao enviar, tente de novo!`;
}else if(url[1] == 'sendFileSuccess'){
    error.innerHTML = `<i class="bi bi-cloud-check"></i> Email enviado com sucesso!`;
}