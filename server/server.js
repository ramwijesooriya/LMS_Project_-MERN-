import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connect } from 'mongoose';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';


// Initialize Express
const app = express();
//connect to database
await connectDB();

// Middlewares
app.use(cors());

// Routes
app.get('/', (req, res) => res.send('API Working'));
app.post('/cleark', express.json(),clerkWebhooks)

// Port
const PORT = process.env.PORT || 500;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});