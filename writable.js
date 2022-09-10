const {createReadStream, createWriteStream} = require('fs');
const readStream = createReadStream('./anime.mp4');
const writeStream = createWriteStream('./copia.mp4');

readStream.on('data', (chunk) => {
  writeStream.write(chunk);
})

readStream.on('error', (err) => {
  console.log("A ocurrido un error");
  console.error(err);
})

readStream.on('end', () => {
  writeStream.end();
})

writeStream.on('close', () => {
  process.stdout.write('archivo copiado \n');
})