const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Route to fetch data from the external URL
app.get('/api/fetchData', async (req, res) => {
  try {
    const response = await axios.get('https://rem.creativerp.org/cv/web/ApisController.php?form_no=CV2210028');
    const data = response.data;
    
    console.log('Fetched Data:', JSON.stringify(data, null, 2)); // Display data in the terminal
    res.json(data);  // Send the data to the frontend
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
