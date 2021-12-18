const constants = require('../config/connstants');
const Url = require('url');
const { METHOD, ENDPOINTS } = require('../config/connstants');
const { universitiesControllers, usersControllers, coursesControllers,
    students_coursesControllers, marksControllers } = require('../controllers');
const path = require('path');

async function router({ req, res, body }) {
    try {
        const { pathname, query } = Url.parse(req.url, true);

        switch (true) {
            case (req.method === METHOD.POST && pathname === ENDPOINTS.UNIVERSITIES):
                ({ error, data } = await universitiesControllers.createUniversity(body));
                break;
            case (req.method === METHOD.GET && pathname === ENDPOINTS.UNIVERSITIES):

                if (query.id) {
                    ({ error, data } = await universitiesControllers.getUniversityById(query.id));
                    break;
                }
                ({ error, data } = await universitiesControllers.getUniversityByParams(query));
                break;
            case (req.method === METHOD.POST && pathname === ENDPOINTS.USERS):
                if (body.user_role === 'teacher') {

                    ({ error, data } = await usersControllers.addTeacherToUniversity(body));
                    break;
                };
                if (body.user_role !== 'student') {
                    return { error: { message: "Invalid user role" } };
                }
                ({ error, data } = await usersControllers.addStudentToUniversity(body));
                break;
            case (req.method === METHOD.GET && pathname === ENDPOINTS.USERS):
                ({ error, data } = await usersControllers.getUsersByUniversityId(query));
                break;
            case (req.method === METHOD.POST && pathname === ENDPOINTS.COURSES):
                ({ error, data } = await coursesControllers.createCourses(body));
                break;
            case (req.method === METHOD.GET && pathname === ENDPOINTS.COURSES):
                ({ error, data } = await coursesControllers.getCourses(query));
                break;
            case (req.method === METHOD.DELETE && pathname === ENDPOINTS.COURSES):
                ({ error, data } = await coursesControllers.deleteCourses(query));
                break;
            case (req.method === METHOD.DELETE && pathname === ENDPOINTS.USERS):
                ({ error, data } = await usersControllers.deleteStudent(query.id));
                break;
            case (req.method === METHOD.GET && pathname === ENDPOINTS.STUDENTS_COURSES):
                ({ error, data } = await students_coursesControllers.getStudentByCoursesId(query));
                break;
            case (req.method === METHOD.POST && pathname === ENDPOINTS.STUDENTS_COURSES):
                ({ error, data } = await students_coursesControllers.addStudentToCourses(body));
                break;
            case (req.method === METHOD.GET && pathname === ENDPOINTS.RATING):
                ({ error, data } = await marksControllers.getStudentsRatingByCourseId(query));
                break;
            case (req.method === METHOD.POST && pathname === ENDPOINTS.RATING):
                ({ error, data } = await marksControllers.addMarksToStudents(body));
                break;
            case (req.method === METHOD.PUT && pathname === ENDPOINTS.USERS):
                ({ error, data } = await usersControllers.updateStudentsData(query, body));
                break;
            default:
                res.statusCode = constants.STATUS_CODE.NOT_FOUND;
                return res.end(JSON.stringify({ "message": "Invalid request" }));
        }

        if (error) {
            res.statusCode = constants.STATUS_CODE.NOT_FOUND;
            return res.end(JSON.stringify({ message: error.message }));
        }
        res.statusCode = constants.STATUS_CODE.OK;
        return res.end(JSON.stringify({ message: data }));
    } catch (err) {
        console.error('Router error: ', err.message);
    }
}
module.exports = { router };
