const { validateStudentToCourse } = require('../utils/validate');
const repositories = require('../dataBase/repositories/repositories');
const constants = require('../config/connstants');
const { usersServices } = require('../dataBase/services');

const addStudentToCourses = async ({ student_id, course_id }) => {
    try {
        validateStudentToCourse.validateAsync({ student_id, course_id });
        const student = await usersServices.checkUserRole(student_id);

        if (student !== 'student') return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        const { error: dbError, result } = await repositories.addStudentToCourses({ student_id, course_id });
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { data: result };
    } catch (err) {
        console.error('cont addStudentToCourses: ', err);
    }
};

const getStudentByCoursesId = async ({ page, perPage, name }) => {
    try {
        const { error: dbError, result } = await repositories.getStudentByCoursesId({ page, perPage, name });
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };

        return { data: result };
    } catch (err) {
        console.error('cont getStudentByCoursesId: ', err);
    }
};

module.exports = {
    getStudentByCoursesId,
    addStudentToCourses
}