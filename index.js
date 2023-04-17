const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/data', (req, res) => {
  const data = {
    "Offers": [
        {
            "Id": "Zuora_2c92a0fc636cad9f01636d88a6f81f54",
        },
        {
            "Id": "Zuora_8a12801c865454c301865a4357091153",
        },
        {
            "Id": "Zuora_2c92a0fc636cad9f01636de9e33c2620",
        }
    ],
    "Addons": [
        {
            "Id": "8a1287c5870ce3d901870ec4e45a6695",
        },
        {
            "Id": "8a1287c5870ce3d901870ec4e45a6695",
        }
    ],
  };

  res.json(data);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
