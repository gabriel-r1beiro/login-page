const data = fetch("http://localhost:3333/users").then(res => res.json());
const response = console.log(data)