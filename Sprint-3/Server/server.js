const express = require('express');
const app = express();
const PORT = 8080;
const videoRoutes = require('./routes/videoRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/videos', videoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
});