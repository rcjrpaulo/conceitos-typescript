import express from 'express';

import helloWorld from './routes';

const app = express();

// app.get('/', (request, response) => {
//   return response.json({ message: 'Hello World'});
// });

app.get('/', helloWorld);

app.listen(process.env.PORT || 3333);