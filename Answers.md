### 1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

ANSWER: "Product" and "Product_Category" has many to one relationship from the above diagram as one category can have multiple products, so that's why many products could belong to same category so it is a many to one relationship.

### 2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

ANSWER: So for validation of category we have to look up in the category collection by using the particular category id stored in the product as category_id is a foreign key referencing to primary key of category and if we were able to find any category then it's a valid category else it is not a valid product_category collection .
