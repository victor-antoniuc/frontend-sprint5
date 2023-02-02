const arrayOfStudents = [
    {
        'firstName' : 'Ivan',
        'lastName' : 'Ceban',
        'averageScore' : 7.5
    },

    {
        'firstName' : 'Vasilii',
        'lastName' : 'Sidorov',
        'averageScore' : 8.2
    },

    {
        'firstName' : 'Denis',
        'lastName' : 'Petrov',
        'averageScore' : 5.1
    },

    {
        'firstName' : 'Mihail',
        'lastName' : 'Lupu',
        'averageScore' : 4.3
    },

    {
        'firstName' : 'Sergei',
        'lastName' : 'Sunak',
        'averageScore' : 9.1
    },

    {
        'firstName' : 'Matvei',
        'lastName' : 'Lisnic',
        'averageScore' : 6.7
    },

    {
        'firstName': 'Iurii',
        'lastName' : 'Dodon',
        'averageScore' : 2.8
    }
];

const studentsWithGPAAboveFive = [];
const studentsWithGPABelowFive = [];


arrayOfStudents.forEach((student) => {
    if (student.averageScore >= 5) {
        studentsWithGPAAboveFive.push(student);
    }

    if (student.averageScore < 5) {
        studentsWithGPABelowFive.push(student)
    }
});

studentsWithGPAAboveFive.forEach((student) => {
    console.log(`${student.firstName} ${student.lastName} ${student.averageScore}`);
});

studentsWithGPABelowFive.forEach((student) => {
    console.log(`${student.firstName} ${student.lastName} ${student.averageScore}`);
});