const Joi = require('joi');
const connstants = require('../config/connstants');
const constants = require('../config/connstants');

const validateUniversities = Joi.object({
    uni_name: Joi.string().max(constants.NUMS.FIFTY).alphanum().trim().required(),
    country: Joi.string().max(constants.NUMS.FIFTY).alphanum().trim().required(),
    city: Joi.string().max(constants.NUMS.FIFTY).alphanum().trim().required(),
    accreditation: Joi.number().positive().min(constants.NUMS.ONE).max(constants.NUMS.FOUR).required()
});

const validateUsers = Joi.object({
    first_name: Joi.string().min(constants.NUMS.TWO).max(constants.NUMS.FIFTY).trim().alphanum().required(),
    last_name: Joi.string().min(constants.NUMS.TWO).max(constants.NUMS.FIFTY).trim().alphanum().required(),
    age: Joi.number().positive().min(constants.NUMS.SIXTEEN).max(constants.NUMS.HUNDRED).required(),
    universities_id: Joi.number().positive().min(constants.NUMS.ONE).required()
});

const validateCourses = Joi.object({
    course_name: Joi.string().min(constants.NUMS.TWO).trim().alphanum().required(),
    university_id: Joi.number().positive().min(constants.NUMS.ONE).required(),
    user_id: Joi.number().positive().min(constants.NUMS.ONE).required()
});

const validateStudentToCourse = Joi.object({
    student_id: Joi.number().positive().min(constants.NUMS.ONE).required(),
    course_id: Joi.number().positive().min(constants.NUMS.ONE).required()
});

const validateMarks = Joi.object({
    mark: Joi.number().positive().min(connstants.NUMS.ONE).max(connstants.NUMS.HUNDRED).required()
});
module.exports = {
    validateUniversities,
    validateUsers,
    validateCourses,
    validateStudentToCourse,
    validateMarks
}