$(document).ready(function() {
	
    $("#confirma").hide();

    $("#botao").click(function () {
        var nome = $("#nome").val();
        var idade = $("#idade").val();
        var altura = $("#altura").val();
        var truco = $("#truco").val();
        var toba = $("#toba").val();

        $("#nomeInsert").removeClass("erro");
        $("#idadeInsert").removeClass("erro");
        $("#alturaInsert").removeClass("erro");
        $("#poderDeTrucoInsert").removeClass("erro");
        $("#tobaInsert").removeClass("erro");

        
        if(!nome)
            $("#nomeInsert").addClass("erro");

        if(!idade)
            $("#idadeInsert").addClass("erro");

        if(!altura)
            $("#alturaInsert").addClass("erro");

        if(!truco)
            $("#poderDeTrucoInsert").addClass("erro");

        if(!toba)
            $("#tobaInsert").addClass("erro");

        if(nome && idade && altura && truco && toba){
            $("#confirma").show();
            alert("Seu toba foi cadastrado para aposta!")
            }   

        
        
    })

});
