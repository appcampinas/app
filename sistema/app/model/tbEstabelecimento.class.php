<?php
/**
 * tbEstabelecimento Active Record
 * @author  <your-name-here>
 */
class tbEstabelecimento extends TRecord
{
    const TABLENAME = 'estabelecimento';
    const PRIMARYKEY= 'cod';
    const IDPOLICY =  'serial'; // {max, serial}
    
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL, $callObjectLoad = TRUE)
    {
        parent::__construct($id, $callObjectLoad);
        parent::addAttribute('email');
        parent::addAttribute('senha');
        parent::addAttribute('nome');
        parent::addAttribute('telefone');
        parent::addAttribute('cpf');
        parent::addAttribute('endereco');
    }


}
