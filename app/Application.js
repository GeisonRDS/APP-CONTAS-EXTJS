Ext.define('contas.Application', {
    name: 'contas',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        'contas.controller.Main',
        'contas.controller.WindowContaController'
    ],

   stores: [
        'contas.store.Contas'
    ]
});
