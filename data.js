// Byte Club data. This data is made up for this course.
// These sessions, days, levels and spaces are invented for practice. Byte Club is not a real club.
// What this data cannot tell you: anything about a real club, real learners or real places.

const sessions = [
  { name: "Your first web page",         day: "Monday",    level: "Beginner", topic: "Web",    spacesLeft: 6 },
  { name: "Maze game",                   day: "Monday",    level: "Improver", topic: "Games",  spacesLeft: 3 },
  { name: "Robot starter kit",           day: "Tuesday",   level: "Beginner", topic: "Robots", spacesLeft: 4 },
  { name: "Charts from a class survey",  day: "Tuesday",   level: "Advanced", topic: "Data",   spacesLeft: 2 },
  { name: "Style it with CSS",           day: "Wednesday", level: "Improver", topic: "Web",    spacesLeft: 5 },
  { name: "Line-following robot",        day: "Wednesday", level: "Advanced", topic: "Robots", spacesLeft: 0 },
  { name: "Quiz game",                   day: "Thursday",  level: "Beginner", topic: "Games",  spacesLeft: 8 },
  { name: "Count it with code",          day: "Thursday",  level: "Improver", topic: "Data",   spacesLeft: 7 },
  { name: "Buttons that do things",      day: "Friday",    level: "Advanced", topic: "Web",    spacesLeft: 3 },
  { name: "Design a game level",         day: "Friday",    level: "Beginner", topic: "Games",  spacesLeft: 5 },
  { name: "Robot dance-off",             day: "Saturday",  level: "Improver", topic: "Robots", spacesLeft: 6 },
  { name: "Your first chart",            day: "Saturday",  level: "Beginner", topic: "Data",   spacesLeft: 10 }
];

// Facts that are true of this file (use them to check your conclusions):
// 12 sessions. 5 are for Beginners, 4 for Improvers, 3 for Advanced. 3 sessions for each topic.
// 1 session has no spaces left (Line-following robot). Beginner sessions run every day except Wednesday.
// The club never meets on Sunday, so a filter for day === "Sunday" gives an empty list.

// Practice data for the labs on Days 6 to 8. Do not change it.
// Pathfinder: Web Creator practice data. MADE UP FOR THIS COURSE.
// These clubs, venues, days and prices are invented for practice.
// What this data cannot tell you: anything about real clubs, real prices or real places.

const clubs = [
  { name: "Chess Club",          day: "Monday",    ageGroup: "13-15", costKsh: 0,    spacesLeft: 6,  venue: "Library" },
  { name: "Robotics Lab",        day: "Monday",    ageGroup: "13-15", costKsh: 1500, spacesLeft: 2,  venue: "Science Room" },
  { name: "Junior Football",     day: "Tuesday",   ageGroup: "10-12", costKsh: 500,  spacesLeft: 10, venue: "Main Field" },
  { name: "Drama Group",         day: "Tuesday",   ageGroup: "13-15", costKsh: 0,    spacesLeft: 0,  venue: "Hall" },
  { name: "Coding Club",         day: "Wednesday", ageGroup: "13-15", costKsh: 1000, spacesLeft: 4,  venue: "Computer Room" },
  { name: "Art Studio",          day: "Wednesday", ageGroup: "10-12", costKsh: 800,  spacesLeft: 7,  venue: "Art Room" },
  { name: "Debate Society",      day: "Thursday",  ageGroup: "16-18", costKsh: 0,    spacesLeft: 12, venue: "Room 4" },
  { name: "Swimming",            day: "Thursday",  ageGroup: "10-12", costKsh: 1200, spacesLeft: 3,  venue: "Pool" },
  { name: "Music Band",          day: "Friday",    ageGroup: "13-15", costKsh: 600,  spacesLeft: 5,  venue: "Music Room" },
  { name: "Photography Walk",    day: "Friday",    ageGroup: "13-15", costKsh: 300,  spacesLeft: 8,  venue: "Meet at Gate" },
  { name: "Senior Basketball",   day: "Saturday",  ageGroup: "16-18", costKsh: 400,  spacesLeft: 1,  venue: "Court" },
  { name: "Maths Challenge",     day: "Saturday",  ageGroup: "10-12", costKsh: 0,    spacesLeft: 9,  venue: "Room 2" }
];

// Facts that are true of this file (use them to check your conclusions):
// 12 clubs. 4 are free (costKsh is 0). 6 are for ages 13-15. 1 club has no spaces left (Drama Group).
// No club for ages 16-18 runs on Friday, so a filter for that gives an empty list.
