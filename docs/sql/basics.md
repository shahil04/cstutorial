---
slug: basics
title: SQL Basics
---

# SQL Basics

SQL (Structured Query Language) is used to interact with relational databases. You can create, read, update and delete data using SQL.

## Example

```sql
-- Create a table
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));

-- Insert a row
INSERT INTO users (id, name) VALUES (1, 'Alice');

-- Query
SELECT * FROM users;
```

## Output

```
id | name
1  | Alice
```


## Quiz

<Quiz />

## Practice Questions

1. How do you insert multiple rows?
2. What's the difference between VARCHAR and TEXT?

<div class="inline-ad" data-ad="inline"></div>
