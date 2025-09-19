const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const GUTENDEX_BASE_URL = 'https://gutendex.com/books';

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running")
})

// Get books with pagination and search
app.get('/api/books', async (req, res) => {
  try {
    const { page = 1, search = '' } = req.query;

    let gutendxUrl = `${GUTENDEX_BASE_URL}?page=${page}`;
    if (search) {
      gutendxUrl += `&search=${encodeURIComponent(search)}`;
    }

    const response = await axios.get(gutendxUrl);

    res.json(response.data);

  } catch (error) {
    console.error('Error fetching books:', error.message);
    res.status(500).json({
      error: 'Failed to fetch books'
    });
  }
});

//  Get book by ID
app.get('/api/books/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const gutendxUrl = `${GUTENDEX_BASE_URL}/${id}`;
    const response = await axios.get(gutendxUrl);

    res.json(response.data);

  } catch (error) {
    console.error('Error fetching book by ID:', error.message);
    res.status(500).json({
      error: 'Failed to fetch book by ID'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;