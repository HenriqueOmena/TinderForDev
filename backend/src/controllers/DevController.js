const axios = require('axios');
const  Dev = require('../model/Dev')

module.exports = {

    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } }, //$not Equal
                { id_: { $nin: loggedDev.likes }}, //Not In
                { id_: { $nin: loggedDev.dislikes }},
            ]
        })

        return res.json(users);
    },

    async store(req, res) {
        const{ username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if (userExists) {
            return res.json(userExists)
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        console.log(response.data);

        //desestruturando dados  do resposnse.data
        const { name, bio, avatar_url: avatar} = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })

        return res.json(dev);
    }
}
