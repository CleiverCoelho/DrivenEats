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
        bordaCheck = document.querySelector(".prato .check")
        if(bordaCheck != null){
            bordaCheck.classList.remove("check")
            bordaCheck.classList.add("borda-transparente")

        }
        // tagSelecionado = document.querySelector(".prato ion-icon")
        else if(ioordem == '.io1'){
            tagCheckmark = document.querySelector(".prato .io1");
        }else if(ioordem == '.io2'){
            tagCheckmark = document.querySelector(".prato .io2");
        }else if(ioordem == '.io3'){
            tagCheckmark = document.querySelector(".prato .io3");
        }
    }else if(checkBebida){
        // Procurar se existem bordas check ligadas
        bordaCheck = document.querySelector(".bebida .check")
        if(bordaCheck != null){
            bordaCheck.classList.remove("check")
            bordaCheck.classList.add("borda-transparente")

        }
        // tagSelecionado = document.querySelector(".prato ion-icon")
        else if(ioordem == '.io1'){
            tagCheckmark = document.querySelector(".bebida .io1");
        }else if(ioordem == '.io2'){
            tagCheckmark = document.querySelector(".bebida .io2");
        }else if(ioordem == '.io3'){
            tagCheckmark = document.querySelector(".bebida .io3");
        }
    }else if(checkSobremesa){
        // Procurar se existem bordas check ligadas
        bordaCheck = document.querySelector(".sobremesa .check")
        if(bordaCheck != null){
            bordaCheck.classList.remove("check")
            bordaCheck.classList.add("borda-transparente")

        }
        // tagSelecionado = document.querySelector(".prato ion-icon")
        else if(ioordem == '.io1'){
            tagCheckmark = document.querySelector(".sobremesa .io1");
        }else if(ioordem == '.io2'){
            tagCheckmark = document.querySelector(".sobremesa .io2");
        }else if(ioordem == '.io3'){
            tagCheckmark = document.querySelector(".sobremesa .io3");
        }
    }

    // Para ativar borda verde de check
    opcao.classList.remove("borda-transparente");
    opcao.classList.add("check");
    // Para ativar/desativar ion-icon
    tagCheckmark.classList.toggle("selecionado");
    console.log("tag retornada: ");
    console.log(bordaCheck);

}