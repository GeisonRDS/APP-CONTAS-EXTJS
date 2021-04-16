Ext.define('contas.controller.Main', {
    extend: 'Ext.app.Controller',

    views: [
        'contas.view.WindowConta'
    ],

    refs: [{
        ref: 'win',
        selector: 'window-conta'
    }, {
        ref: 'formulario',
        selector: 'window-conta form' 
    }],

    init: function() {
        var me = this;
        
        me.control({
            'button[action=adicionar-conta]': {
                click: me.adicionarContaClick
            }
        });
    },

    adicionarContaClick: function() {
        var me = this;

        me.abrirWindow(Ext.create('contas.model.Conta'));
    },

    abrirWindow: function(record) {
        var me = this,
            win = me.getView(me.views[0]).create();

        win.show();
        me.getFormulario().getForm().loadRecord(record);
    },
});
