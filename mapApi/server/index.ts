import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import mapRouter from '../routes/mapRouter';

const app = express();

//configurações gerais do servidor. Porta padrão do vite
app.use(cors({ origin: 'http://localhost:5173'}));
app.use(express.json());


//rotas
app.use('/map', mapRouter);

//startando servidor
app.listen(1010, () => {
    console.log(`Server running in http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
})