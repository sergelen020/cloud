const qrcode = require('qrcode')
const axios = require('axios')
const functions = require('firebase-functions');

const admin = require('firebase-admin')
const QR_GENERATE_QR = 'https://something'
const baseUrl = 'https://us-central1-project-1-aad15.cloudfunctions.net/somefunction'

exports.shop_create_invoice = functions.https.onRequest( async (request, response) => {
    const db = admin.firestore()
    const invoice = await db.collection('invoices').add({
        name: 'some name'
    })

    const res = await axios.post('http://asdkfha', {
        invoiceId: invoice.id
    })
    const { qr } =res.data  
    //invoice.id
    response.send({
        qr
    });
    const qrData = {
        invoiceId,
        url: 'https://google.com',
        price: '5000',
    }

    qrcode.toDataURL(JSON.stringify(qrData), (err, code) => {
        if(err) return console.log('error occured')
    })

    response.send({
        qr:code
    });
});

exports.somefunction = functions.https.onRequest((request, response) => {
    const { invoiceId } = request.body
    const invoice = await db.collection('invoices').add({
        name: somename,
    })
});
