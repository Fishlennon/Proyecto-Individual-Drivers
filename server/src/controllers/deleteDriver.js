const {Driver} = require('../db')

const deleteDriver = async (req, res) => {

    try {
        const {id} = req.params
    


     await Driver.destroy({where: {id: id}});

        res.status(200).send('Driver Eliminated');
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {deleteDriver}