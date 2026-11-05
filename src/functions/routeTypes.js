const { app } = require("@azure/functions");
const { getCurrentValidRouteTypes } = require("../lib/data/currentValidRouteTypes.js");

app.http("routeTypes", {
  methods: ["GET"],
  authLevel: "function",
  handler: async () => {
    // Returns the route types found in the GTFS data from EnTur
    const routeTypes = await getCurrentValidRouteTypes();

    return { status: 200, jsonBody: routeTypes };
  }
});
