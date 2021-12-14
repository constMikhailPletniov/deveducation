const connstants = require('../../config/connstants');
const client = require('../dataBases');


const createUniversity = async ({ uni_name, country, city, accreditation }) => {
    try {

        const result = await client.query(`INSERT INTO universities(uni_name, country, city, accreditation)
        VALUES('${uni_name}','${country}','${city}',${accreditation})`);
        return { result: { uni_name, country, city, accreditation } };
    } catch (err) {
        console.error('Error repo createUniversities: ', { err: err });
    }
};

const getUniversityById = async (id) => {
    try {
        const universities = await client.query(`SELECT * FROM universities WHERE id = ${id} LIMIT 1`);
        return { result: universities.rows[0] };

    } catch (err) {
        console.error('Error repo getUniversityById: ', { err: err });
    }
};

const getUniversitiesByParams = async ({ page, perPage, name }) => {
    try {
        if (name) {
            const result = await client.query(`SELECT * FROM universities WHERE uni_name LIKE '%${name}%' LIMIT ${perPage || 10}`);
            return { result: result.rows };
        }
        if (page) {
            const endOfPage = page * 10;
            const result = await client.query(`SELECT * FROM universities WHERE id BETWEEN ${endOfPage - 9}  AND ${endOfPage}`);
            return { result: result.rows };
        }
        if (perPage) {
            const result = await client.query(`SELECT * FROM universities LIMIT ${perPage}`);
            return { result: result.rows };
        }

    } catch (err) {
        console.error('repo getUniversitiesByParams: ', err);
    }
};

const addTeacherToUniversity = async ({ user_role, first_name, last_name, age, universities_id }) => {
    try {
        await client.query(`INSERT INTO users(user_role, first_name, last_name,
        age, universities_id)
        VALUES('${user_role}','${first_name}','${last_name}',${age},${universities_id})`);
        return { result: { user_role, first_name, last_name, age, universities_id } };
    } catch (err) {
        console.error(' repo addTeacherToUniversity: ', err);
    }
};

const addStudentToUniversity = async ({ user_role, first_name, last_name, age, universities_id }) => {
    try {
        await client.query(`INSERT INTO users(user_role, first_name, last_name,
        age, universities_id)
        VALUES('${user_role}','${first_name}','${last_name}',${age},${universities_id})`);
        return { result: { user_role, first_name, last_name, age, universities_id } };
    } catch (err) {
        console.error(' repo addTeacherToUniversity: ', err);
    }
};

const createCourses = async ({ course_name, university_id, user_id }) => {
    try {
        await client.query(`INSERT INTO courses(course_name, university_id, user_id)
        VALUES('${course_name}',${university_id}, ${user_id});`);
        return { result: { course_name, university_id, user_id } };
    } catch (err) {
        console.error('repo createCourses: ', err);
    }
};

const getCoursesByUniversityId = async ({ page, perPage, name, university_id }) => {
    try {
        if (page) {
            const endOfPage = 10;
            const result = await client.query(`SELECT course_name, uni_name FROM courses INNER JOIN universities 
        ON courses.university_id=universities.id
        WHERE universities.id BETWEEN ${endOfPage - 9}  AND ${endOfPage};`);
            return { result: result.rows };
        }
        if (perPage) {
            const result = await client.query(`SELECT course_name, uni_name FROM courses INNER JOIN universities 
            ON courses.university_id=universities.id
            WHERE universities.id=${university_id} LIMIT ${perPage};`);
            return { result: result.rows };
        }
        if (name) {
            const result = await client.query(`SELECT course_name, uni_name FROM courses INNER JOIN universities 
            ON courses.university_id=universities.id
            WHERE uni_name LIKE '%${name}%' LIMIT ${perPage || 10};`);
            return { result: result.rows };
        }
    } catch (err) {
        console.error('repo getCoursesByUniversityId: ', err);
    }
};
const deleteCoursesByName = async ({ course_name }) => {
    try {
        const result = await client.query(`DELETE FROM courses WHERE course_name='${course_name}'`);
        return { return: result.rows };
    } catch (err) {
        console.error('repo deleteCoursesByName: ', err);
    }
};

const deleteStudentById = async (id) => {
    try {
        const result = await client.query(`DELETE FROM users WHERE id=${id}
        AND user_role = 'student';`);
        return { return: result };
    } catch (err) {
        console.error('repo deleteStudentByName: ', err);
    }
};

const getUsersByUniversityId = async ({ page, perPage, name, university_id, user_role }) => {
    try {
        if (page) {
            const endOfPage = page * 10;
            const result = await client.query(`SELECT user_role, first_name, last_name, uni_name FROM users INNER JOIN universities 
            ON users.universities_id=universities.id
            WHERE universities.id BETWEEN ${endOfPage - 9}  AND ${endOfPage}  AND user_role = '${user_role}';`);
            return { result: result.rows };
        }
        if (perPage) {
            const result = await client.query(`SELECT user_role, first_name, last_name, uni_name FROM users INNER JOIN universities 
            ON users.universities_id=universities.id
            WHERE universities.id=${university_id}  AND user_role = '${user_role}' LIMIT ${perPage};`);
            return { result: result.rows };
        }
        if (name) {
            const result = await client.query(`SELECT user_role, first_name, last_name, uni_name FROM users INNER JOIN universities 
            ON users.universities_id=universities.id
            WHERE uni_name LIKE '%${name}%' AND user_role = '${user_role}' LIMIT ${perPage || 10}; `);
            return { result: result.rows };
        }
    } catch (err) {
        console.error('repo getStudents: ', err);
    }
};

const getStudentByCoursesId = async ({ page, perPage, name }) => {
    try {
        if (page) {
            const endOfPage = page * 10;
            const result = await client.query(`SELECT courses.course_name, users.first_name, users.last_name FROM students_courses 
            INNER JOIN courses ON course_id = courses.id
            INNER JOIN users ON student_id = users.id
            WHERE student_id BETWEEN ${endOfPage - 9} AND ${endOfPage};`);

            return { result: result.rows };
        }
        if (perPage) {
            const result = await client.query(`SELECT courses.course_name, users.first_name, users.last_name FROM students_courses 
            INNER JOIN courses ON course_id = courses.id
            INNER JOIN users ON student_id = users.id
            WHERE course_id LIMIT=${perPage};`);
            return { result: result.rows };
        }
        if (name) {
            const result = await client.query(`SELECT courses.course_name, users.first_name, users.last_name FROM students_courses 
            INNER JOIN courses ON course_id = courses.id
            INNER JOIN users ON student_id = users.id
        WHERE course_name LIKE '%${name}%'  LIMIT ${perPage || 10}; `);
            return { result: result.rows };
        }
    } catch (err) {
        console.error('repo getStudentByCoursesId: ', err);
    }
};

const addStudentToCourses = async ({ student_id, course_id }) => {
    try {

        const result = client.query(`INSERT INTO students_courses(student_id, course_id)
        VALUES(${student_id},${course_id});`);
        return { result: result.rows };
    } catch (err) {
        console.error('repo addStudentToCourses: ', err);
    }
};

const addMarksToStudentsCourses = async ({ mark, student_id, course_id, university_id, teacher_id }) => {
    try {
        await client.query(`INSERT INTO marks(mark, student_id, course_id, university_id, teacher_id)
        VALUES(${mark},${student_id}, ${course_id}, ${university_id}, ${teacher_id});`);
        return { result: true };
    } catch (err) {
        console.error('repo addMarksToStudentsCourses: ', err);
    }
};

const getStudentsRatingByCourseId = async ({ id, perPage }) => {
    const result = await client.query(`SELECT AVG(mark) FROM marks INNER JOIN courses ON course_id = courses.id
    INNER JOIN users ON student_id = users.id`);
    return { result: result };
};
module.exports = {
    createUniversity,
    getUniversityById,
    getUniversitiesByParams,
    addTeacherToUniversity,
    addStudentToUniversity,
    createCourses,
    getCoursesByUniversityId,
    deleteCoursesByName,
    deleteStudentById,
    getUsersByUniversityId,
    getStudentByCoursesId,
    addStudentToCourses,
    getStudentsRatingByCourseId,
    addMarksToStudentsCourses
}