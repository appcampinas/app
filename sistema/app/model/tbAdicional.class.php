<?php
/**
 * tbAdicional Active Record
 * @author  <your-name-here>
 */
class tbAdicional extends TRecord
{
    const TABLENAME = 'adicional';
    const PRIMARYKEY= 'cod';
    const IDPOLICY =  'serial'; // {max, serial}
    
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL, $callObjectLoad = TRUE)
    {
        parent::__construct($id, $callObjectLoad);
        parent::addAttribute('nome');
        parent::addAttribute('valor');
    }


}
