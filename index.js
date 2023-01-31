const btnEl = document.getElementById("btn");
const parEl = document.getElementById("para");


const apiKey = "CJpWq1LiQvkx4RqZJ282Og==dAQbi1y70h2dbsHG";

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method : 'GET',
    headers : {
        'X-Api-Key': apiKey,
    }
}

async function getjoke(){
    parEl.innerText = "updating...";
    btnEl.innerText = "Loading..."
    btnEl.disabled = true;
    const data = await fetch(apiURL,options);
    const xyz = await data.json();
    parEl.innerText = xyz[0].joke;
    console.log(xyz[0].joke);
    btnEl.innerText = "Tell me a joke";
    btnEl.disabled = false;
}


btnEl.addEventListener("click",getjoke);