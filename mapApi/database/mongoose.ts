import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();


async function conectar() {
    try {
       
        await mongoose.connect(process.env.SERVER_HOST as string);
        console.log('Conectado ao MongoDB!');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err);
    }
}

conectar();
export default mongoose;