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
];

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
    let inputFor = document.getElementById("emailUser").value;
    let inputTopic = document.getElementById("topic").value;
    let inputContent = document.getElementById("content").value;
    let error = document.getElementById("error");

    let inputForValid = true;
    let inputTopicValid = true;
    let inputContentValid = true;

    inputFor = removeSpecials(inputFor);
    inputTopic = removeSpecials(inputTopic);
    inputContent = removeSpecials(inputContent);

    inputForValid = filterArray.indexOf(inputFor) == -1 ? true : false;
    inputTopicValid = filterArray.indexOf(inputTopic) == -1 ? true : false;
    inputContentValid = filterArray.indexOf(inputContent) == -1 ? true : false;

    console.log(inputContentValid);

    if (
        inputForValid == false ||
        inputContentValid == false ||
        inputTopicValid == false
    ) {
        error.innerHTML = `Por favor, não digite palavras deste viés`;
    } else {
        error.innerHTML = "";
    }
};
