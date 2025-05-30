import express from 'express';
import userRouter from './route/user';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
