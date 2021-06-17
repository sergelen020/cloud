const qrcode = require('qrcode');
const axios = require('axios');
const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

<<<<<<< HEAD
const admin = require('firebase-admin')
admin.initializeApp()
=======

const admin = require('firebase-admin');
admin.initializeApp();
>>>>>>> 15d4003cb4657016d6e687a7c789f768996b8998
const baseUrl = 'https://us-central1-project-1-aad15.cloudfunctions.net/somefunction'


exports.shop_create_invoice = functions.https.onRequest( (request, response) => {
    cors(request, response, async() => {
        const db = admin.firestore()
        const invoice = await db.collection('invoices').add({
            name: 'some name'
        });
        qrcode.toDataURL(`${ baseUrl }?invoiceId=${ invoice.id }`, (err, code) => {
            if(err) return console.log('error occured')
<<<<<<< HEAD
=======
            response.set('Access-Control-Allow-Origin', '*');
>>>>>>> 15d4003cb4657016d6e687a7c789f768996b8998
            response.send({
                qr: code,
                invoiceId: invoice.id
            });
        });
    });
});

exports.somefunction = functions.https.onRequest( (request, response) => {
<<<<<<< HEAD
    const db = admin.firestore()
=======
    request.set('Access-Control-Allow-Origin', '*');
>>>>>>> 15d4003cb4657016d6e687a7c789f768996b8998
    const { invoiceId } = request.body
    db.doc(`invoices/${ invoiceId }`).set({
        status: 'paid',
        text: 'succeed',
    }, {
        merge: true,
    })
});