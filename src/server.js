// server.js (Express.js server)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

// Connect to MongoDB (replace 'your-database-url' with your actual MongoDB URL)
mongoose.connect('mongodb://localhost:27017/brottful', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the schema for survey responses
const surveyResponseSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now }, // Timestamp when the survey was submitted
  feeling: String, // Response to the "I feel..." question
  hoursSlept: String, // Response to the "Hours I slept last night..." question
  motivation: String, // Response to the "I'm feeling motivated..." question
  mealsToday: String, // Response to the "Meals I ate today..." question
  energyLevel: String, // Response to the "My energy level is..." question
  stressLevel: String // Response to the "My stress level is..." question
});

const SurveyResponse = mongoose.model('SurveyResponse', surveyResponseSchema);

app.use(bodyParser.json());

// Create a route to handle survey submissions
app.post('/submit-survey', (req, res) => {
  const surveyData = req.body; // Assuming the survey data is sent in the request body
  const newSurveyResponse = new SurveyResponse(surveyData);

  newSurveyResponse.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving survey response');
    } else {
      res.status(200).send('Survey response saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
