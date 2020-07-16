const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, '../build')));
  app.get('/', (req, res) =>
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
  );
}

// local host makes a request for logo png file
app.get('/aadff28cffc66b3dff7e81a010c9840e.png', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/assets/Recoilize.png'));
});

app.get('/a2e70c3edc03317d86659d1a1c72db70.png', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../client/assets/recoilize-rainbow.png')
  );
});

app.get('/25370ef4e56d328aca432e7d39192073.png', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../client/assets/recoilize-white-01.png')
  );
});
app.get('/75757e594997778fce4b6a0b587f958e.png', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../client/assets/recoilize-gray-01.png')
  );
});

app.get('/89dfeb8c2a785562c1ff2ff157aa21aa.png', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/assets/recoilize-black.png'));
});

// home page makes request for state diff gif
app.get('/4fb6916cd6339866649256f09e82ca94.gif', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/assets/state-diff.gif'));
});

app.get('/49aea3268dadc9186944f847434420c9.gif', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/assets/state-tree.gif'));
});

app.get('/8fe379ced7aaeeb115691cf77c966547.gif', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/assets/state-graph.gif'));
});

app.get('/01d99766c083b6f51ae08b9283c29c07.gif', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/assets/atom-network.gif'));
});

app.get('/23a9b6a1e3bd38f40a7384480919ad5f.gif', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/assets/component-graph.gif'));
});

app.get('/ad6d709e5e51c85d51871713fba29b2b.png', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/assets/install1.png'));
});

app.get('/ec02cee2120e2b34995dff2b713ae621.png', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/assets/install2.png'));
});

app.get('/c8b732dc8f42666ae0fb30fed9a52299.png', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/assets/install3.png'));
});

app.get('/65cb76bbee69001872e7a4242b1846ca.png', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/assets/install4.png'));
});
app.get('/3ef58976c5ecf2d1de8c51cf31bae4d8.png', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/assets/install5.png'));
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../index.html'));
});

// route error handler
app.use('*', (req, res) => {
  console.log('inside error handler');
  res.sendStatus(404);
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {
      err: 'An error occurred',
    },
  };
  const errorObj = Object.assign({}, defaultErr);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
