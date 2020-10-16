import , mongoose from 'mongoose';

const homeworkSchema = mongoose.Schema(
    {
        course: {
            type: String,
            required: true,
        },
        tittle: {
            type: String,
            required: true,
        },
        due_data: {
            type: Date,
            required: true,
        }
        status: {
            type: String,
            required: true,
        }
    }
{
        timestamps: true,    
    }
);

const Homework = mongoose.model('homework', homeworkSchema);

export default Homework;
