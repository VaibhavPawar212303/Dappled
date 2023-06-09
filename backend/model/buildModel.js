const mongoose = require('mongoose');

const buildSchema = mongoose.Schema({

    ProjectName: {
        type: String,
        required: [true, 'Project name is required'],
    },
    status: {
        type: String,
        required: [true, 'status is required'],
    },
    Build_Description: {
        type: String,
        required: [true, 'Build Describtion is required'],
    },
    BuildStartAt: {
        type: String,
        required: [true, 'Build start time is required'],
    },
    BuildEndAt: {
        type: String,
        required: [true, 'Build end time is required'],
    },
    totalTests: {
        type: String,
        required: [true, 'Total Test count is required'],
    },
    totalTestsSkipped: {
        type: String,
        required: [true, 'Total Test skipped is required'],
    },

}, {
    timestamps: true,
})

module.exports = mongoose.model('Build', buildSchema);