const { app } = require("@azure/functions");
const { downloadGTFSFileAndImportLines } = require("../lib/jobs/getLines.js");

app.http("devTest", {
  methods: ["GET"],
  authLevel: "function",
  handler: async () => {
    const result = await downloadGTFSFileAndImportLines();
    return { status: 200, jsonBody: result };
  }
});
