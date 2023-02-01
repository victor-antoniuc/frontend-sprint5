const student = {};

student['firstName'] = 'John';
student['LastName'] = 'Smith';
student['averageScore'] = 8.2;

for (const [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}