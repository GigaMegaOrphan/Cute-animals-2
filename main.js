


let dogFact = document.getElementById("Fact");
let foxFact = document.getElementById("Fact");
let catFact = document.getElementById("Fact");


async function fetchDogData(){

    try{
        const response = await fetch(`https://dog.ceo/api/breeds/image/random`);

        const data = await response.json();
        const cutePic = data.message;
        const imgElement = document.getElementById("cutePic");

        imgElement.src = cutePic;


        dogFact.innerHTML = ""

        fetch(`https://dogapi.dog/api/facts`)
        .then(response => response.json())
        .then(data => {dogFact.innerHTML += `${data.facts}`});

    }
    catch(error){
        console.error(error);
    }

    document.getElementById("cdfact").innerHTML = "Dog fact:"
}


async function fetchCatData() {

    try{
        const response = await fetch(`https://api.thecatapi.com/v1/images/search`);

        const data = await response.json();
        const cutePic = data[0].url;
        const imgElement2 = document.getElementById("cutePic");

        imgElement2.src = cutePic;


        dogFact.innerHTML = ""

        fetch(`https://catfact.ninja/fact?max_length=140`)
        .then(response => response.json())
        .then(data => {catFact.innerHTML += `${data.fact}`});

    }
    catch(error){
        console.error(error);
    }

    document.getElementById("cdfact").innerHTML = "Cat fact:"
}