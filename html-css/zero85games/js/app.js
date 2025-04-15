
document.getElementById("btnBuscarCep").addEventListener("click", (e) => {
    e.preventDefault(); 
    const cep = document.getElementById("cep").value;
    buscarCep(cep);
});

function buscarCep(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

}