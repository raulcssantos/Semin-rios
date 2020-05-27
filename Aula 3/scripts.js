$(document).ready(function () {

    $("#botaoTopo").click(function () {
        const todo = $("#descricao").val();

        if(!todo)
            return;

        $("#lista").prepend(`<li>${todo}</li>`);

        $("#descricao").val("");
    });

    $("#botaoFim").click(function () {
        const todo = $("#descricao").val();

        if(!todo)
            return;

        $("#lista").append(`<li>${todo}</li>`);

        $("#descricao").val("");
    });

    $(document).ready(async function () {
        while(true) {
            await sleep(1000);
            console.log("loop");
    
            $("#retangulo2").toggleClass(["retanguloAmarelo", "retanguloVermelho"]);
            $("#retangulo1").toggleClass(["retanguloVerde", "retanguloVermelho"]);
        }
    });
    
    function sleep(ms) {
        return new Promise(res => setTimeout(res, ms));
    }




});
