Ext.define('contas.view.WindowConta', {
    extend: 'Ext.window.Window',
    xtype: 'window-conta',
    Title: 'Conta',
    width: 500,
    height: 190,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        bodyPadding: 10,
        defaultType: 'textfield',
        items: [{
            fieldLabel: 'Nome',
            name: 'nome',
            allowBlank: false
        }, {
            fieldLabel: 'Valor',
            name: 'valor',
            allowBlank: false
        }, {
            fieldLabel: 'Data Vencimento',
            name: 'dataVencimento',
            allowBlank: false
        }, {
            fieldLabel: 'Data Pagamento',
            name: 'dataPagamento',
            allowBlank: false
        }]
    }],
    buttons: [{
        text: 'Salvar',
        action: 'salvar'
    }, {
        text: 'Cancelar',
        action: 'cancelar'
    }]
})