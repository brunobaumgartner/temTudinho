function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('cep').value = ("");
}

let resultado = document.getElementById("resultado");

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        resultado.innerHTML = `<p>${conteudo.logradouro}, <br> ${conteudo.bairro}, ${conteudo.localidade}, ${conteudo.uf}</p>`
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

let inputCep = document.getElementById("cep");
let valorCep = inputCep.value;

function pesquisacep(valorCep) {

    console.log("oi")

    //Nova variável "cep" somente com dígitos.
    var cep = valorCep.replace(/\D/g, "");

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};