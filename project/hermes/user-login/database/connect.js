const {MongoClient, ServerApiVersion} = require('mongodb');

const Prod_URL = "mongodb+srv://avinash11may1994:Avinash1234567890@cluster0.hjabpv3.mongodb.net/?retryWrites=true&w=majority";


// MongoCLient Instance created
// const client = new MongoClient(Prod_URL, {
//     serverApi:{
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

const client = new MongoClient(Prod_URL);

// MongoCLient Instance connected to DB
client.connect()
.then(()=>{
    console.log('DB Connected Succes!!!');

    //Closing DB Connection
    console.log('Exiting... !');
    client.close();
}).catch(error => console.log("Failed To Connect", error))
