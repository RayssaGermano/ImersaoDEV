
//Declarando Jogadores
    var rayssa = {
        nome: "Rayssa",
        vitorias: 2,
        empates: 5,
        derrotas: 1,
        pontos: 11
        }  

    var joao = {
        nome: "João",
        vitorias: 3,
        empates: 5,
        derrotas: 2,
        pontos: 0
    }    

    var nathan = {
        nome: "Nathan",
        vitorias: 4,
        empates: 5,
        derrotas: 3,
        pontos: 0
    }

    var lucas = {
        nome: "Lucas",
        vitorias: 3,
        empates: 5,
        derrotas: 2,
        pontos: 0
    }

    var daniel = {
        nome: "Daniel",
        vitorias: 3,
        empates: 5,
        derrotas: 2,
        pontos: 0
    }

    var igor = {
        nome: "Igor",
        vitorias: 3,
        empates: 5,
        derrotas: 4,
        pontos: 0
    }

    rayssa.pontos = calculaPontos(rayssa)
    joao.pontos = calculaPontos(joao)
    nathan.pontos = calculaPontos(nathan)
    lucas.pontos = calculaPontos(lucas)
    daniel.pontos = calculaPontos(daniel)
    igor.pontos = calculaPontos(igor)

//Função que recebe o Objeto jogador e retorno o número de pontos do respectivo jogador

    function calculaPontos(jogador){
        var pontos = (jogador.vitorias * 3) + jogador.empates
        return pontos
    }

//Declarando variável que recebe uma lista de jogadores

    var jogadores = [rayssa, joao, nathan, lucas, daniel, igor]

//Chamando a tela incial carregando os jogadores com suas variáveis iniciais

    exibirJogadoresNaTela(jogadores)

//Funcão que lista todos os jogadores na tela e seus respectivos botões    
//<tr> -- table row e <td> -- table data

    function exibirJogadoresNaTela(jogadores){
        var html = ""
        for (var i = 0; i < jogadores.length; i++){
            html += "<tr><td>" + jogadores[i].nome + "</td>"
            html += "<td>" + jogadores[i].vitorias + "</td>"
            html += "<td>" + jogadores[i].empates + "</td>"
            html += "<td>" + jogadores[i].derrotas + "</td>"
            html += "<td>" + jogadores[i].pontos + "</td>"
            html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
            html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
            html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
        }

        var tabelaJogadores = document.getElementById("tabelaJogadores")
        tabelaJogadores.innerHTML = html
    }

//Chamada para a função de Adicionar vitória deve ser o mesmo nome da função no HTML

    function adicionarVitoria(i){
        var jogador = jogadores[i]
        jogador.vitorias++ 
        jogador.pontos = calculaPontos(jogador)
        exibirJogadoresNaTela(jogadores)
    }

    function adicionarEmpate(i){
        var jogador = jogadores[i]
        jogador.empates++
        jogador.pontos = calculaPontos(jogador)
        exibirJogadoresNaTela(jogadores)
    }

    function adicionarDerrota(i){
        var jogador = jogadores[i]
        jogador.derrotas++
        exibirJogadoresNaTela(jogadores)
    }
