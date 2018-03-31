<?php
/**
 * tbOpcoespagamento Active Record
 * @author  <your-name-here>
 */
class tbOpcoespagamento extends TRecord
{
    const TABLENAME = 'opcoespagamento';
    const PRIMARYKEY= 'cod';
    const IDPOLICY =  'serial'; // {max, serial}
    
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL, $callObjectLoad = TRUE)
    {
        parent::__construct($id, $callObjectLoad);
        parent::addAttribute('descricao');
    }


}
