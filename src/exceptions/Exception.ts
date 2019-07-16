export abstract class Exception extends Error{
    protected constructor(message?: string){
        if(!message)
            message = "An error happened"
        super(message)
    }
}
