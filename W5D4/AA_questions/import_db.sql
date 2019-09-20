PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname VARCHAR(255),
  lname VARCHAR(255)
);

INSERT INTO users (id,fname,lname)
VALUES (1,'justin','shieh'), (2,'test','hello');


CREATE TABLE questions (
  id INTEGER PRIMARY KEY, 
  user_id INTEGER,
  title VARCHAR(255),
  body VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO questions (id, user_id, title, body)
VALUES (1, 1, 'WHERE?', 'this is a practice question');

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
);

INSERT INTO question_follows(id, user_id,question_id)
VALUES (1,1,1), (2,2,1);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  body VARCHAR(255), 
  parent_id INTEGER,
  user_id INTEGER,
  question_id INTEGER,
  FOREIGN KEY(question_id) REFERENCES questions(id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(parent_id) REFERENCES replies(id)
);

INSERT INTO replies (id, body,parent_id, user_id, question_id)
VALUES (1,'parent',2,1,1), (2,'child',1,2,1),(3,'child2',1,2,1);


CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,
  FOREIGN KEY (question_id) REFERENCES questions (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
); 
