$(document).ready(function(){
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#campo-nova-tarefa').val();   
        
        const novoItem = $('<li></li>');
            

        $(novoItem).append(novaTarefa); 
        $(novoItem).addClass('isNotTaxado')   
        $(novoItem).appendTo('ol'); 

        $('#campo-nova-tarefa').val('')

    })
    $('ol').on('click', function(e){
        var clique = e.target
    
        if($(clique).hasClass("isNotTaxado")){
            $(clique).removeClass("isNotTaxado")
            $(clique).addClass("isTaxado")
        }else{
            $(clique).removeClass("isTaxado")
            $(clique).addClass("isNotTaxado")
        }
    
    })

})  


    
    

