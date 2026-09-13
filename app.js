function pesquisar() {
    // Quando o botão de pesquisa for clicado, essa função será executada.

    // Obtém a referência da seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado pelo usuário no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Converte o valor do campo de pesquisa para letras minúsculas, para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();

    // Cria uma string vazia que vai armazenar os resultados da pesquisa
    let resultados = "";
    let nome = ""; // Variável para armazenar o nome do baterista atual, em cada iteração
    let generoMusical = ""; // Variável para armazenar o gênero musical do baterista atual

    // Variável que controla se algum resultado foi encontrado
    let encontrado = false;

    // Loop que percorre o array 'dados', onde estão os detalhes de cada baterista
    for (let dado of dados) {
        nome = dado.nome.toLowerCase(); // Converte o nome do baterista para minúsculo
        generoMusical = dado.generoMusical.toLowerCase(); // Converte o gênero musical para minúsculo

        // Verifica se o nome ou o gênero musical incluem o valor da pesquisa (busca parcial)
        if (nome.includes(campoPesquisa) || generoMusical.includes(campoPesquisa)) {
            // A cada iteração, a string 'resultados' vai sendo preenchida com o HTML para exibir os dados do baterista
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.instagram}" target="_blank">${dado.nome}</a> <!-- Nome do baterista como link para Instagram -->
                    </h2> 
                    <p class="descricao-meta">Nacionalidade: ${dado.nacionalidade}</p> <!-- Nacionalidade do baterista -->
                    <p class="descricao-meta">Idade: ${dado.idade}</p> <!-- Idade do baterista -->
                    <p class="descricao-meta">Gênero Musical: ${dado.generoMusical}</p> <!-- Gênero musical em que o baterista atua -->
                    <p class="descricao-meta">Descrição: ${dado.descricao}</p> <!-- Descrição do baterista, se houver -->
                    <a href="${dado.link}" target="_blank">Assista a uma performance</a> <!-- Link para assistir à performance do baterista -->
                </div>
            `;
            encontrado = true; // Marca que pelo menos um resultado foi encontrado
        }
    }

    // Se nenhum resultado for encontrado, exibe a mensagem de "não encontrado" com estilo em negrito e cor vermelha
    if (!encontrado) {
        resultados = `<p style="color: red; font-size: 1.2rem; text-align: center; font-weight: bold;">Nenhum resultado encontrado.</p>`;
    }

    // Após o loop, insere a string 'resultados' dentro da seção de resultados
    section.innerHTML = resultados;
}
