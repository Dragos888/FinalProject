import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';

const app = express();
app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter);
mongoose
  .connect(
    'mongodb+srv://DragosBeni888:dragos123@cluster0.jq3sr23.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => app.listen(3500))
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err));
app.use('/', (req, res, next) => {
  res.send('In GOD I trust');
});
