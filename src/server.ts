import express,{Express, Request, Response} from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })

app.listen(3000, () => {
  console.log(`App de exemplo esta rodando na porta ${3000}`)
})