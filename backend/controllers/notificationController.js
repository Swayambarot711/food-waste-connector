const { sendEmail } = require('../config/email');

exports.sendNotification = async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    const result = await sendEmail(to, subject, message);

    if (result.success) {
      res.json({ success: true, message: 'Email sent!' });
    } else {
      res.status(500).json({ success: false, error: result.error });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};