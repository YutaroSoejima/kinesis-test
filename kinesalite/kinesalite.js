const kinesalite = require('kinesalite');
const kinesaliteServer = kinesalite({ path: './data' })

kinesaliteServer.listen(4567, err => {
  if (err) throw err;
  console.log('Kinesalite started on port 4567');
});
