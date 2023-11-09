const {StatusCodes}=require('http-status-code')
class ValidationError extends Error{
    constructor(error){
        let explanation=[]
        error.errors.forEach((err)=>{
            explanation.push(err)
        })
        super()
        this.name='Validation Error'
        this.message='Not able to validate the request',
        this.explanation=explanation,
        this.statusCode=statusCode
    }
}
module.exports=ValidationError