<?php
/**
 * tbUsuario Active Record
 * @author  <your-name-here>
 */
class tbUsuario extends TRecord
{
    const TABLENAME = 'usuario';
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
    }


}
