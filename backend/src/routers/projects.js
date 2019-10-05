const Pool = require("pg").Pool;
var express = require("express");
var router = express.Router();

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "personal_site",
  password: "postgres",
  port: 5432,
});
router.get("/all", function(request, response) {
  pool.query("SELECT * FROM projects", (err, res) => {
    if (err) {
      console.log(err);
      response.json(err);
    } else {
      console.log(res.rows);
      response.json(res.rows);
    }
  });
});

module.exports = router;
