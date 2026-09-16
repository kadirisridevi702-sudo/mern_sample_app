let express = require("express");
let hrRoutes = require("./routes/hr_Routes");
let app = express();
app.use("/api/hr", hrRoutes);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});