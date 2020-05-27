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

});