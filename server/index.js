import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from "helmet";
import morgan from 'morgan';
import bodyParser from "body-parser";
// import clientRoute from './routes/client.js'
// import generalRoute from './routes/general.js'
// import managementRoute from './routes/management.js'
// import salesRoute from './routes/sales.js'

dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: false}))
app.use(cors());

/* ROUTES */
// app.use('/client', clientRoute);
// app.use('/general', generalRoute);
// app.use('/management', managementRoute);
// app.use('/sales', salesRoute);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`))
