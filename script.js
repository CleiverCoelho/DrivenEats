let precoPrato;
let precoBebida;
let precoSobremesa;

let prato;
let bebida;
let sobremesa;

function verde(opcao, produto, ioordem){    
    let tagCheckmark;
    let bordaCheck;
    const checkPrato = produto == '.prato';
    const checkBebida = produto == '.bebida';
    const checkSobremesa = produto == '.sobremesa';

    // let tagSelecionado;
    // Procurar se existem ion-icons ligados
    if(checkPrato){
        // Procurar se existem bordas check ligadas
        bordaCheck = document.querySelector(".prato .check");
        if(bordaCheck != null){
            bordaCheck.classList.remove("check");
            bordaCheck.classList.add("borda-transparente");
        }
    }else if(checkBebida){
        // Procurar se existem bordas check ligadas
        bordaCheck = document.querySelector(".bebida .check");
        if(bordaCheck != null){
            bordaCheck.classList.remove("check");
            bordaCheck.classList.add("borda-transparente");
        }
    }else if(checkSobremesa){
        // Procurar se existem bordas check ligadas
        bordaCheck = document.querySelector(".sobremesa .check");
        if(bordaCheck != null){
            bordaCheck.classList.remove("check");
            bordaCheck.classList.add("borda-transparente");
        }
    }


    if(checkPrato){
        // tagSelecionado = document.querySelector(".prato ion-icon")
        if(ioordem == '.io1'){
            tagCheckmark = document.querySelector(".prato .io1.selecionado");
            precoPrato = document.querySelector(".prato .preco.io1").innerHTML;
            // Armazenar o nome da bebida escolhido
            prato = document.querySelector(".prato .imagem.io1 p").innerHTML;
        }else if(ioordem == '.io2'){
            tagCheckmark = document.querySelector(".prato .io2.selecionado");
            precoPrato = document.querySelector(".prato .preco.io2").innerHTML;
            // Armazenar o nome da bebida escolhido
            prato = document.querySelector(".prato .imagem.io2 p").innerHTML;
        }else if(ioordem == '.io3'){
            tagCheckmark = document.querySelector(".prato .io3.selecionado");
            precoPrato = document.querySelector(".prato .preco.io3").innerHTML;
            // Armazenar o nome da bebida escolhido
            prato = document.querySelector(".prato .imagem.io3 p").innerHTML;
        }
        precoPrato = trataValores(precoPrato);
    }else if(checkBebida){
        // tagSelecionado = document.querySelector(".prato ion-icon")
        if(ioordem == '.io1'){
            tagCheckmark = document.querySelector(".bebida .io1.selecionado");
            // Armazena o preco da bebida escolhida
            precoBebida = document.querySelector(".bebida .preco.io1").innerHTML;
            // Armazenar o nome da bebida escolhido
            bebida = document.querySelector(".bebida .imagem.io1 p").innerHTML;
        }else if(ioordem == '.io2'){
            tagCheckmark = document.querySelector(".bebida .io2.selecionado");
            precoBebida = document.querySelector(".bebida .preco.io2").innerHTML;
            // Armazenar o nome da bebida escolhido
            bebida = document.querySelector(".bebida .imagem.io2 p").innerHTML;
        }else if(ioordem == '.io3'){
            tagCheckmark = document.querySelector(".bebida .io3.selecionado");
            precoBebida = document.querySelector(".bebida .preco.io3").innerHTML;
            // Armazenar o nome da bebida escolhido
            bebida = document.querySelector(".bebida .imagem.io3 p").innerHTML;
        }
        precoBebida = trataValores(precoBebida);
    }else if(checkSobremesa){
        // tagSelecionado = document.querySelector(".prato ion-icon")
        if(ioordem == '.io1'){
            tagCheckmark = document.querySelector(".sobremesa .io1.selecionado");
            precoSobremesa = document.querySelector(".sobremesa .preco.io1").innerHTML;
            // Armazenar o nome da bebida escolhido
            sobremesa = document.querySelector(".sobremesa .imagem.io1 p").innerHTML;
        }else if(ioordem == '.io2'){
            tagCheckmark = document.querySelector(".sobremesa .io2.selecionado");
            precoSobremesa = document.querySelector(".sobremesa .preco.io2").innerHTML;
            // Armazenar o nome da bebida escolhido
            sobremesa = document.querySelector(".sobremesa .imagem.io2 p").innerHTML;
        }else if(ioordem == '.io3'){
            tagCheckmark = document.querySelector(".sobremesa .io3.selecionado");
            precoSobremesa = document.querySelector(".sobremesa .preco.io3").innerHTML;
            // Armazenar o nome da bebida escolhido
            sobremesa = document.querySelector(".sobremesa .imagem.io3 p").innerHTML;
        }
        precoSobremesa = trataValores(precoSobremesa);
    }

    checkIoniconExistente(checkPrato, checkBebida, checkSobremesa);
    // Para ativar borda verde de check
    opcao.classList.remove("borda-transparente");
    opcao.classList.add("check");
    // Para ativar/desativar ion-icon
    tagCheckmark.classList.remove("selecionado");
    tagCheckmark.classList.add("on");
    tagCheckmark.classList.remove("off");
    // console.log("tag retornada: ");
    // console.log(bordaCheck);
    console.log("Preco prato: " + precoPrato);
    console.log("Preco bebida: " + precoBebida);
    console.log("Preco sobremesa: " + precoSobremesa);


    liberarFecharPedido();

}

function checkIoniconExistente(checkPrato, checkBebida, checkSobremesa){
    if(checkPrato){
        const ionicon = document.querySelector(".prato .on");
        // console.log("RETORNO DO IONICON::: ")
        // console.log(ionicon);
        if(ionicon != null){
            ionicon.classList.add("selecionado");
            ionicon.classList.remove("on");
            ionicon.classList.add("off");
        }
    }else if(checkBebida){
        const ionicon = document.querySelector(".bebida .on");
        // console.log("RETORNO DO IONICON::: ")
        // console.log(ionicon);
        if(ionicon != null){
            ionicon.classList.add("selecionado");
            ionicon.classList.remove("on");
            ionicon.classList.add("off");
        }
    }else if(checkSobremesa){
        const ionicon = document.querySelector(".sobremesa .on");
        // console.log("RETORNO DO IONICON::: ")
        // console.log(ionicon);
        if(ionicon != null){
            ionicon.classList.add("selecionado");
            ionicon.classList.remove("on");
            ionicon.classList.add("off");
        }
    }
}


function liberarFecharPedido(){
    const pratoOn = document.querySelector(".prato .on")
    const bebidaOn =  document.querySelector(".bebida .on")
    const sobremesaOn = document.querySelector(".sobremesa .on")

    if (pratoOn != null && bebidaOn != null && sobremesaOn != null){
        const paragrafo = document.querySelector(".aguardando-selecionar div");
        paragrafo.innerHTML = "Fechar Pedido";

        const botao = document.querySelector(".aguardando-selecionar");
        botao.classList.add("pedido-fechado");
    }
}

function trataValores(valor) {
    valor = valor.replace("R$ ", "").replace(",", ".");
    valor = Number(valor);

    return valor;
}
function calculaPrecoPedido() {
    const total = precoBebida + precoPrato + precoSobremesa;
    return total;
}
function mandarWhatsapp() {
    const botao = document.querySelector(".aguardando-selecionar");
    const botaoLiberado = botao.classList.contains("pedido-fechado");
    if(botaoLiberado){
        let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${calculaPrecoPedido().toFixed(2)}`;
        const urlWpp = `https://wa.me/559391671085?text=${encodeURIComponent(mensagem)}`;
        window.open(urlWpp);
    }
}
