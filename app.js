// // app.js

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path'); // Import the 'path' module
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Connect to MongoDB
// mongoose.connect('mongodb://0.0.0.0:27017/quizdb', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// // Check connection
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });

// // Check for DB errors
// db.on('error', (err) => {
//     console.log(err);
// });

// // Use body-parser middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Define the QuizRegistration schema
// const quizRegistrationSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     contact: String,
//     regno: String,
//     branches: String,
//     password: String,
// });

// // Create the QuizRegistration model
// const QuizRegistration = mongoose.model('QuizRegistration', quizRegistrationSchema);

// // Handle form submission
// app.post('/connect', (req, res) => {
//     const newRegistration = new QuizRegistration({
//         name: req.body.name,
//         email: req.body.email,
//         contact: req.body.contact,
//         regno: req.body.regno,
//         branches: req.body.branches,
//         password: req.body.password,
//     });

//     // Save to MongoDB
//     newRegistration.save((err) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Internal Server Error');
//         } else {
//             res.send('Registration successful');
//         }
//     });
// });

// // Serve registration.html when accessing the root URL
// app.get('/', (req, res) => {
//     const filePath = path.join(__dirname, 'registration.html');
//     const data = fs.readFileSync(filePath, 'utf8');
//     res.send(data);
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



// app.js

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 3000;

// mongoose.connect('mongodb://0.0.0.0:27017/quizdb', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });

// db.on('error', (err) => {
//     console.log(err);
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const quizRegistrationSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     contact: String,
//     regno: String,
//     branches: String,
//     password: String,
// });

// const QuizRegistration = mongoose.model('QuizRegistration', quizRegistrationSchema);

// app.post('/connect', async (req, res) => {
//     const newRegistration = new QuizRegistration({
//         name: req.body.name,
//         email: req.body.email,
//         contact: req.body.contact,
//         regno: req.body.regno,
//         branches: req.body.branches,
//         password: req.body.password,
//     });

//     try {
//         // Save to MongoDB using async/await
//         await newRegistration.save();
//         res.send('Registration successful');
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.get('/', (req, res) => {
//     const filePath = path.join(__dirname, 'registration.html');
//     const data = fs.readFileSync(filePath, 'utf8');
//     res.send(data);
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://sanjayyalla:BdIEpbRlrvafb41d@cluster0.whbvttc.mongodb.net/newquizdb');
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.log(err);
});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const quizRegistrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    regno: String,
    branches: String,
    password: String,
});

const QuizRegistration = mongoose.model('QuizRegistration', quizRegistrationSchema);

app.post('/connect', async (req, res) => {
    const newRegistration = new QuizRegistration({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        regno: req.body.regno,
        branches: req.body.branches,
        password: req.body.password,
    });

    try {
        
        await newRegistration.save();
        console.log("Data stored");
        res.send('Registration successful');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    const data = fs.readFileSync(filePath, 'utf8');
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


