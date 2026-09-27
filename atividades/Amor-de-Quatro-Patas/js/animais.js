// ==========================================
// DADOS DOS ANIMAIS
// ==========================================

const animais = [

    {
        nome: "Gordão",
        idade: "2 anos",
        imagem: "../imagens/gordao.jpeg",
        vacinado: "Vacinado",
        descricao: "Gordão é um cão carinhoso e brincalhão que está procurando uma família para chamar de sua."
    },

    {
        nome: "Branquela",
        idade: "3 anos",
        imagem: "../imagens/branquela.jpeg",
        vacinado: "Vacinada",
        descricao: "Branquela é dócil e gosta de brincar. Está esperando por uma família responsável."
    },

    {
        nome: "Apolo",
        idade: "1 ano",
        imagem: "../imagens/apolo.jpeg",
        vacinado: "Vacinado",
        descricao: "Apolo é muito ativo e gosta de brincar e correr."
    },

    {
        nome: "Pituxa",
        idade: "4 anos",
        imagem: "../imagens/pituxa.jpeg",
        vacinado: "Vacinada",
        descricao: "Pituxa é tranquila e muito carinhosa com as pessoas."
    },

    {
        nome: "Mel",
        idade: "2 anos",
        imagem: "../imagens/mel.jpeg",
        vacinado: "Vacinada",
        descricao: "Mel é carinhosa e está procurando um lar cheio de amor."
    }

];


// ==========================================
// FUNÇÃO QUE CRIA OS CARDS DOS ANIMAIS
// ==========================================

function carregarAnimais() {

    // Procura no HTML o local onde os animais serão exibidos
    const listaAnimais = document.getElementById("lista-animais");


    // Se o elemento não existir na página atual,
    // a função é encerrada
    if (!listaAnimais) {
        return;
    }


    // Percorre o array de animais e cria um card
    // para cada animal cadastrado
    const cards = animais.map(function(animal) {

        return `
            <article>

                <h3>${animal.nome}</h3>


                <img
                    src="${animal.imagem}"
                    alt="${animal.nome}, animal disponível para adoção"
                >


                <span class="badge badge-adocao">
                    Disponível para adoção
                </span>


                <span class="badge badge-idade">
                    ${animal.idade}
                </span>


                <span class="badge badge-vacinado">
                    ${animal.vacinado}
                </span>


                <p>
                    <strong>Idade:</strong>
                    ${animal.idade}
                </p>


                <p>
                    ${animal.descricao}
                </p>

            </article>
        `;

    }).join("");


    // Insere todos os cards criados dentro da página
    listaAnimais.innerHTML = cards;

}