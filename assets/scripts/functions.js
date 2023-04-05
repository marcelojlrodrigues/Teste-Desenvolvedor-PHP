/* 
Função para alterar a cor da tabela simples.
*/

$(document).ready(function() {
    $('.more').click(function() {
        var bgcolor = $(this).parent().css('background-color');
        $('.portlet-title').css('background-color', bgcolor);
    });
});

/*
Reaproveitando código e evitando redundância, com uma função única que monta a tabela simples, 
a partir de qualquer JSON retornado pelas funções da classe DataRequest.
*/
function preencherTabelaSimples(data){

    var table = $('.tabelaSimples');
    table.empty();

    var cabecalhoCliente = '<thead> <tr> <th> # </th> '
    
    chave = Object.keys(data[0])
    // Montar o cabeçalho
    $.each(chave, function(index, value){ 
        cabecalhoCliente+= '<th>' + value.replace(value.charAt(0),value.charAt(0).toUpperCase()) + '</th>' 
    })
    cabecalhoCliente+='</tr> </thead><tbody>';

    table.append(cabecalhoCliente)  

    row='<tbody><tr>'

    //Monta o conteúdo das linhas da tabela
    isFirstIteration = true
    count = 1
    for (let i = 0; i < data.length; i++) {
        for (let chave in data[i]) {
            if(isFirstIteration){
                row+='<td>' + count  +'</td>'
                count++
                isFirstIteration=false  
            }
                
        row+='<td>' + data[i][chave] + '</td>'
        }
        isFirstIteration=true
        row+='</tr>'
    }
    row+='</tbody></table>'

    table.append(row)
    
}

/*
Requisição Ajax, que recebe o ítem clicado e chama o arquivo PHP, 
que irá chamar a função da DataRequest específica conforme o item que foi clicado.
*/
$(document).ready(function() {
    $('.more').click(function() {
        var action = $(this).attr('id');
        $.ajax({
            url: './processainfos.php',
            type: 'POST',
            data: { action: action },
            dataType: 'json',
            success: function(data) {
                console.log(data)
                preencherTabelaSimples(data)
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Erro ao chamar a função")
            }
        });
    });
});

