const express = require("express");

const app = express();

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// The information required includes:
// Slack name
// Current day of the week
// Current UTC time (with validation of +/-2)
// Track
// The GitHub URL of the file being run
// The GitHub URL of the full source code.
// A  Status Code of Success

// sample submission

// {
//     "slack_name": "example_name",
//     "current_day": "Monday",
//     "utc_time": "2023-08-21T15:04:05Z",
//     "track": "backend",
//     "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
//     "github_repo_url": "https://github.com/username/repo",
//     "status_code": 200
//   }

app.get('/', (req, res) => {
    res.send('Route shida ni gani?')
})

app.get("/api", (req, res) => {
  // picking query parameters
  const slack_name = req.query.slack_name || 'wechuli_simiyu';
  const track = req.query.track || 'backend';

  // get day of the week
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentTime = new Date();
  let day = weekday[currentTime.getDay()];
//   console.log(`Today's ${day}`);

  // get UTC time in ISO string
  let utcTime = currentTime.toISOString();

  res.status(200).json({
    slack_name: slack_name,
    current_day: day,
    utc_time: utcTime,
    track: track,
    github_file_url: "https://github.com/wechu07/zuriendpoint/app.js",
    github_repo_url: "https://github.com/wechu07/zuriendpoint",
    status_code: 200,
  });
});

const port = 1738;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
