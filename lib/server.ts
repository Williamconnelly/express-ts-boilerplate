import dotenv from 'dotenv';
import express from 'express';
import app from "./config/app";
import env from './environment';

dotenv.config();
express.json();
express.urlencoded({ extended: true });

const PORT = env.getPort();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});