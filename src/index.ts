import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
express.json();
express.urlencoded({ extended: true });

app.get('/', (req: Request, res: Response) => res.send('Default!'));

app.listen(PORT, () => console.log(`Running on Port: ${PORT}`));