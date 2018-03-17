<?php
/**
 * tbEndereco Active Record
 * @author  <your-name-here>
 */
class tbEndereco extends TRecord
{
    const TABLENAME = 'endereco';
    const PRIMARYKEY= 'cod';
    const IDPOLICY =  'serial'; // {max, serial}
    
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL, $callObjectLoad = TRUE)
    {
        parent::__construct($id, $callObjectLoad);
        parent::addAttribute('endereco');
        parent::addAttribute('cod_usuario');
    }


}
