const { app } = require("@azure/functions");
const { downloadGTFSFileAndImportLines } = require("../lib/jobs/getLines.js");
const { logger } = require("@vestfoldfylke/loglady");

const handleProcessGTFSFileData = async () => {
  logger.info("Starting scheduled function processGTFSFileData");

  const result = await downloadGTFSFileAndImportLines();
  logger.info("Finished scheduled function processGTFSFileData: {@Result}", result);
};

app.timer("processGTFSFileData", {
  schedule: "%PROCESS_GTFS_FILE_DATA_SCHEDULE%",
  handler: handleProcessGTFSFileData
});
