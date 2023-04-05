# Atividades do teste - Desenvolvedor PHP, Multidados TI.

## Atividade 1
- Os arquivos foram separados do index.php, e colocados dentro da pasta 'partials', para melhor organização do código, conforme proposto no exercício.
- Foram atualizados os links de, "Home", da imagem do "Logo" no cabeçalho, e do "Dashboard" do menu, para que não redirecionem para o link antigo 'index.html'.

Exemplo do trecho do código:
```
   <!-- BEGIN HEADER -->
	    <?php include('./partials/cabecalho.php'); ?>
   <!-- END HEADER -->
```

## Atividade 2
- Para listagem dinâmica dos itens do menu, foi criado a classe MenuItens.php, seguindo os mesmos moldes da classe DataRequest.
Conforme trecho do código:

```
    class MenuItens {

    private $CadastroItens = [
        0 => [
            'nome' => 'Cliente',
            'link' => '#'
        ],
    ....
```
Trecho da função:
```
    /* Função para retornar os itens do cadastro*/
    
    public function cadastroItens () {
        return $this->CadastroItens;
    }

```


## Atividade 3

- Para carregar esses valores, foi apenas preciso utilizar a função da classe DataRequest passando os parâmetro ('c'), na chamada da função para que retornasse a quantidade de itens desse array. Conforme trecho do código abaixo:

```
    <div class="number">
        <?php
            echo $dataRequest->dadosUsuarios('c'); 
        ?>
    </div>
```


## Atividade 4

- Para alterar a cor de fundo da tabela simples, foi criada uma função com jquery, no arquivo function, dentro da pasta scripts. Conforme trecho do código abaixo:

```
$(document).ready(function() {
    $('.more').click(function() {
        var bgcolor = $(this).parent().css('background-color');
        $('.portlet-title').css('background-color', bgcolor);
    });
});
```

## Atividade 5

- Para o teste final, busquei otimizar o código e evitar redundâncias, adicionei um ID os ítens do dashboard, clientes, usuários e fornecedores. Conforme trecho abaixo:

```
    <a class="more"  id="clientes" href="#">
    <a class="more" id="usuarios" href="#">
    <a class="more" id="fornecedores" href="#">
```

- Após isso, criei a chamada para a função ajax com o jquery, pegando no código o ID do ítem que foi clicado:

```
    $('.more').click(function() {
        var action = $(this).attr('id');
```

- E passando por parâmetro para a função php que irá receber a requisição.

```
    data: { action: action }
```

- Já a função processainfos.php (faltou pensar em um nome melhor, rs), recebe esse parâmetro e checa qual dos itens foi clicado para assim, chamar o método da função apropriada da classe DataRequest

```
    switch($_POST['action']){
        case 'clientes':        
            $data = $dataRequest->dadosClientes();
            header('Content-Type: application/json');
            echo json_encode($data);
            break;

        case 'usuarios':
            $data = $dataRequest->dadosUsuarios();
        ...

        case 'fornecedores':
        $data = $dataRequest->dadosFornecedores();
```

- Para assim devolver os dados, para a função 'preencherTabelaSimples', que por sua vez, é preparada para montar qualquer tabela independente de qual função retornar, mesmo com arrays com tamanhos diferentes, assim podendo ser reutilizada para outras chamadas e evitando redundância de código desnecessária.

```
    // Montar o cabeçalho
    $.each(chave, function(index, value){ 
        cabecalhoCliente+= '<th>' + value.replace(value.charAt(0),value.charAt(0).toUpperCase()) + '</th>' 
    })

```

```
    // Monta o conteúdo da linha
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

```

### Obrigado! 😁 