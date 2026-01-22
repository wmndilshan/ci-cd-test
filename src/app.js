const express = require('express');
const { sum, subtract, multiply } = require('./utils/calculator');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'CI/CD Simulation API',
        version: '1.0.0',
        status: 'running'
    });
});

// Calculator endpoints
app.post('/api/sum', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Both a and b must be numbers' });
    }

    const result = sum(a, b);
    res.json({ operation: 'sum', a, b, result });
});

app.post('/api/subtract', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Both a and b must be numbers' });
    }

    const result = subtract(a, b);
    res.json({ operation: 'subtract', a, b, result });
});

app.post('/api/multiply', (req, res) => {
    const { a, b } = req.body;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Both a and b must be numbers' });
    }

    const result = multiply(a, b);
    res.json({ operation: 'multiply', a, b, result });
});

// Start server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
