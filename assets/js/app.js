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

let error = document.getElementById("error");

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

//tratando erros vindos do php causado pelo usuarios
url = window.location.href;
url = url.split('?');

if(url[1] == 'emptyFields'){
    error.innerHTML = `Por favor, complete todos os campos!`;
}else if(url[1] == 'incompatibleFile'){
    error.innerHTML = `Tipo de arquivo não permitido!`;
}else if(url[1] == 'sendFileError'){
    error.innerHTML = `Erro ao enviar, tente de novo!`;
}else if(url[1] == 'sendFileSuccess'){
    error.innerHTML = `Email enviado com sucesso!`;
}
