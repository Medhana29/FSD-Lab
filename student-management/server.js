const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

// Student data
let students = [
    {
        name: "Medhana",
        rollNumber: "74",
        semester: 5,
        grade: "A"
    },
    {
        name: "Ananya",
        rollNumber: "102",
        semester: 3,
        grade: "B"
    }
];

// GET - Get all students
app.get('/students', (req, res) => {
    res.json(students);
});


// GET - Get student by roll number
app.get('/students/:rollNumber', (req, res) => {

    const rollNumber = req.params.rollNumber;

    const student = students.find(
        student => student.rollNumber === rollNumber
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});


// POST - Add a new student
app.post('/students', (req, res) => {

    const { name, rollNumber, semester, grade } = req.body;

    if (!name || !rollNumber || !semester || !grade) {
        return res.status(400).json({
            message: "Name, roll number, semester and grade are required"
        });
    }

    const newStudent = {
        name,
        rollNumber,
        semester,
        grade
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

// PUT - Update complete student information
app.put('/students/:rollNumber', (req, res) => {

    const rollNumber = req.params.rollNumber;

    const student = students.find(
        student => student.rollNumber === rollNumber
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, semester, grade } = req.body;

    if (!name || !semester || !grade) {
        return res.status(400).json({
            message: "Name, semester and grade are required"
        });
    }

    student.name = name;
    student.semester = semester;
    student.grade = grade;

    res.json({
        message: "Student information updated successfully",
        student: student
    });
});
// PATCH - Update semester
app.patch('/students/:rollNumber', (req, res) => {

    const rollNumber = req.params.rollNumber;

    const student = students.find(
        student => student.rollNumber === rollNumber
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { semester } = req.body;

    if (!semester) {
        return res.status(400).json({
            message: "Semester is required"
        });
    }

    student.semester = semester;

    res.json({
        message: "Semester updated successfully",
        student: student
    });
});


// DELETE - Delete student
app.delete('/students/:rollNumber', (req, res) => {

    const rollNumber = req.params.rollNumber;

    const index = students.findIndex(
        student => student.rollNumber === rollNumber
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});