const mongoose = require('mongoose');

const metaSchema = new mongoose.Schema(
    {
        balance: {
            type: Number,
            required: true,
            default: 0,
        },


        identity: {
            type: String,
            required: true,
            default: 'test'
        }
    }
);

const Meta = mongoose.model('Meta',metaSchema);

module.exports = Meta;