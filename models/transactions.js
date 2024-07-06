const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        timestamp: {
            type: String,
            required: true,
            default: Date.now(),
        },

        transact_head: {
            type: String,
            required: true,
        },

        transact_amt: {
            type: Number,
            required: true,
        },

        transact_type: {
            type: String,
            required: true,
        },

        transact_desc: {
            type: String,
            required: true,
        }
    }
);

const Transaction = mongoose.model('Transaction',transactionSchema);

module.exports = Transaction;