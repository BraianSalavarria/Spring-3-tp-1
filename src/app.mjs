import express from 'express';
import {connectDB} from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();

app.use('/api', superHeroRoutes);

app.use( (req, res) => {
    res.status(404).send({mensaje: 'ruta no encotrada'});
});

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto: ${PORT}`);
})  