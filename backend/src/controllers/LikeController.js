const Dev = require('../model/Dev')

module.exports = {

    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetrDev = await Dev.findById(devId);

        if (!targetrDev) return res.status(400).json({ error: 'Dev not exist'} );

        if (targetrDev.likes.includes(loggedDev._id))  console.log('MATCHED');

        loggedDev.likes.push(targetrDev._id);

        await loggedDev.save();


        return res.json( loggedDev );
    }

}
