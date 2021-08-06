
     var missfortune = {
        nome:"Miss Fortune",
        imagem: "https://lol-skin.weblog.vc/img/wallpaper/tiles/lol-new-champion-MissFortune_0.jpg?1615915457",
        atributos:{
        ataque:80,
        defesa:90,
        magia:0
      }
    }

    var tristana = {
        nome:"Tristana",
        imagem:"https://runes.lol/image/generated/championtiles/Tristana.jpg",
        atributos:{
        ataque:50,
        defesa:60,
        magia:70
       }
    }

    var darius = {
        nome:"Darius",
        imagem: "https://static.wikia.nocookie.net/league-of-legends-champs-skins/images/9/99/Darius_loading_screen_0.jpg/revision/latest/smart/width/200/height/200?cb=20170311182437&path-prefix=es",
        atributos:{
        ataque:90,
        defesa:70,
        magia:5
      }
    }

    var annie = {
        nome:"Annie",
        imagem: "https://static.senpai.gg/lol/img/champion/tiles/Annie_0.jpg",
        atributos:{
        ataque:60,
        defesa:50,
        magia:10
      }
    }

    var leesin = {
        nome:"Lee Sin",
        imagem: "https://lol-skin.weblog.vc/img/wallpaper/tiles/lol-new-champion-LeeSin_0.jpg?1615915457",
        atributos:{
        ataque:60,
        defesa:40,
        magia:10
      }
    }

    var keld = {
        nome:"Keld",
        imagem: "http://pm1.narvii.com/6392/643bc78a48e45093876568db8761817aacfc211c_00.jpg",
        atributos:{
        ataque:60,
        defesa:50,
        magia:15
      }
    }


    var cartas = [missfortune, tristana, darius, annie, leesin, keld]


    function sortearCarta(){
        var numeroCartaMaquina = parseInt(Math.random() * 6)
        cartaMaquina = cartas[numeroCartaMaquina]
       

        var numeroCartajogador = parseInt(Math.random() * 6)
        while (numeroCartajogador == numeroCartaMaquina){
            numeroCartajogador = parseInt(Math.random() * 6)
        }

        cartaJogador = cartas[numeroCartajogador]

        document.getElementById('btnSortear').disabled = true 
        document.getElementById('btnJogar').disabled = false
        // exibirOpcoes()
        exibeCartaJogador()
    }

    function exibeCartaJogador(){
        var divCartaJogador = document.getElementById("carta-jogador")
        var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

        divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
        var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

        var opcoesTexto = ""

        for (var atributo in cartaJogador.atributos){
            opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " +cartaJogador.atributos[atributo] + "<br>";
        }

        //opcoes.innerHTML = opcoesTexto

        var html = "<div id='opcoes' class='carta-status'>"

        divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+"</div>"
    }

//função que verifica e captura qual atributo foi selecionado no radio button
    function obtemAtributoSelecionado(){
        var radioAtributo = document.getElementsByName('atributo')
        for (var i = 0; i < radioAtributo.length; i++){
            if (radioAtributo[i].checked){
                return radioAtributo[i].value 
            }
        }
    }

    function jogar(){
        var divResultado = document.getElementById('resultado')
        var atributoSelecionado = obtemAtributoSelecionado()

        if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
            htmlResultado = '<img src="https://www.legendsbr.com/wp-content/uploads/2014/10/victory.png" >'
        }
        else if (cartaJogador.atributos[atributoSelecionado]< cartaMaquina.atributos[atributoSelecionado]){
             htmlResultado = '<img src="http://40.media.tumblr.com/fe76a4edc1d51b0a041ec8ee101e5fa0/tumblr_nea4i9gpfB1qgrdiqo1_250.png" >'
        }
        else {htmlResultado = '<p class="resultado-final">Empatou</p>'}

        divResultado.innerHTML = htmlResultado;
        exibeCartaMaquina();
    }

    function exibeCartaMaquina(){
        var divCartaMaquina = document.getElementById("carta-maquina")
        var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

        divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
        var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

        var opcoesTexto = ""

        for (var atributo in cartaMaquina.atributos){
            opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
        }

        //opcoes.innerHTML = opcoesTexto

        var html = "<div id='opcoes' class='carta-status'>"

        divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+"</div>"

    }

    function proximaRodada(){
        var divCartas = document.getElementById ('cartas')

        divCartas.innerHTML = `<div class="wrapper">
                <div class="duasCartas">
                  <div class="cartaUm">
                    <h2>Sua carta:</h2>
                    <div id="carta-jogador">
                        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">
                      </div>
                    </div>
                    <h3></h3>
                    <div id="resultado">
                    
                    </div>
                    <div class="cartaDois">
                      <h2>Carta oponente:</h2>
                      <div id="carta-maquina" class="carta">
                        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">
                      </div>
                    </div>
                </div>
              </div>`    
            
        document.getElementById('btnSortear').disabled = false
        document.getElementById('btnJogar').disabled = true
        document.getElementById('btnProximaRodada').disabled = true 
    
        var divResultado = document.getElementById('resultado')
        divResultado.innerHTML = "" 
    }
