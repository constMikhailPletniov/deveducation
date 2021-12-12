const { validateCourses } = require('../utils/validate');
const repositories = require('../dataBase/repositories/repositories');
const constants = require('../config/connstants');

const createCourses = async ({ course_name, university_id, user_id }) => {
    try {
        validateCourses.validateAsync({ course_name, university_id, user_id });
        const { error: dbError, result } = await repositories.createCourses({ course_name, university_id, user_id });
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { data: result };
    } catch (err) {
        console.error('cont createCourses: ', err);
    }
};

const getCourses = async ({ page, perPage, name, university_id }) => {
    try {
        const { error: dbError, result } = await repositories.getCoursesByUniversityId({ page, perPage, name, university_id });
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { data: result };
    } catch (err) {
        console.error('cont getCourses: ', err);
    }
};

const deleteCourses = async ({ course_name }) => {
    try {
        const { error: dbError, result } = await repositories.deleteCoursesByName({ course_name });
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { data: result };
    } catch (err) {
        console.error('cont deleteCourses: ', err);
    }
};

module.exports = {
    createCourses,
    getCourses,
    deleteCourses,
}