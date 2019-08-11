const axios = require('axios');
const  Dev = require('../model/Dev')

module.exports = {
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
