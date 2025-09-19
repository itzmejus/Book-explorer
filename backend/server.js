const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const GUTENDEX_BASE_URL = 'https://gutendex.com/books';

// Middleware
app.use(cors());
app.use(express.json());

// Get books with pagination and search
app.get('/api/books', async (req, res) => {
    try {
        const { page = 1, search = '' } = req.query;

        let gutendxUrl = `${GUTENDEX_BASE_URL}?page=${page}`;
        if (search) {
            gutendxUrl += `&search=${encodeURIComponent(search)}`;
        }

        const response = await axios.get(gutendxUrl);

        // Return the data
        res.json(response.data);

    } catch (error) {
        console.error('Error fetching books:', error.message);
        res.status(500).json({
            error: 'Failed to fetch books'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;