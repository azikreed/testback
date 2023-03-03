const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())

app.get("/api/users", (req, res) => {
    res.json({
        name: "Ali Abdullayev",
        image: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        username: "azikreed",
        email: "azikreed@gmail.com"
    })
});

app.get("/api", (req, res) => {
    res.send("Hello World okala!")
});

app.get("/api/ali", (req, res) => {
    res.json([
        {
            name: "Ali Abdullayev",
            job: "Backend Developer",
            favorites: [
                {
                    name: 'Web Applications',
                    description: "Web Application is something something something bla bla bla"
                },
                {
                    name: 'REST APIs',
                    description: "REST API is something something something bla bla bla"
                }
            ],
            projects: ["http://azikreed.uz", "https://sth.com"],
            clients: ["OqTepa Lavash", "Food Town", "MyTaxi"],
            feedbacks: [
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                },
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                }
            ],
            photo: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
            email: "azikreed@gmail.com"
        }
    ])
});

app.get("/api/abdumurod", (req, res) => {
    res.json([
        {
            name: "Abdumurod",
            job: "Frontend Developer",
            favorites: [
                {
                    name: 'Web Applications',
                    description: "Web Application is something something something bla bla bla"
                },
                {
                    name: 'REST APIs',
                    description: "REST API is something something something bla bla bla"
                }
            ],
            projects: ["http://azikreed.uz", "https://sth.com"],
            clients: ["OqTepa Lavash", "Food Town", "MyTaxi"],
            feedbacks: [
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                },
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                }
            ],
            photo: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
            email: "azikreed@gmail.com"
        }
    ])
});

app.get("/api/sanjar", (req, res) => {
    res.json([
        {
            name: "Sanjar",
            job: "Frontend Developer",
            favorites: [
                {
                    name: 'Web Applications',
                    description: "Web Application is something something something bla bla bla"
                },
                {
                    name: 'REST APIs',
                    description: "REST API is something something something bla bla bla"
                }
            ],
            projects: ["http://azikreed.uz", "https://sth.com"],
            clients: ["OqTepa Lavash", "Food Town", "MyTaxi"],
            feedbacks: [
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                },
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                }
            ],
            photo: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
            email: "azikreed@gmail.com"
        }
    ])
});

app.get("/api/samandar", (req, res) => {
    res.json([
        {
            name: "Samandar",
            job: "Frontend Developer",
            favorites: [
                {
                    name: 'Web Applications',
                    description: "Web Application is something something something bla bla bla"
                },
                {
                    name: 'REST APIs',
                    description: "REST API is something something something bla bla bla"
                }
            ],
            projects: ["http://azikreed.uz", "https://sth.com"],
            clients: ["OqTepa Lavash", "Food Town", "MyTaxi"],
            feedbacks: [
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                },
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                }
            ],
            photo: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
            email: "azikreed@gmail.com"
        }
    ])
});

app.get("/api/behruz", (req, res) => {
    res.json([
        {
            name: "Behruz",
            job: "Frontend Developer",
            favorites: [
                {
                    name: 'Web Applications',
                    description: "Web Application is something something something bla bla bla"
                },
                {
                    name: 'REST APIs',
                    description: "REST API is something something something bla bla bla"
                }
            ],
            projects: ["http://azikreed.uz", "https://sth.com"],
            clients: ["OqTepa Lavash", "Food Town", "MyTaxi"],
            feedbacks: [
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                },
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                }
            ],
            photo: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
            email: "azikreed@gmail.com"
        }
    ])
});

app.get("/api/xurshid", (req, res) => {
    res.json([
        {
            name: "Xurshid",
            job: "Frontend Developer",
            favorites: [
                {
                    name: 'Web Applications',
                    description: "Web Application is something something something bla bla bla"
                },
                {
                    name: 'REST APIs',
                    description: "REST API is something something something bla bla bla"
                }
            ],
            projects: ["http://azikreed.uz", "https://sth.com"],
            clients: ["OqTepa Lavash", "Food Town", "MyTaxi"],
            feedbacks: [
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                },
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                }
            ],
            photo: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
            email: "azikreed@gmail.com"
        }
    ])
});

app.get("/api/asadbek", (req, res) => {
    res.json([
        {
            name: "Asadbek",
            job: "Frontend Developer",
            favorites: [
                {
                    name: 'Web Applications',
                    description: "Web Application is something something something bla bla bla"
                },
                {
                    name: 'REST APIs',
                    description: "REST API is something something something bla bla bla"
                }
            ],
            projects: ["http://azikreed.uz", "https://sth.com"],
            clients: ["OqTepa Lavash", "Food Town", "MyTaxi"],
            feedbacks: [
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                },
                {
                    name: "Muhammadaziz",
                    job: "Frontend Developer",
                    description: "Ali yaxshi bola. Chunki u meni o'rtog'im :)",
                }
            ],
            photo: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
            email: "azikreed@gmail.com"
        }
    ])
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server has been working on http://localhost:${PORT}`);
})