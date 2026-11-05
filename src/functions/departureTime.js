const { app } = require("@azure/functions");
const { getDepartureTime } = require("../lib/helpers/enturGraphQLQueries/getDepartureTime.js");

const handleDepartureTime = async (request) => {
  const { quayId, date, line } = request.params;
  const departureTimes = await getDepartureTime(quayId, date, line);
  return { status: 200, jsonBody: departureTimes };
};

app.http("departureTime", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  route: "departureTime/{quayId}/{date}/{line}",
  handler: handleDepartureTime
});
