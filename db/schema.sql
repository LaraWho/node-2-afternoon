create table products (
    product_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(40),
    description VARCHAR(40), 
    price INTEGER,
    image_url TEXT
);