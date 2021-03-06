/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('SAT.Application', {
    extend: 'Ext.app.Application',
    
    name: 'SAT',

    stores: [
        'main.MainStore',
        'main.AdwareStore',
        'main.FilterAvoidStore',
        'main.MalwareStore',
        'main.OffensiveContentStore',
        'main.PhishingStore',
        'main.SpeedTestStore',
        'main.SSLStore'
    ],

    models: [

    ],
    
    launch: function () {

    },
    onBeforeLaunch: function() {
        //remove site loading animation
        $('#siteloading').hide();
        this.callParent(arguments);
    }
});
