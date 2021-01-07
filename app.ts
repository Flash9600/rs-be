import * as express from 'express';
import * as logger from 'morgan';
import todoRouter from './routes/todos';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json({
    statusCode:404
  })
});

// error handler
app.use(function(err: { message: any; stack: any; }, req: any, res: { json: (arg0: { statusCode: number; message: any; stack: any; }) => void; }, next: any) {
  res.json({
    statusCode:500,
    message: err.message,
    stack: err.stack
  })
});

export default app;
