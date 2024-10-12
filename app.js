// search-button
// search-input

const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b47e770fbfmshd35d96134ca39f5p146934jsn79decb6ff047',
            'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch(`https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`, options)
    
        .then((response)=> response.json())
        .then((response) =>{
            console.log(response)
            wordheading.innerHTML = "The meaning of: " + response.word.toUpperCase();
            definition.innerHTML = response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.")
        })
        .catch(err=> console.error(err))
}
document.querySelector("#searchbtn").addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})
