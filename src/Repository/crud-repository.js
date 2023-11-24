class crudRepository{
    constructor(model){
        this.model=model;
        
    }
    async create(data){
        try {
            const result=await this.model.create(data);
        } catch (error) {
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
    async destroy(id){
        try{
            const result=await this.model.findByIdAndDelete(id);
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
    async get(id){
        try{
            const result=await this.model.findById(id);
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
    async getAll(id){
        try{
            const result=await this.model.find({});
            return result;
        }
        catch(error){
            console.log("something went wrong in crud repo");
            throw error;
        }
    }
}