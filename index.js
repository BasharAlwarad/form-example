const express = require('express');
const app = express();

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the HTML file containing the form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/about', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const salary = req.body.salary;
  const dob = req.body.dob;
  console.log({
    name,
    email,
    salary,
    dob,
  });
  const urlParams = new URLSearchParams({
    name,
    email,
    salary,
    dob,
  });

  res.redirect('/about?' + urlParams.toString());
});

// Serve the about.html file
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

// const express = require('express');
// const app = express();

// // Parse JSON and URL-encoded bodies
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve the HTML file containing the form
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // Handle form submission
// app.post('/about', (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const salary = req.body.salary;
//   const dob = req.body.dob;
//   console.log({
//     name,
//     email,
//     salary,
//     dob,
//   });
//   const urlParams = new URLSearchParams({
//     name,
//     email,
//     salary,
//     dob,
//   });

//   res.redirect('/about?' + urlParams.toString());

//   res.sendFile(__dirname + '/about.html');
// });

// app.listen(8080, () => {
//   console.log('Server is running on http://localhost:8080');
// });
