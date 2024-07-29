import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { v4 as uuidv4 } from 'uuid';
import bodyParser from "body-parser";
import axios from "axios";
import path from "path"
import dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, console.log("DB connected"))

const classDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    admin_id: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    subjectCode: {
        type: String,
        required: true,
    },
    radius: {
        type: Number,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
});

const ClassData = mongoose.model('ClassData', classDataSchema);

const studentDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollno: {
        type: Number,
        required: true,
    },
    studentid: {
        type: String,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    present: {
        type: Boolean,
        default: false,
    },
});

const StudentData = mongoose.model('StudentData', studentDataSchema);

// const unique_id = uuidv4();
// http://localhost:4000/student-form/${req.params.admin_id}/${unique_id}
app.get('/generate-link/:adminId', (req, res) => {
    console.log(req.params.adminId)
    const uniqueLink = `http://localhost:3000/class-form2`;
    res.json({ link: uniqueLink });
});

app.post('/student-form/:adminId', (req, res) => {
    const {name , rollno, studentid,latitude, longitude ,present} = req.body
    console.log(req.body);
    const stData = new StudentData({
        name: req.body.name,
        rollno: req.body.rollno,
        studentid: req.body.studentid,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        present: true
    })
    stData.save();
    res.status(200).json({msg: "Data recieved and saved successfully"});
})

app.get('/', (req, res)=> {
    res.send('Secure, You are in GPI Backend !!');
})

app.route('/class-data')
    .post((req, res) => {
        const data = req.body;
        const classData = new ClassData(data);
        classData.save()
            .then(() => res.json({ Output: 'Data inserted successfully' }))
            .catch(error => res.status(400).json({ Error: error.message }));
    })
    .get((req, res) => {
        res.status(400).json({ Error: 'No data provided' });
    });

app.post('/student-data/:adminId/:providedId', async (req, res) => {
        const { adminId, providedId } = req.params;
    
        if (providedId === uniqueId) {
            try {
                const data = req.body;
    
                const classInfo = await ClassData.findOne();
    
                if (classInfo) {
                    const radius = parseFloat(classInfo.radius);
    
                    const adminCoord = [classInfo.latitude, classInfo.longitude];
                    const userCoord = [data.latitude, data.longitude];
    
                    const response = await axios.post('http://localhost:4000/check-distance', {
                        adminCoord,
                        userCoord,
                        radius
                    });
    
                    data.present = response.data.present;
    
                    const studentData = new StudentData(data);
                    await studentData.save();
    
                    res.json({ Output: 'Data inserted successfully' });
                } else {
                    res.status(400).json({ Error: 'No class data found' });
                }
            } catch (error) {
                res.status(400).json({ Error: error.message });
            }
        } else {
            res.status(400).json({ Error: 'Invalid Unique ID' });
        }
    });
    
app.get('/getClassData', async (req, res) => {
        try {
            const classInfo = await ClassData.findOne();
            if (classInfo) {
                res.json(classInfo);
            } else {
                res.json({});
            }
        } catch (error) {
            res.status(400).json({ Error: error.message });
        }
});

app.get('/getStudentData', async (req, res) => {
    try {
        const studentInfo = await StudentData.find();
        const data = studentInfo.map(item => ({ ...item.toObject(), _id: item._id.toString() }));
        res.json(data);
    } catch (error) {
        res.status(400).json([]);
    }
});

app.listen(4000, ()=> {
    console.log("The server is started at port 4000");
})