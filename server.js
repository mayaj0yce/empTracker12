const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "movie_db",
  },
  console.log(`Connected to the movie_db database.`)
);

// It's done when the /api/movies route renders a list of all movies.
app.get("/api/movies", (req, res) => {
  let movieQuery = "select * from movie_db.movies";

  db.query(movieQuery, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});



// It's done when the /api/add-movie route successfully adds a movie when tested using Insomnia.
app.post("/api/add-movie", (req, res) => {
    let movieQuery = "";
  
    
  });

// It's done when the /api/update-review route successfully updates a movie when tested using Insomnia.
app.put("/api/update-review", (req, res) => {
    let movieQuery = "";
  
    
  });

// It's done when the /api/movie/:id route deletes a route when tested using Insomnia.
app.delete("/api/movie/:id", (req, res) => {
    let movieQuery = "";
  
    
  });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
