    const { Schema, model} = require('mongoose');

    const DevSchema = new Schema({
        name: {
            type: String,
            //required: true,
            default: 'NoName',
        },
        user: {
            type: String,
            required: true,
        },
        bio: String,
        avatar: {
            type: String,
            required: true,
        },
        likes: [{
            type: Schema.Types.ObjectId,
            ref: 'Dev',
        }],
        dislikes: [{
            type: Schema.Types.ObjectId,
            ref: 'Dev',
        }]
    }, {
        timestamps: true,
    });
    //console.log(DevSchema.name);
    // DevSchema.post('save', (error, doc, next) => {
    //     // console.log('aqui o erro', error);
    //     // console.log('olha o name', this.name);
    //     Schema.find({ } , function (err, items) {
    //         console.log(items);
    //         console.log(err);
    //         items.forEach( function(item) {
    //             console.log(item);
    //         });
    //     });
    // })

    module.exports = model('Dev', DevSchema);

