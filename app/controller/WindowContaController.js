Ext.define('contas.controller.WindowContaController', {
    extend: 'Ext.app.Controller',

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
            'button[action=salvar]': {
                click: me.salvarConta
            },
            'button[action=cancelar]': {
                click: me.cancelar
            }
        });
    },

    cancelar: function(win) {
        this.getWin().close();
    },

    salvarConta: function() {
        var me = this,
            form = me.getFormulario().getForm(),
            values = form.getValues(),
            record = form.getRecord(),
            store = record.store;
        
        if (form.isValid()) {
            record.set(values);
            var quantidadeDias = me.calculaDiasAtraso();
            var valorCorrigido = me.calculaValorCorrigido();
            var regra = me.montaRegra();
            record.set({
                quantidadeDias: quantidadeDias,
                valorCorrigido: valorCorrigido,
                regra: regra
            })

            if (!store) {
                store = me.getStore('contas.store.Contas');
                store.add(record);
                store.sync({
                    success: function() {
                        me.getWin().close();
                    },
                    failure: function() {
                        Ext.Msg.alert('Atenção','Não foi possível salvar o registro.');
                    }
                })
            }
        }
    },

    calculaValorCorrigido: function() {
        var me = this,
        form = me.getFormulario().getForm(),
        values = form.getValues(),
        valor = parseInt(values.valor),
        jurosMulta = me.calculaJurosMulta();

        return valor + (jurosMulta * valor)

    },

    calculaDiasAtraso: function() {
        var me = this,
        form = me.getFormulario().getForm(),
        values = form.getValues(),
        dataPagamento = values.dataPagamento,
        dataVencimento = values.dataVencimento,
        dp = new Date(dataPagamento),
        dv = new Date(dataVencimento),
        diff = Math.abs(dp.getTime() - dv.getTime());

        return diasEmAtraso = Math.ceil(diff / (1000 * 60 * 60 * 24));
    },

    calculaJurosMulta: function () {
        var me = this;
        var dias = me.calculaDiasAtraso();

        if (dias <= 3) {
            return (dias * (0.1 / 100)) + 2.0 / 100;
        } else if (dias <= 10) {
            return (dias * (0.2 / 100)) + 3.0 / 100;
        } else {
            return (dias * (0.3 / 100)) + 5.0 / 100;
        }
    },
    
    montaRegra: function() {
        var me = this;
        var dias = me.calculaDiasAtraso();
        var mensagemUm = "Multa 2.0% e juros 0.1% ao dia."
        var mensagemDois = "Multa 3.0% e juros 0.2% ao dia."
        var mensagemTres = "Multa 5.0% e juros 0.3% ao dia."

        if (dias <= 3) {
            return mensagemUm;
        } else if (dias <= 10) {
            return mensagemDois;
        } else {
            return mensagemTres;
        }
    }

});

