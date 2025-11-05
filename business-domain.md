# Bunisess Domain and Rules

## Movies Domain
|     Column     |        Type        |  Nullable  |      Default      |
|----------------|--------------------|------------|-------------------|
| id             | character varying  | not null   | gen_random_uuid() |
| name           | character varying  | not null   |                   |
| genre          | character varying  | not null   |                   |
| classification | integer            | not null   |                   |
| resume         | text               |            |                   |

### Rules
1. It's not possible to create a movie with a title alredy existent
2. It's not possible to create a movie with a resume less than 10 caracters
3. The classification most be 18+ to genres: "terror" and "hot"
4. Only the resume can be updated
5. The main list most shows only the ID, name, genre and classification
6. The detailed list most shows all fields
7. Its not possible to delete all registered movies, its necessary have at least one 