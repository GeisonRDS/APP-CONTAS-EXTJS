Ext.define('contas.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'contas.view.Main'
    ],
    store: 'store-conta',

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'toolbar',
        region: 'north',
        items: [{
            text: 'Adicionar Conta',
            action: 'adicionar-conta'
        }]
    }, {
        xtype: 'grid',
        region: 'center',
        store: 'contas.store.Contas',
        columns: [{
            text: 'Nome',
            dataIndex: 'nome',
            flex: 2
        }, {
            text: 'Valor',
            dataIndex: 'valor',
            flex: 1 
        }, {
            text: 'Data Vencimento',
            dataIndex: 'dataVencimento',
            flex: 1
        }, {
            text: 'Data Pagamento',
            dataIndex: 'dataPagamento',
            flex: 1
        }, {
            text: 'Valor Corrigido',
            dataIndex: 'valorCorrigido',
            flex: 1
        }, {
            text: 'Dias em Atraso',
            dataIndex: 'quantidadeDias',
            flex: 1
        }, {
            text: 'Multa e Juros',
            dataIndex: 'regra',
            flex: 2
        }]
    }]
});