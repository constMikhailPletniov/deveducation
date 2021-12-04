/*Create two tables streets and persons connection between tables one to many */
CREATE TABLE streets(
id INT PRIMARY KEY,
name NOT NULL
);


CREATE TABLE persons(
id INT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
age INT NOT NULL,
street_id INT,
FOREIGN KEY (street_id) REFERENCES streets(id) 
);

/* create five streets*/
INSERT INTO streets(id, name)
VALUES(1, 'Pushkina'),
(2, 'Kolotushkina'),
(3, 'Motrosova'),
(4,'Pravda Prospect'),
(5, 'Razina');

/*Create twelve persons two person on one street and two persons without street*/
INSERT INTO persons(id, first_name, last_name, age, street_id)
VALUES(1, 'Ivan', 'Sasobenko', 23, 1),
(2, 'Geaoge', 'Papashanyan', 29, 1),
(3, 'Gugga', 'Pushtuni', 20, 2),
(4, 'Ivan', 'Ataman', 20, 2),
(5, 'Vasiliy', 'Sasobenko', 19, 3),
(6, 'Daniil', 'Baranov', 28, 3),
(7, 'Denis', 'Kurbica', 24, 4),
(8, 'Vitalii', 'Silponko', 17, 4),
(9, 'Ivan', 'Shatko', 27, 5),
(10, 'Alexander', 'Baranov', 29, 5),
(11, 'Egor', 'Baranov', 26, NULL),
(12, 'Vlad', 'Zakat', 29, NULL);

/*All count of persons*/
SELECT COUNT(id) FROM persons;

/*Middle age of persons*/
SELECT AVG(age) FROM persons;

/*Sort table by last_name for alphabet witout repeat*/
SELECT last_name FROM persons
GROUP BY last_name;

/*Select tables of count of last_name*/
SELECT last_name, COUNT(last_name) FROM persons
GROUP BY last_name; 

/*Select last_name where in middle is letter b*/
SELECT last_name FROM persons 
WHERE last_name LIKE '%_b_%';

/*Select persons without street*/
SELECT * FROM persons  
WHERE street_id ISNULL;

/*Select persons who has age less than 18 and live in Pravda Prospect*/
SELECT last_name, streets.name FROM persons 
INNER JOIN streets ON persons.street_id = streets.id
WHERE persons.age > 18 AND streets.id = 4;

/*Select by alphabet list all streets and how much persons live there*/
SELECT COUNT(persons.id), streets.name FROM persons 
INNER JOIN streets ON persons.street_id = streets.id 
GROUP BY streets.name; 

/*Select streets where name of street have length 6*/
SELECT name FROM streets 
WHERE LENGTH(name) = 6;

/*Select list of streets where number of persons less than three*/
INSERT INTO persons(id, first_name, last_name, age, street_id)
VALUES (13, 'Yin', 'Fung', 18, 1);

SELECT COUNT(persons.id) AS citizens, streets.name FROM persons 
INNER JOIN streets ON persons.street_id = streets.id
GROUP BY streets.name
HAVING citizens < 3;

/*Update users such  they less witout street*/

INSERT INTO persons(id, first_name, last_name, age, street_id)
VALUES (15, 'Cjkan', 'Ork', 19, 1);

UPDATE persons
SET street_id = NULL
WHERE persons.first_name LIKE '%K%'; 

/*Delete the citizens who are not have street*/

DELETE FROM persons 
WHERE street_id  ISNULL;