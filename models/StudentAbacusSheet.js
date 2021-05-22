import mongoose from 'mongoose';

const StudentAbacusSheetSchema = new mongoose.Schema(
    {
        StudentId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        },
        Sheets:[
            {
                SheetId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'AbacusSheet'
                }
            }
        ]
    }
)

const StudentAbacusSheet = new mongoose.model("StudentAbacusSheet", StudentAbacusSheetSchema, "StudentAbacusSheet");
export default StudentAbacusSheet;