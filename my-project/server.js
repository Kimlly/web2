import express from 'express';
import cors from 'cors';
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://auction-site-wct.vercel.app'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors());
app.use(express.json());



export default app;