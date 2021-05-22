import mongoose from 'mongoose';

const AbacusSheetSchema = new mongoose.Schema(
    {
        Level:{
            type:String,
            required:true,
            minlength:1,
            maxlength:50
        }
    }
)

const AbacusSheet = new mongoose.model("AbacusSheet", AbacusSheetSchema, "AbacusSheet");
export default AbacusSheet;