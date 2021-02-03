# bw-potluck-planner-backend


username: dustin
password: 1234

username: austin
password: password

username: jackson
password: abcdefg

username: gabe
password: secret


POST	/register	register new user
POST	/login		login user
POST	/potluck	create a new potluck
POST	/addGuest/:pid	add guest to a potluck (pid = potluck_id)
PUT	/potluck	update a potluck
DELETE	/potluck	delete a potluck
GET	/users		list all users
GET	/potlucks	list all potlucks
GET	/potluck/:id	list of potlucks that belong to a user id
GET	/guests		list of guests
GET	/guest/:id	guest details by id