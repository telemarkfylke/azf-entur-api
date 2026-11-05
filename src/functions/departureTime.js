const { app } = require("@azure/functions");
const { getDepartureTime } = require("../lib/helpers/enturGraphQLQueries/getDepartureTime.js");

app.http("departureTime", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  route: "departureTime/{quayId}/{date}/{line}",
  handler: async (request) => {
    const { quayId, date, line } = request.params;
    const departureTimes = await getDepartureTime(quayId, date, line);
    return { status: 200, jsonBody: departureTimes };
  }
});
