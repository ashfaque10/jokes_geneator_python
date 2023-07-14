const btnEl=document.getElementById('but');
const joke1=document.getElementById('joke')

const apikey="JAeen6EaIgbZyGTgRLF5kQ==ghlHvBJrthV0StcD"

const options={
    method:"GET",
    headers:{
        "X-Api-Key":apikey
    },
};
const apiurl="https://api.api-ninjas.com/v1/jokes?limit=1"

async function getjoke(){
    joke.innerText='Updating..'
    btnEl.disabled=true;
    btnEl.innerText='Loading..'
    const response= await fetch(apiurl,options)
    const data= await response.json()

    btnEl.disabled=false;
    btnEl.innerText='Tell me a joke'


    joke1.innerText=data[0].joke
}
btnEl.addEventListener('click',getjoke)