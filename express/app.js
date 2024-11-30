import express from 'express';
import authd from './routes/auth.route.js'
import cookieParser  from 'cookie-parser';
import cors from 'cors'
import confirm from './routes/confirm.route.js'
 
const app = express();

app.use(cors( {origin: process.env.CLIENT_URL , credentials:true }));
app.use(express.json());
app.use (cookieParser())

app.use('/api/auth', authd);
app.use('/api/confirm', confirm);

app.listen(8800, () => {
  console.log('Server is running on port 8800');
});   