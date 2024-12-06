const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the UAE Timezone API!');
});

// Route for getting the UAE time
app.get('/get-uae-time', (req, res) => {
    const now = new Date();
    const uaeTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }));

    res.json({
        utc_offset: "+04:00",
        timezone: "Asia/Dubai",
        day_of_week: uaeTime.getUTCDay(),
        day_of_year: Math.floor((uaeTime - new Date(uaeTime.getUTCFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)),
        datetime: uaeTime.toISOString(),
        utc_datetime: now.toISOString(),
        unixtime: Math.floor(now.getTime() / 1000),
        raw_offset: 14400,
        week_number: Math.ceil(((uaeTime - new Date(uaeTime.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24) + uaeTime.getUTCDay()) / 7),
        dst: false,
        abbreviation: "+04",
        dst_offset: 0,
        dst_from: null,
        dst_until: null,
        client_ip: req.ip
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
