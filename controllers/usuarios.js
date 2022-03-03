    const { response } = require('express');





    const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'no name', apikey, page = 1, limit } = req.query;
        
        res.json({
                msg:'get a mi API - controllers',
                q,
                nombre,
                apikey,
                page,
                limit
            });
        }

    const usuariosPost = (req, res = response) => {
        
        const body = req.body;

        res.json({
            msg:'post a mi API - controllers,',
            body //tambien se puede desestructurar lo que se recibe en el body, para solo recibir lo que se quiere.
            // nombre,
            // edad
        });
    }

    const usuariosPut = (req, res = response) => {
        
        const { id } = req.params;
        
        res.json({    
                msg:'put a mi API - controllers',
                id
            });
    }

    const usuariosPatch = (req, res = response) => {

        res.json({
                msg:'pathc a mi API - controllers'
            });
        }
    const usuariosDelete = (req, res = response) => {

        res.json({
                msg:'delete a mi API - controllers'
            });
    }
    
    
    module.exports = {

        usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosPatch,
        usuariosDelete
    }