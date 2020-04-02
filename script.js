let app;

window.onload = () => {
    app = new Vue({
        el: '#app',
        data: {
            codes: '',
            url: ''
        },
        methods: {
            changeUrl: function() {
                app.url = location.origin + '/generator/#' + escape(app.codes);
            },
            makeQrCode: function() {
                let qr = qrcode(0, 'L');
                qr.addData(app.url);
                qr.make();
                document.querySelector('#qrcode').innerHTML = qr.createImgTag();
            }
        }
    });
};
