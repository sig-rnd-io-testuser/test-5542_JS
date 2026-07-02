module.exports = {
   // If you want to debug regression tests, you will need the following.
   zapHostName: process.env.ZAP_HOST_NAME,
   zapPort: "8080",
   // Required from Zap 2.4.1. This key is set in Zap Options -> API _Api Key.
   zapApiKey: "v9dn0balpqas1pcc281tn5ood1",
   zapApiFeedbackSpeed: 5000 // Milliseconds.
};
