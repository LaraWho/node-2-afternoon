module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const { name, description, price, image_url } = req.body;

        dbInstance.create_product([name, description, price, image_url])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Wooops! Sorry guys! The party is OVER!"})
            console.log(err)
        })
    },

    getOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req.params;

        dbInstance.read_product( params.id )
        .then( product => res.sendStatus(200).send(product) )
        .catch( err => {
            res.status(500).send({errorMessage: "Wooops! Sorry guys! The party is OVER!"})
            console.log(err)
        })
    },

    getAll: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
        .then( products => res.sendStatus(200).send(products) )
        .catch( err => {
            res.status(500).send({errorMessage: "Wooops! Sorry guys! The party is OVER!"})
            console.log(err)
        })
    },

    update: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req.params;

        dbInstance.update_products([ params.id, query.desc ])
        .then( () => res.sendStatus(200) ) 
        .catch( err => {
            res.status(500).send({errorMessage: "Wooops! Sorry guys! The party is OVER!"})
            console.log(err)
        }) 
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req.params;

        dbInstance.delete_product( params.id )
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Wooops! Sorry guys! The party is OVER!"})
            console.log(err)
        } )
    }
    
};