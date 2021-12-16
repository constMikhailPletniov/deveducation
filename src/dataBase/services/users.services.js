const client = require('../dataBases');

const checkUserRole = async (user_id) => {
    try {
        const check = await client.query(`SELECT user_role FROM users WHERE id = ${user_id}`);

        return check.rows[0].user_role;
    } catch (err) {
        console.error('service checkUserRole: ', err);
    }
}

const checkUserByParams = async (query) => {
    try {
        const check = await client.query(`SELECT * FROM users
            WHERE users.id = ${query.id};`);
        return check.rows[0];
    } catch (err) {
        console.error('serv checkUserByParams: ', err);
    }
};

const checkUsersByUniversity = async (user_id) => {
    try {
        const check = await client.query(`SELECT universities_id, universities.id FROM users INNER JOIN universities
        ON users.universities_id = universities.id
        WHERE users.id = ${user_id};`);
        return check.rows[0];
    } catch (err) {
        console.error('serv checkUsersByUniversity: ', err);
    }
};

const checkTeacherCourses = async (course_id, teacher_id) => {
    try {
        await client.query(`SELECT user_id FROM courses INNER JOIN users ON courses.user_id = users.id
        WHERE user_id = ${teacher_id} AND courses.id = ${course_id};`);
        return true;
    } catch (err) {
        console.error('serv checkTeacherCourses: ', err);
    }
};

const checkStudentCourses = async (course_id, student_id) => {
    try {
        const check = await client.query(`SELECT student_id, course_id FROM students_courses WHERE student_id = ${student_id} AND course_id = ${course_id};`);
        console.log(check);
        return check;
    } catch (err) {
        console.error('serv checkTeacherCourses: ', err);
    }
};

module.exports = {
    checkUserRole,
    checkUsersByUniversity,
    checkTeacherCourses,
    checkStudentCourses,
    checkUserByParams
}