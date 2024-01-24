const express = require('express');
const { OpenAI } = require('openai');
const cors = require('cors');

const app = express();
const port = 3000;

// Initialize OpenAI with your API key
const openai = new OpenAI({ apiKey: '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'});

app.use(cors());
app.use(express.json());

var firstIntialMessage = "You are a lawyer assistant and I need you help to ask me 5 most imporatant questions about my legal case, my case is: ";
var secondInitialMessage = " Please keep the role of the assistant and continue the conversation with the questions short and each question under 250 characters. I want you to ask the questions one by one, so first ask me the question, wait for my response, and then ask the other question. All the questions should start with Question {question_number}. Please write the question in the language which the user wrote."
app.post('/ask', async (req, res) => {
    try {
      // Extracting the query from the request body
      const query = firstIntialMessage + req.body.query + secondInitialMessage;
      console.log("======" ,query);
      // Sending the query to OpenAI
      const response = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant for legal cases."},
                    {role : "user", content: `${query}`}],
        model: 'gpt-4', // You can change the model as needed
        max_tokens: 250,
      });
  
      // Sending back the response from OpenAI
      res.json({ response: response.choices[0] });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
