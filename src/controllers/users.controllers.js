const constants = require('../config/connstants');
const { validateUsers } = require('../utils/validate');
const repositories = require('../dataBase/repositories/repositories');

const addTeacherToUniversity = async ({ user_role, first_name, last_name, age, universities_id }) => {
    try {
        if (user_role !== 'teacher') return { error: "The user_role is not a teacher" };
        validateUsers.validateAsync({ first_name, last_name, age, universities_id });
        const { error: dbError, result } = await repositories.addTeacherToUniversity({ user_role, first_name, last_name, age, universities_id });
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { data: result };
    } catch (err) {
        console.error('addTeacherToUniversity: ', err);
    }
};

const addStudentToUniversity = async ({ user_role, first_name, last_name, age, universities_id }) => {
    try {
        if (user_role !== 'student') return { error: "the user is not a student" };
        validateUsers.validateAsync({ first_name, last_name, age, universities_id });
        const { error: dbError, result } = await repositories.addStudentToUniversity({ user_role, first_name, last_name, age, universities_id });
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { data: result };
    } catch (err) {
        console.error('cont addStudentToUniversity: ', err);
    }
};

const getUsersByUniversityId = async ({ page, perPage, name, university_id, user_role }) => {
    try {
        const { error: dbError, result } = await repositories.getUsersByUniversityId({ page, perPage, name, university_id, user_role });
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { data: result };
    } catch (err) {
        console.error('getTeacherByUniversityId', err);
    }
};
const deleteStudent = async (id) => {
    try {
        const { error: dbError, result } = await repositories.deleteStudentById(id);
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { data: result };
    } catch (err) {
        console.error('cont deleteStudent: ', err);
    }
};

module.exports = {
    addTeacherToUniversity,
    addStudentToUniversity,
    getUsersByUniversityId,
    deleteStudent,
}