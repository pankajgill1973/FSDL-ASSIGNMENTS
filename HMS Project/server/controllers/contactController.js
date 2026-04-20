const Message = require('../models/Message');

const sendMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }
        const newMessage = await Message.create({ name, email, message });
        res.status(201).json({ success: true, message: "Message sent successfully!", data: newMessage });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    sendMessage
};
