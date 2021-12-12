CREATE TABLE universities(
id SERIAL UNIQUE PRIMARY KEY,
uni_name VARCHAR(50) NOT NULL,
country VARCHAR(50) NOT NULL,
city VARCHAR(50) NOT NULL,
accreditation INT NOT NULL
);

 CREATE TYPE roles AS ENUM('student',
'teacher');

CREATE TABLE users(
id SERIAL UNIQUE PRIMARY KEY,
user_role roles,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
age INT NOT NULL,
universities_id INT NOT NULL,
FOREIGN KEY (universities_id) REFERENCES universities(id)
);

CREATE TABLE courses(
    id SERIAL UNIQUE PRIMARY KEY,
    course_name VARCHAR(50),
    university_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (university_id) REFERENCES universities(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE students_courses(
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY(student_id) REFERENCES users(id),
    FOREIGN KEY(course_id) REFERENCES users(id)
);

CREATE TABLE marks(
    id SERIAL UNIQUE PRIMARY KEY,
    mark INT NOT NULL,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    university_id INT NOT NULL,
    FOREIGN KEY(university_id) REFERENCES universities(id),
    FOREIGN KEY(student_id) REFERENCES users(id),
    FOREIGN KEY(course_id) REFERENCES courses(id)
);

CREATE TABLE marks_courses(
id SERIAL PRIMARY KEY,
	mark_id INT NOT NULL,
	course_id INT NOT NULL,
	FOREIGN KEY (mark_id) REFERENCES marks(id),
	FOREIGN KEY (course_id) REFERENCES courses(id)
);
