const fsPromises = require('fs').promises;

async function openAndClose() {
  let filehandle;
  try {
    filehandle = await fsPromises.open('howoldisJaxNode.txt', 'r');
    const result = await filehandle.readFile('utf8'); 
    console.log(result);
  } finally {
    if (filehandle !== undefined)
      await filehandle.close();
  }
}

openAndClose();
