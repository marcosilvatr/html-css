const app = document.getElementById("app");

// Guarda todo o conteúdo original do index
const paginaInicial = app.innerHTML;

const paginaProjetos = `

    <!-- APRESENTAÇÃO -->
    <section id="projetos">

        <h2>Nossos projetos</h2>

        <p>
            Nossos projetos têm como objetivo melhorar a qualidade de vida
            dos animais e incentivar a adoção responsável.
        </p>

    </section>


    <!-- DOAÇÕES -->
    <section id="doacoes">

        <h2>Campanhas de doação</h2>

        <article>

            <h3>Campanha Ração para Todos</h3>

            <span class="badge badge-adocao">
                Campanha ativa
            </span>

            <p>
                Arrecadamos ração para ajudar na alimentação dos animais
                que estão sob os cuidados da ONG.
            </p>

            <div class="alert alert-info">
                <strong>Informação:</strong>
                Doações de ração podem ser entregues diretamente à ONG.
            </div>

        </article>


        <article>

            <h3>Campanha Cuidados Veterinários</h3>

            <span class="badge badge-vacinado">
                Saúde animal
            </span>

            <p>
                As doações também ajudam a custear consultas,
                medicamentos, vacinas e outros cuidados veterinários.
            </p>

            <div class="alert alert-atencao">
                <strong>Atenção:</strong>
                Os cuidados veterinários são importantes para garantir
                a saúde dos animais.
            </div>

        </article>


        <article>

            <h3>Como realizar uma doação</h3>

            <p>
                Você pode contribuir através de doações de ração,
                medicamentos ou valores que serão utilizados nas
                necessidades da ONG.
            </p>

            <div class="alert alert-sucesso">
                <strong>Obrigado!</strong>
                Sua contribuição ajuda diretamente os animais.
            </div>

        </article>

    </section>


    <!-- VOLUNTARIADO -->
    <section id="voluntariado">

        <h2>Voluntariado</h2>

        <article>

            <h3>Atividades voluntárias</h3>

            <p>
                Os voluntários podem ajudar nos cuidados dos animais,
                eventos de adoção, divulgação e outras atividades.
            </p>

            <span class="badge badge-adocao">
                Seja voluntário
            </span>

        </article>


        <article>

            <h3>Como se tornar voluntário</h3>

            <p>
                Para participar, entre em contato com nossa equipe
                e informe seu interesse em ajudar.
            </p>

        </article>

    </section>


    <!-- OUTRAS FORMAS -->
    <section id="ajudar">

        <h2>Outras formas de ajudar</h2>

        <ul>
            <li>Compartilhar os animais disponíveis.</li>
            <li>Participar de eventos.</li>
            <li>Realizar doações.</li>
            <li>Ser voluntário.</li>
        </ul>

    </section>


    <!-- RESULTADOS -->
    <section id="resultados">

        <h2>Resultados</h2>

        <p>
            Com a ajuda de doadores e voluntários, conseguimos oferecer
            melhores condições para os animais e aumentar as oportunidades
            de adoção.
        </p>

    </section>


    <!-- COMPONENTES DE FEEDBACK -->
    <section id="feedback">

        <h2>Componentes de feedback</h2>

        <p>
            Exemplos dos componentes utilizados no projeto:
        </p>

        <h3>Alertas</h3>

        <div class="alert alert-info">
            <strong>Informação:</strong>
            Esta é uma mensagem informativa.
        </div>

        <div class="alert alert-sucesso">
            <strong>Sucesso:</strong>
            A ação foi realizada com sucesso.
        </div>

        <div class="alert alert-atencao">
            <strong>Atenção:</strong>
            Confira as informações antes de continuar.
        </div>


        <h3>Badges</h3>

        <span class="badge badge-adocao">
            Disponível
        </span>

        <span class="badge badge-idade">
            2 anos
        </span>

        <span class="badge badge-vacinado">
            Vacinado
        </span>


        <h3>Modal</h3>

        <button
            type="button"
            class="botao-modal"
            id="abrir-modal"
        >
            Abrir modal
        </button>

    </section>


    <!-- TOAST -->
    <div class="toast" role="status">
        <strong>Notificação</strong><br>
        Projeto carregado com sucesso!
    </div>


    <!-- MODAL -->
    <dialog id="modal-adocao" class="modal-dialog">

        <div class="modal-conteudo">

            <h2>Processo de adoção</h2>

            <p>
                Para iniciar o processo de adoção, preencha o formulário
                com seus dados e escolha o animal que deseja adotar.
            </p>

            <button type="button" id="fechar-modal">
                Fechar
            </button>

            <a href="#/cadastro" class="modal-link">
                Ir para o cadastro
            </a>

        </div>

    </dialog>

`;


const paginaCadastro = `

    <section>

        <h2>Formulário de adoção</h2>

        <div class="alert alert-info">
            <strong>Informação:</strong>
            Preencha todos os campos obrigatórios antes de enviar
            o formulário.
        </div>

        <form id="form-adocao">

            <fieldset>

                <legend>Dados pessoais</legend>

                <label for="nome">Nome completo:</label>

                <input
                    type="text"
                    id="nome"
                    name="nome"
                    minlength="3"
                    required
                >


                <label for="email">E-mail:</label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                >


                <label for="cpf">CPF:</label>

                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                    placeholder="000.000.000-00"
                    required
                >


                <label for="telefone">Telefone:</label>

                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                    placeholder="(11) 99999-9999"
                    required
                >


                <label for="nascimento">
                    Data de nascimento:
                </label>

                <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    required
                >


                <label for="idade">Idade:</label>

                <input
                    type="number"
                    id="idade"
                    name="idade"
                    min="18"
                    max="100"
                    required
                >

            </fieldset>


            <fieldset>

                <legend>Endereço</legend>

                <label for="cep">CEP:</label>

                <input
                    type="text"
                    id="cep"
                    name="cep"
                    pattern="[0-9]{5}-[0-9]{3}"
                    placeholder="00000-000"
                    required
                >


                <label for="endereco">Endereço:</label>

                <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    required
                >


                <label for="numero">Número:</label>

                <input
                    type="number"
                    id="numero"
                    name="numero"
                    min="1"
                    required
                >


                <label for="cidade">Cidade:</label>

                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                >


                <label for="estado">Estado:</label>

                <select id="estado" name="estado" required>

                    <option value="">Selecione</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PR">Paraná</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="RS">Rio Grande do Sul</option>

                </select>

            </fieldset>


            <fieldset>

                <legend>Informações sobre a adoção</legend>

                <label for="cao">Escolha o cão:</label>

                <select id="cao" name="cao" required>

                    <option value="">Selecione um cão</option>
                    <option value="gordao">Gordão</option>
                    <option value="pituxa">Pituxa</option>
                    <option value="branquela">Branquela</option>
                    <option value="mel">Mel</option>
                    <option value="bob">Bob</option>
                    <option value="apolo">Apolo</option>

                </select>


                <p>Você possui outros animais?</p>

                <label class="opcao">

                    <input
                        type="radio"
                        name="outros_animais"
                        value="sim"
                        required
                    >

                    Sim

                </label>


                <label class="opcao">

                    <input
                        type="radio"
                        name="outros_animais"
                        value="nao"
                    >

                    Não

                </label>


                <p>Tipo de residência:</p>

                <label class="opcao">

                    <input
                        type="radio"
                        name="residencia"
                        value="casa"
                        required
                    >

                    Casa

                </label>


                <label class="opcao">

                    <input
                        type="radio"
                        name="residencia"
                        value="apartamento"
                    >

                    Apartamento

                </label>


                <label for="motivo">
                    Por que deseja adotar?
                </label>

                <textarea
                    id="motivo"
                    name="motivo"
                    required
                ></textarea>

            </fieldset>


            <fieldset>

                <legend>Responsabilidade pela adoção</legend>

                <label class="opcao">

                    <input
                        type="checkbox"
                        name="responsabilidade"
                        required
                    >

                    Confirmo que estou de acordo com as
                    responsabilidades de uma adoção.

                </label>


                <label class="opcao">

                    <input
                        type="checkbox"
                        name="contato"
                        required
                    >

                    Autorizo a equipe da ONG a entrar em contato
                    comigo sobre o processo de adoção.

                </label>

            </fieldset>


            <div class="alert alert-atencao">

                <strong>Atenção:</strong>
                Confira seus dados antes de enviar o formulário.

            </div>


            <input
                type="submit"
                value="Enviar cadastro"
            >

            <input
                type="reset"
                value="Limpar formulário"
            >

        </form>


        <div
            id="mensagem-sucesso"
            class="alert alert-sucesso mensagem-sucesso"
        >

            <strong>Formulário enviado com sucesso!</strong><br>

            Obrigado por preencher o cadastro.
            Nossa equipe entrará em contato.

        </div>

    </section>



    <!-- HISTÓRICO DOS CADASTROS -->

    <section id="historico">

    <h2>Cadastros enviados</h2>

    <p>
        Cadastros de adoção salvos neste navegador:
    </p>

    <div id="historico-cadastros"></div>

</section>


    <div class="toast" role="status">

        <strong>Formulário</strong><br>

        Preencha os campos obrigatórios para continuar.

    </div>

`;


const rotas = {
    "/": paginaInicial,
    "/projetos": paginaProjetos,
    "/cadastro": paginaCadastro
};



function carregarPagina() {

    const rota = window.location.hash.replace("#", "") || "/";

    if (rotas[rota]) {
        app.innerHTML = rotas[rota];
    } else {
        app.innerHTML = `
            <section>
                <h2>Página não encontrada</h2>
                <p>O conteúdo solicitado não foi encontrado.</p>
            </section>
        `;
    }

    carregarAnimais();

    configurarFormulario();
    
    mostrarCadastros();

    configurarEventos();

    atualizarMenuAtivo();
}


// FUNÇÃO DO MENU ATIVO
function atualizarMenuAtivo() {

    const rotaAtual =
        window.location.hash.replace("#", "") || "/";

    const links = document.querySelectorAll("nav a");

    links.forEach(function(link) {

        link.classList.remove("ativo");

        const href = link.getAttribute("href");

        // Ignora links que não são rotas da SPA
        if (!href.startsWith("#/")) {
            return;
        }

        const rotaLink = href.replace("#", "");

        if (rotaLink === rotaAtual) {
            link.classList.add("ativo");
        }

    });
}



function configurarEventos() {


    // MODAL

    const abrirModal =
        document.getElementById("abrir-modal");

    const fecharModal =
        document.getElementById("fechar-modal");

    const modal =
        document.getElementById("modal-adocao");


    if (abrirModal && modal) {

        abrirModal.addEventListener(
            "click",
            function() {

                modal.showModal();

            }
        );
    }


    if (fecharModal && modal) {

        fecharModal.addEventListener(
            "click",
            function() {

                modal.close();

            }
        );
    }

}

window.addEventListener(
    "hashchange",
    carregarPagina
);

carregarPagina();