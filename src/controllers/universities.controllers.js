const constants = require('../config/connstants');
const { validateUniversities } = require('../utils/validate');
const repositories = require('../dataBase/repositories/repositories');

const createUniversity = async (body) => {
    try {

        validateUniversities.validateAsync(body);
        const { error: dbError, result } = await repositories.createUniversity(body);

        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { data: { data: result, status: constants.STATUS_CODE.OK } };
    } catch (err) {
        console.error('createUniversity error: ', error);
    }

};

const getUniversityById = async (id) => {
    try {
        const { error: dbError, result } = await repositories.getUniversityById(id);
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { data: result };
    } catch (err) {
        console.error('getUniversity error: ', error);
    }
};

const getUniversityByParams = async ({ page, perPage, name }) => {
    try {
        const { error: dbError, result } = await repositories.getUniversitiesByParams({ page, perPage, name });
        if (dbError) return { error: constants.STATUS_CODE.INTERNAL_ERROR, data: { error } };
        return { data: result };
    } catch (err) {
        console.error('getUniversityByParams error: ', err);
    }
};

module.exports = {
    createUniversity,
    getUniversityById,
    getUniversityByParams
}