
const express = require('express');

const fs = require('fs')

const path = require('path')

const app = express()

const PORT = process.env.PORT || 8000

app.use =(express.json())

app.use = (express.urlencoded({extended:true}));

app.post('/createFile', (req, res) => {
  // const folderPath = '/data'; // specify the folder path here
  const currentDate = new Date();
  const fileName = 'data.txt';

  // const filePath = path.join(folderPath, fileName);

  const fileContent = currentDate.toString(); // or any other content you want to write to the file

  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating file');
    } else {
      // console.log(`File created at ${filePath}`);
      res.status(200).send('File created successfully');
    }
  });
});

app.get('/getTextFiles', (req, res) => {
  const folderPath = path.join(__dirname+'/data.txt'); // specify the folder path here

  fs.readFile(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving files');
    } else {
      // const textFiles = files.filter(file => path.extname(file) === '.txt');
      console.log(files);
      res.status(200).send(files);
      
    }
  });
});

app.listen(8000, () => {
  console.log(`Server listening on port ${PORT}`);
});