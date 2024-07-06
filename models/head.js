const mongoose = require('mongoose');

const headSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
        },

        headtitle: {
            type: String,
            required: true,
        },

        headdesc: {
            type: String,
            required: true,
        },
        
    }
);

const Head = mongoose.model('Head',headSchema);

module.exports = Head;