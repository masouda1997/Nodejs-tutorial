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

const logger = (req, _res, next) => {
	console.log(req.method, req.url);
	next();
};
const jsonMiddleware  = (_req , res , next)=>{
	res.setHeader("Content-Type", "application/json");
	next()
}
//route handler for GET /api/users
const getUsersHandler = (_req,res)=>{
	res.write(JSON.stringify(users));
	res.end()
}
//route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
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
};
// not found handler 
const notFoundHandler = (_req, res) => {
	res.statusCode = 404;
	res.write(JSON.stringify({ Message: "route not found" }));
	res.end();
}
//user post req 
const createUserHandler = (req, res)=>{
	let body = ''
	req.on('data', (chunk)=>{
		body+=chunk.toString()
	})
	req.on('end' , ()=>{
		try {
			const newsUser = JSON.parse(body)
			users.push(newsUser)
			res.statusCode = 201
			res.write(JSON.stringify(newsUser))
		} catch (error) {
			res.statusCode = 400
			res.write(JSON.stringify({error:"invalid JSON"}))
		}
		res.end()
	})
	req.on('error', (err)=>{
		console.log(err);
		res.statusCode = 500;
		res.write(JSON.stringify({ error: 'Internal Server Error' }));
		res.end();
	})
}

const server = createServer((req, res) => {
	logger(req, res, () => {
		jsonMiddleware(req, res, () => {
			if (req.url === "/api/users" && req.method === "GET") {
				getUsersHandler(req, res);
			} else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
				getUserByIdHandler(req, res);
			} else if (req.url === '/api/users' && req.method ==='POST') {
				createUserHandler(req, res)
			}else {
				notFoundHandler(req, res);
			}
		});
	});
});

server.listen(PORT, () => {
	console.log(`✅server is running on port ${PORT}`);
});
