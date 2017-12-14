const userData = require("./userData.json");

module.exports = {

	getUsers: (req, res, next) => {
        var users = userData;

        if (req.query.age) {
            var users = userData.filter(function(value) {
                if( value.age < req.query.age ) {
                    return value;
                }
            });
            return res.status(200).json(users);
        }

        if (req.query.lastname) {
            var users = userData.filter(function(value) {
                if( value.last_name == req.query.lastname ) {
                    return value;
                }
            });
            return res.status(200).json(users);
        }

        if (req.query.email) {
            var users = userData.filter(function(value) {
                if( value.email == req.query.email ) {
                    return value;
                }
            });
            return res.status(200).json(users);
        }

        if (req.query.favorites) {
            var users = userData.filter(function(value) {
                if( value.favorites.includes(req.query.favorites) ) {
                    return value;
                }
            });
            return res.status(200).json(users);
        }        
        return res.status(200).json(userData);
    },

    getUsersId: (req, res, next) => {
    	if (req.params.id) {
    		for (var obj of userData) {
    			if (obj.id == req.params.id) {
    				return res.json(obj);
    			}
    		}
    		res.status(404).json(null);
    	}
    },

    getAdmins: (req, res, next) => {
		var userArr = userData.filter( users => users.type == "admin");
		return res.status(200).json(userArr);
    },

    getNonAdmins: (req, res, next) => {
    	var userArr = userData.filter( users => users.type != "admin");
    	return res.status(200).json(userArr);
    },

    getUserByTypes: (req, res, next) => {
        var userArr = userData.filter( val => val.type == req.params.type);
		return res.status(200).json(userArr);
    },

    putUser: (req, res, next) => {
        var userArr = userData;
		for (let i = 0; i < userArr.length; i++) {
			if (req.params.id == userArr[i].id) {
				userArr[i] = req.body;
				return res.status(200).json(userArr);
			}
		}
		return res.status(200).json(userArr);
    },

    postUser: (req, res, next) => {
        var user = req.body;
		user.id = userData.length + 1;
		userData.push(user);
		return res.status(200).json(userData);
    },

    deleteUser: (req, res, next) => {
        var user = userData;
        for (let i = 0; i < user.length; i++) {
            if (user[i].id == req.params.id) {
                user.splice(i, 1);
                return res.status(200).json(user);
            }
        }
    }

}