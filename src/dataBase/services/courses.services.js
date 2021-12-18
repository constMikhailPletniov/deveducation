const client = require('../dataBases');

const checkCourseByUniversityId = async (course_id) => {
    const check = await client.query(`SELECT university_id FROM courses
    WHERE courses.id = ${course_id};`);
    return check.rows[0];
};

module.exports = {
    checkCourseByUniversityId
}