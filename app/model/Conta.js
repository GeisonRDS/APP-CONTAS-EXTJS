Ext.define('contas.model.Conta', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'nome',
        type: 'string'
    }, {
        name: 'valor',
        type: 'numeric'
    }, {
        name: 'dataVencimento',
        type: 'date'
    }, {
        name: 'dataPagamento',
        type: 'date'
    }, {
        name: 'valorCorrigido',
        type: 'numeric'
    }, {
        name: 'quantidadeDias',
        type: 'numeric'
    }, {
        name: 'regra',
        type: 'string'
    }],
    proxy: {
        type: 'localstorage',
        id: 'base-contas'
    }
})