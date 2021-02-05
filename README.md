# bw-potluck-planner-backend

Build week project for Track Team 19 at Lambda School. Potluck Planner is an app to organize potluck parties.

|METHOD     |    PATH       | Description
|---        | ---           | ---
|POST	    |/register	    |register new user
|POST	    |/login		    |login user
|POST	    |/addGuest/:pid	|add guest to a potluck (pid = potluck_id)
|PUT	    |/potluck	    |update a potluck
|DELETE	    |/potluck	    |delete a potluck
|GET	    |/users		    |list all users
|GET	    |/potlucks	    |list all potlucks
|GET	    |/potluck/:id	|list of potlucks that belong to a user id
|GET	    |/guests		|list of guests
|GET	    |/guest/:id	    |guest details by id
