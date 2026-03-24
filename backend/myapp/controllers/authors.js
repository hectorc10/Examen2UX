/*const { Authors } = require("../models");
let getAuthors = async (req, res) => {
    try {

        let authors = await Authors.findAll();

        if (authors.length <=0) {

            Response.status(204).json({
                status: 204,
                message: "No se encontraron autores"
            })

        } else {
            Response.status(200).json({
                status: 200,
                data: authors
            });

        }

    } catch (error) {

        Response.status(500).json({
            status: 500,
            message: error.message
        });

    }
}
let createAuthor = async (req, res) => {
  try {

    const author = await Autor.create(req.body);
    if(request.body.length===undefined ||request.body.lastName===undefined || request.body.firstName===undefined || request.body.birth_year===undefined || request.body.nationality===undefined){
      Response.status(406).json({
        status: 406,
        message: "No se recibieron datos"
      })

      }if (request.body.firstName===undefined || request.body.firstName=== ""){
        
        request.body.firstName= "Anonimo"
        

      }if(request.body.lastName=== undefined || request.body.lastName=== ""){
       request.body.lastName= "Anonimo"
        }
        
      let NewAuthor = await autores.create(request.body);
      Response.status(201).json({
        status: 201,
        data: NewAuthor
      })

    res.status(201).json(author);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getAuthors,
    createAuthor,
};
*/