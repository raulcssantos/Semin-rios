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

    $("#botaoMais").click(function () {
        var fonte = $("#texto").css("font-size");
        fonte = parseInt(fonte);
        if (fonte >= 70)
            return;
        
            fonte = fonte + 2;
        $("#texto").css({
            "font-size" : fonte
            });
    });
        
    $("#botaoMenos").click(function () {
        var fonte = $("#texto").css("font-size");
        fonte = parseInt(fonte);
        if (fonte <= 8)
            return;
        
            fonte = fonte - 2;
        $("#texto").css({
            "font-size" : fonte
            });
    });



});
