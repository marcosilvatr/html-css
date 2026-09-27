// ==========================================
// VALIDAÇÃO DO FORMULÁRIO DE ADOÇÃO
// ==========================================

function configurarFormulario() {

    const formulario = document.getElementById("form-adocao");

    // Se não estivermos na página de cadastro,
    // não existe formulário e a função é encerrada.
    if (!formulario) {
        return;
    }


    // ------------------------------------------
    // FUNÇÃO PARA MOSTRAR ERRO
    // ------------------------------------------

    function mostrarErro(campo, mensagem) {

        campo.classList.add("campo-erro");

        let mensagemErro = campo.parentElement.querySelector(
            `[data-erro="${campo.name}"]`
        );

        if (!mensagemErro) {

            mensagemErro = document.createElement("small");

            mensagemErro.classList.add("mensagem-erro");

            mensagemErro.dataset.erro = campo.name;

            campo.insertAdjacentElement(
                "afterend",
                mensagemErro
            );
        }

        mensagemErro.textContent = mensagem;
    }


    // ------------------------------------------
    // FUNÇÃO PARA REMOVER ERRO
    // ------------------------------------------

    function removerErro(campo) {

        campo.classList.remove("campo-erro");

        const mensagemErro = campo.parentElement.querySelector(
            `[data-erro="${campo.name}"]`
        );

        if (mensagemErro) {
            mensagemErro.remove();
        }
    }


    // ------------------------------------------
    // VALIDAÇÃO DOS CAMPOS
    // ------------------------------------------

    function validarCampo(campo) {

        const valor = campo.value.trim();


        // CAMPO OBRIGATÓRIO

        if (campo.hasAttribute("required") && valor === "") {

            mostrarErro(
                campo,
                "Este campo precisa ser preenchido."
            );

            return false;
        }


        // NOME

        if (campo.name === "nome" && valor.length < 3) {

            mostrarErro(
                campo,
                "Digite um nome com pelo menos 3 caracteres."
            );

            return false;
        }


        // CPF

        // ------------------------------------------
// VALIDAÇÃO DO CPF
// ------------------------------------------

function validarCPF(cpf) {

    // Remove pontos e traço
    cpf = cpf.replace(/\D/g, "");

    // O CPF precisa ter 11 números
    if (cpf.length !== 11) {
        return false;
    }

    // Não permite CPF com todos os números iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }


    // Primeiro dígito verificador
    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let primeiroDigito = (soma * 10) % 11;

    if (primeiroDigito === 10) {
        primeiroDigito = 0;
    }

    if (primeiroDigito !== Number(cpf[9])) {
        return false;
    }


    // Segundo dígito verificador
    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    let segundoDigito = (soma * 10) % 11;

    if (segundoDigito === 10) {
        segundoDigito = 0;
    }

    if (segundoDigito !== Number(cpf[10])) {
        return false;
    }


    return true;
}

// ------------------------------------------
// CPF
// ------------------------------------------

if (campo.name === "cpf") {

    // Remove pontos e traço para contar somente os números
    const numerosCPF = valor.replace(/\D/g, "");


    // Verifica se o CPF está incompleto
    if (numerosCPF.length < 11) {

        mostrarErro(
            campo,
            "O CPF precisa ter 11 números."
        );

        return false;
    }


    // Verifica se o CPF realmente é válido
    if (!validarCPF(valor)) {

        mostrarErro(
            campo,
            "Informe um CPF válido."
        );

        return false;
    }


    // Se estiver correto, remove qualquer erro anterior
    removerErro(campo);
}

// ------------------------------------------
// MÁSCARA AUTOMÁTICA DO CPF
// ------------------------------------------

if (campo.name === "cpf") {

    // Deixa somente os números
    let valor = campo.value.replace(/\D/g, "");

    // Limita a 11 números
    valor = valor.substring(0, 11);

    // Primeiro ponto
    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    // Segundo ponto
    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    // Traço
    valor = valor.replace(
        /(\d{3})(\d{1,2})$/,
        "$1-$2"
    );

    campo.value = valor;
}


        // TELEFONE

        if (campo.name === "telefone") {

            const formatoTelefone =
                /^\(\d{2}\) \d{5}-\d{4}$/;

            if (!formatoTelefone.test(valor)) {

                mostrarErro(
                    campo,
                    "Digite o telefone no formato (11) 99999-9999."
                );

                return false;
            }
        }


        // CEP

        if (campo.name === "cep") {

            const formatoCEP =
                /^\d{5}-\d{3}$/;

            if (!formatoCEP.test(valor)) {

                mostrarErro(
                    campo,
                    "Digite o CEP no formato 00000-000."
                );

                return false;
            }
        }


        // IDADE

        if (campo.name === "idade") {

            const idade = Number(valor);

            if (idade < 18 || idade > 100) {

                mostrarErro(
                    campo,
                    "A idade deve estar entre 18 e 100 anos."
                );

                return false;
            }
        }


        removerErro(campo);

        return true;
    }


    // ------------------------------------------
    // VALIDAÇÃO ENQUANTO O USUÁRIO DIGITA
    // ------------------------------------------

    const campos = formulario.querySelectorAll(
        "input, select, textarea"
    );

    campos.forEach(function(campo) {

    campo.addEventListener("input", function() {

        // CPF
        if (campo.name === "cpf") {

            let valor = campo.value.replace(/\D/g, "");

            valor = valor.substring(0, 11);

            valor = valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

            valor = valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

            valor = valor.replace(
                /(\d{3})(\d{1,2})$/,
                "$1-$2"
            );

            campo.value = valor;
        }


        // TELEFONE
        if (campo.name === "telefone") {

            let valor = campo.value.replace(/\D/g, "");

            valor = valor.substring(0, 11);

            valor = valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

            campo.value = valor;
        }


        // CEP
        if (campo.name === "cep") {

            let valor = campo.value.replace(/\D/g, "");

            valor = valor.substring(0, 8);

            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

            campo.value = valor;
        }


        // Se o campo já tinha apresentado um erro,
        // remove enquanto o usuário está corrigindo.
        removerErro(campo);

    });


    // Valida quando a pessoa termina de preencher
    // e sai do campo.
    campo.addEventListener("blur", function() {

        validarCampo(campo);

    });

});


    // ------------------------------------------
    // ENVIO DO FORMULÁRIO
    // ------------------------------------------

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        let formularioValido = true;


        campos.forEach(function(campo) {

            if (!validarCampo(campo)) {
                formularioValido = false;
            }

        });


        if (!formularioValido) {
            return;
        }

        // ------------------------------------------
// DADOS QUE SERÃO SALVOS
// ------------------------------------------

const cadastro = {

    nome: formulario.nome.value,
    email: formulario.email.value,
    telefone: formulario.telefone.value,

    endereco: formulario.endereco.value,
    numero: formulario.numero.value,
    cidade: formulario.cidade.value,
    estado: formulario.estado.value,

    cao: formulario.cao.value,

    outrosAnimais:
        formulario.outros_animais.value,

    residencia:
        formulario.residencia.value,

    motivo:
        formulario.motivo.value,

    dataCadastro:
        new Date().toLocaleString()
};


// Salva o cadastro no localStorage
salvarCadastro(cadastro);

mostrarCadastros();




        const mensagemSucesso =
            document.getElementById("mensagem-sucesso");


        if (mensagemSucesso) {

            mensagemSucesso.style.display = "block";

            mensagemSucesso.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }


        formulario.reset();

    });

}