---
slug: joins
title: JOINS in SQL
---

# JOINS in SQL

Joins combine rows from two or more tables based on related columns.

## Example

```sql
SELECT u.id, u.name, o.order_id
FROM users u
JOIN orders o ON u.id = o.user_id;
```

## Output

```
id | name  | order_id
1  | Alice | 101
```

## Practice Questions

1. What's the difference between INNER JOIN and LEFT JOIN?
2. How do you join three tables together?

<div class="inline-ad" data-ad="inline"></div>
