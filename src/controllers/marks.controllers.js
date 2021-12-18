const repositories = require('../dataBase/repositories/repositories');
const constants = require('../config/connstants');
const { validateMarks } = require('../utils/validate');
const { usersServices } = require('../dataBase/services');

const getStudentsRatingByCourseId = async ({ id, perPage }) => {
    try {
        const { error: dbError, student } = await usersServices.checkUserRole(student_id);
        if (student !== 'student') return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        const { error: dbError2, rating } = await repositories.getStudentsRatingByCourseId({ id, perPage });
        if (dbError2) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { result: rating };
    } catch (err) {
        console.error('cont getStudentsRatingByCourseId: ', err);
    }
};

const addMarksToStudents = async ({ mark, student_id, course_id, university_id, teacher_id }) => {
    try {
        validateMarks.validateAsync({ mark });
        const student = await usersServices.checkUserRole(student_id);
        const teacher = await usersServices.checkUserRole(teacher_id);

        if (!student === 'student' && !teacher === 'teacher') return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        const student_uni = await usersServices.checkUsersByUniversity(student_id);
        const teacher_uni = await usersServices.checkUsersByUniversity(teacher_id);
        if (student_uni.universities_id !== teacher_uni.universities_id) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        const checkCourse = await usersServices.checkTeacherCourses(course_id, teacher_id);
        const checkStudentCourse = await usersServices.checkStudentCourses(course_id, student_id);
        if (checkCourse !== checkStudentCourse) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        const { error: dbError, result } = await repositories.addMarksToStudentsCourses({ mark, student_id, course_id, university_id, teacher_id });
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { data: result };

    } catch (err) {
        console.error('cont addMarksToStudents: ', err);
    }
};
module.exports = {
    getStudentsRatingByCourseId,
    addMarksToStudents
}