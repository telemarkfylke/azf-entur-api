const { app } = require("@azure/functions");
const { downloadGTFSFileAndImportLines } = require("../lib/jobs/getLines.js");
const { logger } = require("@vestfoldfylke/loglady");

app.timer("processGTFSFileData", {
  schedule: "0 4 * * *", // Every day at 04:00
  handler: async () => {
    logger.info("Starting scheduled function processGTFSFileData");
    const result = await downloadGTFSFileAndImportLines();
    logger.info("Finished scheduled function processGTFSFileData: {@Result}", result);
    return { status: 200, jsonBody: result };
  }
});
