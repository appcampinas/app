<?php
/**
 * tbCardapio Active Record
 * @author  <your-name-here>
 */
class tbCardapio extends TRecord
{
    const TABLENAME = 'cardapio';
    const PRIMARYKEY= 'cod';
    const IDPOLICY =  'serial'; // {max, serial}
    
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL, $callObjectLoad = TRUE)
    {
        parent::__construct($id, $callObjectLoad);
        parent::addAttribute('nome_produto');
        parent::addAttribute('ingrediente');
        parent::addAttribute('valor');
        parent::addAttribute('cod_estabelecimento');
        parent::addAttribute('adicional');
    }


}
