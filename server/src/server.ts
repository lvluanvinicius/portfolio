import express from 'express';
import cors from 'cors';
import routes from './routes/app.routes';

const server = express();

server.use(express.json());
server.use(cors());

server.use(routes);


server.listen(8006, '192.168.0.52', () => console.log("Server iniciado...\nhttp://192.168.0.52:8006"));