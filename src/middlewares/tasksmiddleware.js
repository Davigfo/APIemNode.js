const validadeBody = (request, response, next)  => {
    const {body} = request;
    
    if (body.title == undefined) {
        response.status(400).json ({message: 'The field "title is required'})
    }
    
    if (body.title == '') {
        return response.status(400).json ({message: 'title cannot be empty'})
    } 

    next();
}; 

module.exports = {
    validadeBody,
}