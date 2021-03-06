Ext.define('SAT.store.main.MainStore', {
    extend: 'Ext.data.Store',

    storeId: 'MainStore',

    fields:['active', 'gridIcon', 'threatTitle', 'gridContent'],

    data:{'items':[
        { 'index': 0, 'active': true, 'gridSmallIcon': 'icon-mini-internet.png', 'gridIcon': 'icon-internet.png', 'threatTitle': 'Internet Speed Test', "gridContent":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, explicabo."},
        { 'index': 1, 'active': true, 'gridSmallIcon': 'icon-mini-offensive-content.png', 'gridIcon': 'icon-offensive-content.png', 'threatTitle': 'Offensive Content', "gridContent":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remsdfdsfs aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},
        { 'index': 2, 'active': true, 'gridSmallIcon': 'icon-mini-malware.png', 'gridIcon': 'icon-malware.png', 'threatTitle': 'Malware', "gridContent":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remsdfdsfs aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},
        { 'index': 3, 'active': true, 'gridSmallIcon': 'icon-mini-spyware.png', 'gridIcon': 'icon-spyware.png', 'threatTitle': 'Adware/Spyware', "gridContent":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remsdfdsfs aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},
        { 'index': 4, 'active': true, 'gridSmallIcon': 'icon-mini-fishing.png', 'gridIcon': 'icon-fishing.png', 'threatTitle': 'Phishing', "gridContent":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remsdfdsfs aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},
        { 'index': 5, 'active': true, 'gridSmallIcon': 'icon-mini-filter-avoid.png', 'gridIcon': 'icon-filter-avoid.png', 'threatTitle': 'Filter Avoidance/Anonymizing Sites', "gridContent":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remsdfdsfs aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},
        { 'index': 6, 'active': true, 'gridSmallIcon': 'icon-mini-ssl.png', 'gridIcon': 'icon-ssl.png', 'threatTitle': 'SSL Vulnerability', "gridContent":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remsdfdsfs aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

    autoLoad: true
});