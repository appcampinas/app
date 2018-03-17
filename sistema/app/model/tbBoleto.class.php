<?php
/**
 * tbBoleto Active Record
 * @author  <your-name-here>
 */
class tbBoleto extends TRecord
{
    const TABLENAME = 'boleto';
    const PRIMARYKEY= 'cod';
    const IDPOLICY =  'serial'; // {max, serial}
    
    
    /**
     * Constructor method
     */
    public function __construct($id = NULL, $callObjectLoad = TRUE)
    {
        parent::__construct($id, $callObjectLoad);
        parent::addAttribute('data_pagamento');
        parent::addAttribute('valor_pago');
        parent::addAttribute('valor_boleto');
        parent::addAttribute('data_vencimento');
        parent::addAttribute('cod_estabelecimento');
    }


}
