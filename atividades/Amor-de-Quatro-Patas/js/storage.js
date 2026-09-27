// ==========================================
// ARMAZENAMENTO DOS CADASTROS
// ==========================================

// Recupera os cadastros que já estão salvos
function buscarCadastros() {

    const dadosSalvos =
        localStorage.getItem("cadastrosAdocao");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return [];
}


// Salva um novo cadastro
function salvarCadastro(cadastro) {

    // Busca os cadastros anteriores
    const cadastros = buscarCadastros();

    // Adiciona o novo cadastro na lista
    cadastros.push(cadastro);

    // Converte para string e salva no navegador
    localStorage.setItem(
        "cadastrosAdocao",
        JSON.stringify(cadastros)
    );
}

// ==========================================
// MOSTRAR HISTÓRICO DE CADASTROS
// ==========================================

function mostrarCadastros() {

    const lista = document.getElementById("historico-cadastros");

    // Se não estiver na página de cadastro, encerra a função
    if (!lista) {
        return;
    }

    // Recupera os dados salvos no localStorage
    const cadastros = buscarCadastros();

    // Limpa a lista antes de montar novamente
    lista.innerHTML = "";


    // Caso ainda não exista nenhum cadastro
    if (cadastros.length === 0) {

        lista.innerHTML = `
            <p>Nenhum cadastro enviado ainda.</p>
        `;

        return;
    }


    // Cria um item para cada cadastro salvo
    cadastros.forEach(function(cadastro) {

    const nomesAnimais = {
        gordao: "Gordão",
        pituxa: "Pituxa",
        branquela: "Branquela",
        mel: "Mel",
        bob: "Bob",
        apolo: "Apolo"
    };

    const nomeAnimal =
        nomesAnimais[cadastro.cao] || cadastro.cao;

    const item = document.createElement("article");

    item.classList.add("cadastro-salvo");

    item.innerHTML = `
        <h3>${cadastro.nome}</h3>

        <p>
            <strong>Animal escolhido:</strong>
            ${nomeAnimal}
        </p>

        <p>
            <strong>Data do cadastro:</strong>
            ${cadastro.dataCadastro}
        </p>
    `;

    lista.appendChild(item);
});
}