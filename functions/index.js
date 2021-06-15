const qrcode = require('qrcode')
const axios = require('axios')
const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

const admin = require('firebase-admin')
admin.initializeApp()
const QR_GENERATE_QR = 'https://something'
const baseUrl = 'https://us-central1-project-1-aad15.cloudfunctions.net/somefunction'


exports.shop_create_invoice = functions.https.onRequest( (request, response) => {
    cors(request, response, async() => {
        const db = admin.firestore()
        const invoice = await db.collection('invoices').add({
            name: 'some name'
        });
        qrcode.toDataURL(`${ baseUrl }?invoiceId=${ invoice.id }`, (err, code) => {
            if(err) return console.log('error occured')
        });
        response.send({
            qr: code,
            invoiceId: invoice.id
        });
    });
});

exports.somefunction = functions.https.onRequest( (request, response) => {
    const { invoiceId } = request.body
    db.doc(`invoices/${ invoiceId }`).set({
        status: 'paid',
    }, {
        merge: true,
    })
});
