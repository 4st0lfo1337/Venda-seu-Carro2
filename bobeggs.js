function salvarCarros(event) {
    event.preventDefault();

    let titulo = document.getElementById('title').value;
    let preco = document.getElementById('preco').value;
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked');
    let cambio = cambioSelecionado ? cambioSelecionado.value : "Não informado";

    let lista = document.getElementById('listarCarros');

    let card = document.createElement('div');

    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.marginBottom = "10px";

    lista.appendChild(card);

    let carro = {
        titulo: titulo.value,
        preco: preco.value,
        marca: marca.value,
        modelo: modelo.value,
        cambio
    };

    let carros = JSON.parse(localStorage.getItem("carros")) || [];
    carros.push(carro);
    localStorage.setItem("carros", JSON.stringify(carros));

    adicionarNaTela(carro);

    document.querySelector("form").reset();
}