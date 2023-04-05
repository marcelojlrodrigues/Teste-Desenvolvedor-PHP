<?php 

class MenuItens {

    private $CadastroItens = [
        0 => [
            'nome' => 'Cliente',
            'link' => '#'
        ],

        1 => [
            'nome' => 'Fornecedor',
            'link' => '#'
        ],
        2 => [
            'nome' => 'Usuário', 
            'link'=> "#"
        ],
        3 => [
            'nome' => 'Produtos', 
            'link'=> '#'
        ],
        4 => [
            'nome' => 'Perfil de Acesso', 
            'link'=> '#'
        ]
    ];

    private $RelatorioItens = [
        0 => [
            'nome' => 'Produtos',
            'link' => '#'
        ],
        1 => [
            'nome' => 'Cliente',
            'link' => '#'
        ],
        2 => [
            'nome' => 'Faturamento',
            'link' => '#'
        ]
    ];

    /* Função para retornar os itens do cadastro*/
    
    public function cadastroItens () {
        return $this->CadastroItens;
    }
    
    /* Função para retornar os itens do cadastro*/
    
    public function relatorioItens() {
        return $this->RelatorioItens;
    }
}
