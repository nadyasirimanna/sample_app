const app = require('express')();
const { PORT = 4000 } = process.env;


app.get('/', function (req, res) {
  res.send('hello world nodejs gke with new branch development 2')
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
