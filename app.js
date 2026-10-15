// console.log("Hi JS!");

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(
    `HTTP ${req.method} | ${req.url} | ${new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}`,
  );
  if (req.method === "GET" && req.url === "/") {
    res.end("Hi, user!");
  } else if (req.method === "GET" && req.url === "/about") {
    res.end("This app was written by RisovoePole for lab1.");
  } else if (req.method === "GET" && req.url === "/student") {
    const student = {
      name: "Victor",
      surname: "Anisimov",
      specialization: "Applied Informatics",
      student_group: "IA2403",
    };
    const text = Object.entries(student).map(([key, value]) => {
      return `${key} - ${value}`;
    });
    res.end(text.join("\n"));
  } else if (req.method === "GET" && req.url === "/api/student") {
    const student = {
      name: "Victor",
      surname: "Anisimov",
      specialization: "Applied Informatics",
      student_group: "IA2403",
    };
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(student));
  } else if (req.method === "GET" && req.url === "/time") {
    res.end(
      new Date().toLocaleDateString() + "\t" + new Date().toLocaleTimeString(),
    );
  } else if (req.method === "GET" && req.url === "/api/courses") {
    const disciplines = [
      {
        discipline_name: "Math",
        professor_full_name: "professor A",
        credits: "20",
      },
      {
        discipline_name: "Docker",
        professor_full_name: "Croitor",
        credits: "40",
      },
      {
        discipline_name: "Rust",
        professor_full_name: "Mr. Crabs",
        credits: "200",
      },
    ];

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(disciplines));
  } else if (req.method === "GET" && req.url === "/text") {
    res.end("sample of text :smile:");
  } else {
    res.statusCode = 404;
    res.end("404 - Page not found");
  }
});
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
