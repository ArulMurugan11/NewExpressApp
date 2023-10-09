const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
async function createUser(req, res) {
    console.log("pl");

}
async function getUser(req, res) {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });

}


module.exports = {
    createUser,
    getUser
}