import mongodb from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

export const mongoDBConnection = async () =>
    mongodb.connect(
        process.env.MONGODB_URL as string,
        {
            useUnifiedTopology: true,
        },
        async (error, client) => {
            if (error) throw error;
            console.log("DB Connected!!");
            const database = client.db();
            const collection = database.collection('users');

            let dataFromMongo = await collection.find().toArray();
            console.log(dataFromMongo);

        }
    );
// export const postDataToMongo = async () =>
// mongodb.connect(
//     process.env.MONGODB_URL as string,
//     {
//         useUnifiedTopology: true,
//     },
//     async (error, client) => {
//         if (error) throw error;
//         console.log("DB Connected!!");
//         const database = client.db();
//         const collection = database.collection('users');

//         let sendDataToMongo = await collection.insertOne(
//             {name:"ahmad",
//             email: "amad@x.com"}
//         );

//     }
// );

// 

// export const postDataToMongo = async () =>
// mongodb.connect(
//     process.env.MONGODB_URL as string,
//     {
//         useUnifiedTopology: true,
//     },
//     async (error, client) => {
//         if (error) throw error;
//         console.log("DB Connected!!");
//         const database = client.db();
//         const collection = database.collection('users');

//         let sendDataToMongo = await collection.insertMany(
//             [
//                 {name:"ahmad3",
//             email: "amad3@x.com"},
//             {name:"ahmad4",
//             email: "amad4@x.com"},
//             ],
//             (err,data)=>{
//                 if(err)throw err;
//                 console.log(data);
//             }
//         );


//     }
// );

// export const postDataToMongo = async () =>
//     mongodb.connect(
//         process.env.MONGODB_URL as string,
//         {
//             useUnifiedTopology: true,
//         },
//         async (error, client) => {
//             if (error) throw error;
//             console.log("DB Connected!!");
//             const database = client.db();
//             const collection = database.collection('users');
//             const filter = {
//                 name: "ahmad3"
//             };
//             let sendDataToMongo = await collection.findOne(filter, (err, data) => {
//                 if (err) throw err;
//                 console.log(data);
//             });


//         }
//     );

// export const postDataToMongo = async () =>
//     mongodb.connect(
//         process.env.MONGODB_URL as string,
//         {
//             useUnifiedTopology: true,
//         },
//         async (error, client) => {
//             if (error) throw error;
//             console.log("DB Connected!!");
//             const database = client.db();
//             const collection = database.collection('users');
//             const filter = {
//                 name: "ahmad3"
//             };
//             let sendDataToMongo = await collection.deleteOne(filter, (err, data) => {
//                 if (err) throw err;
//                 console.log(data);
//             });


//         }
//     );