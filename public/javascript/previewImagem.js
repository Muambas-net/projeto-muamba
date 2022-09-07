document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#imagem").addEventListener("change", function(imagem){
        const arquivo = imagem.target.files.item(0);
        const endereco = new FileReader();
        endereco.onloadend = function(){
            document.querySelector("#preview").setAttribute("src", endereco.result);
        }
        endereco.readAsDataURL(arquivo);
    })
})