<?php
/**
 * tbPedido Active Record
 * @author  <your-name-here>
 */
class tbPedido extends TRecord
{
    const TABLENAME = 'pedido';
    const PRIMARYKEY= 'cod';
    const IDPOLICY =  'serial'; // {max, serial}
    
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL, $callObjectLoad = TRUE)
    {
        parent::__construct($id, $callObjectLoad);
        parent::addAttribute('cod_usuario');
        parent::addAttribute('cod_estabelecimento');
        parent::addAttribute('valor_total');
        parent::addAttribute('descricao_produto');
        parent::addAttribute('cod_opcoesPagamento');
        parent::addAttribute('adicional');
        parent::addAttribute('obs');
        parent::addAttribute('taxa_entrega');
        parent::addAttribute('cod_endereco');
        parent::addAttribute('data_pedido');
        parent::addAttribute('estimativa_entrega');
    }


}
