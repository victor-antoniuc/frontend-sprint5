const arrayOfObjects = [
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

console.log("Students with GPA above 5.");
arrayOfObjects.forEach((student) => {
    if (student.averageScore >= 5) {
        console.log(`${student.firstName} ${student.lastName} ${student.averageScore}`);
    }
});

console.log("Students with GPA below 5.");
arrayOfObjects.forEach((student) => {
    if (student.averageScore < 5) {
        console.log(`${student.firstName} ${student.lastName} ${student.averageScore}`);
    }
});
