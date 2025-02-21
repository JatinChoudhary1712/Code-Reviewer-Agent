const aiService = require("../services/ai.service");

// Define generateContent function
const generateContent = async (req, res) => {
    res.send("This is a placeholder for generateContent.");
};

// Export functions correctly
module.exports = {
    getResponse: async (req, res) => {
        const prompt = req.query.prompt;

        if (!prompt) {
            return res.status(400).send("Prompt is required");
        }

        const response = await aiService(prompt);

        res.send(response);
    },
    generateContent 
};
