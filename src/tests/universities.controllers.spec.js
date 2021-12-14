const { Client } = require('pg');

const { createUniversity, getUniversityById,
    getUniversityByParams } = require('../controllers/universities.controllers');



describe('Testing createUniversity', () => {
    beforeAll(() => {
        jest.mock('pg', () => {
            const mcClient = {
                connect: jest.fn(),
                query: jest.fn(),
                end: jest.fn()
            };
            return { Client: jest.fn(() => mcClient) };
        });
    });
    beforeEach(() => {
        client = new Client();

    });
    test('createUniversity', () => {
        const body = {
            "uni_name": "AIA",
            "country": "Ukraine",
            "city": "Dnipro",
            "accreditation": 4
        }
        const answer = {
            "message": {
                "data": {
                    "uni_name": "DUAN",
                    "country": "Ukraine",
                    "city": "Dnipro",
                    "accreditation": 4
                },
                "status": 200
            }
        }
        expect(createUniversity(body)).not.toBeNull();
        expect(createUniversity(body)).not.toBeUndefined();
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
});

describe('Testing getUniversityById', () => {
    beforeAll(() => {
        jest.mock('pg', () => {
            const mcClient = {
                connect: jest.fn(),
                query: jest.fn(),
                end: jest.fn()
            };
            return { Client: jest.fn(() => mcClient) };
        });
    });
    beforeEach(() => {
        client = new Client();

    });
    test('getUniversityById', () => {
        const body = {
            "uni_name": "AIA",
            "country": "Ukraine",
            "city": "Dnipro",
            "accreditation": 4
        }
        const answer = {
            "message": {
                "data": {
                    "uni_name": "DUAN",
                    "country": "Ukraine",
                    "city": "Dnipro",
                    "accreditation": 4
                },
                "status": 200
            }
        }
        expect(getUniversityById(body)).not.toBeNull();
        expect(getUniversityById(body)).not.toBeUndefined();
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
});