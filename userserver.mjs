import { createServer } from "http";
const PORT = process.env.PORT || 5001;

const users = [
	{
		id: 1,
		name: "John Doe",
		email: "johndoe@example.com",
	},
	{
		id: 2,
		name: "Jane Smith",
		email: "janesmith@example.com",
	},
	{
		id: 3,
		name: "Jim Brown",
		email: "jimbrown@example.com",
	},
	{
		id: 4,
		name: "Jill White",
		email: "jillwhite@example.com",
	},
	{
		id: 5,
		name: "Jake Black",
		email: "jakeblack@example.com",
	},
	{
		id: 6,
		name: "Jenny Green",
		email: "jennygreen@example.com",
	},
	{
		id: 7,
		name: "Jack Blue",
		email: "jackblue@example.com",
	},
	{
		id: 8,
		name: "Jessie Yellow",
		email: "jessyyellow@example.com",
	},
	{
		id: 9,
		name: "Jerry Orange",
		email: "jerryorange@example.com",
	},
	{
		id: 10,
		name: "Jordan Purple",
		email: "jordanpurple@example.com",
	},
];

const server = createServer((req, res) => {
	
	if (req.url === "/api/users" && req.method === "GET") {
		res.setHeader("Content-Type", "application/json");
		res.write(JSON.stringify(users));
		res.end();
	} else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
		const id = req.url.split("/")[3];
		const user = users.find((user) => user.id === parseInt(id));
		res.setHeader("Content-Type", "application/json");
		if (user) {
			res.write(JSON.stringify(user));
		} else {
			res.statusCode = 404;
			res.write(JSON.stringify({ Message: "user not found" }));
		}
		res.end();
	} else {
		res.setHeader("Content-Type", "application/json");
		res.statusCode = 404;
		res.write(JSON.stringify({ Message: "route not found" }));
		res.end();
	}
});

server.listen(PORT, () => {
	console.log(`✅server is running on port ${PORT}`);
});
