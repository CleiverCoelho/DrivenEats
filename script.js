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
            tagCheckmark = document.querySelector(".prato .io1");
        }else if(ioordem == '.io2'){
            tagCheckmark = document.querySelector(".prato .io2");
        }else if(ioordem == '.io3'){
            tagCheckmark = document.querySelector(".prato .io3");
        }
    }else if(checkBebida){
        // tagSelecionado = document.querySelector(".prato ion-icon")
        if(ioordem == '.io1'){
            tagCheckmark = document.querySelector(".bebida .io1");
        }else if(ioordem == '.io2'){
            tagCheckmark = document.querySelector(".bebida .io2");
        }else if(ioordem == '.io3'){
            tagCheckmark = document.querySelector(".bebida .io3");
        }
    }else if(checkSobremesa){
        // tagSelecionado = document.querySelector(".prato ion-icon")
        if(ioordem == '.io1'){
            tagCheckmark = document.querySelector(".sobremesa .io1");
        }else if(ioordem == '.io2'){
            tagCheckmark = document.querySelector(".sobremesa .io2");
        }else if(ioordem == '.io3'){
            tagCheckmark = document.querySelector(".sobremesa .io3");
        }
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
        console.log(paragrafo);
        paragrafo.innerHTML = "Fechar Pedido";
        paragrafo.classList.add("paragrafo-pedido-fechado");

        const botao = document.querySelector(".aguardando-selecionar");
        botao.classList.add("pedido-fechado");
    }
}