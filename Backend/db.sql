create DATABASE pizza_shop;

USE pizza_shop;
--User
CREATE TABLE user (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(255),
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--pizza
CREATE TABLE pizza (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    details VARCHAR(1024),
    price FLOAT,
    image VARCHAR(100),
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Insert into pizza(name,details,price,image) value
            ('Peppy Paneer','Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika',459,'peppy_paneer.jpg'),
            ('Veg Extravaganza','Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese',549,'veg_extravaganza.jpg'),
            ('Farmhouse','Delightful combination of onion, capsicum, tomato & grilled mushroom',459,'farmhouse_pizaa.png'),
            ('Smoked Chicken Gourmet-Pizza','Gourmet non-veg delight with bocconcini, juicy chicken, olives, bellpeppers & basil pesto.',649,'SmokedChicken.jpg'),
            ('Veggie Paradise','The awesome foursome! Golden corn, black olives, capsicum, red paprika',549,'veggie_paradise.jpg'),

            ('Meat Lovers Delight', 'Tasty combination of pepperoni, sausage, bacon, and ham', 599, 'meat_lovers_delight.jpg'),
            ('Mushroom Magic', 'Earthly delight with sautéed mushrooms and onions', 479, 'mushroom_magic.jpg'),
            ('Spicy Italian', 'Spicy pepperoni, jalapeno, and banana peppers', 529, 'spicy_italian.jpg'),
            ('Veggie Fiesta', 'Colorful mix of bell peppers, onions, tomatoes, and olives', 499, 'veggie_fiesta.jpg'),
            ('Chicken Tikka', 'Indian-inspired with chicken tikka, cilantro, and mozzarella', 569, 'chicken_tikka.jpg'),
            ('Seafood Extravaganza', 'Shrimp, anchovies, and calamari for seafood lovers', 699, 'seafood_extravaganza.jpg'),
            ('Margherita', 'Classic Italian with fresh tomatoes and basil', 449, 'margherita.jpg'),
            ('Barbecue Chicken', 'Grilled chicken, barbecue sauce, and red onion', 589, 'barbecue_chicken.jpg'),
            ('Pesto Perfection', 'Fresh basil pesto, cherry tomatoes, and mozzarella', 519, 'pesto_perfection.jpg'),
            ('Onion Ring Delight', 'Crispy onion rings and melted mozzarella This is a delicious pizza with extra cheese and spices', 509, 'onion_ring_delight.jpg');

--more pizzas\
INSERT INTO pizza(name, details, price, image) VALUES
            ('BBQ Veggie Supreme', 'Grilled vegetables, barbecue sauce, and mozzarella', 549, 'bbq_veggie_supreme.jpg'),
            ('Buffalo Chicken', 'Spicy buffalo chicken with blue cheese and celery', 629, 'buffalo_chicken.jpg'),
            ('Hawaiian', 'A tropical delight with ham, pineapple, and mozzarella', 539, 'hawaiian.jpg'),
            ('Chili Cheese Explosion', 'Spicy chili, jalapenos, cheese, and a dash of hot sauce', 579, 'chili_cheese_explosion.jpg'),
            ('Garlic Parmesan', 'Creamy garlic sauce, parmesan, mozzarella, and fresh herbs', 499, 'garlic_parmesan.jpg'),
            ('Lobster and Shrimp Delight', 'Rich lobster, succulent shrimp, and creamy garlic sauce', 799, 'lobster_shrimp_delight.jpg'),
            ('Veggie Supreme', 'Tomatoes, olives, mushrooms, onions, and mozzarella with a basil pesto drizzle', 589, 'veggie_supreme.jpg'),
            ('Cheeseburger Pizza', 'Beef, cheddar, onions, pickles, and ketchup for a cheeseburger twist', 649, 'cheeseburger_pizza.jpg'),
            ('Tandoori Chicken', 'Spicy tandoori marinated chicken with onions and cilantro', 579, 'tandoori_chicken.jpg'),
            ('Pineapple Perfection', 'Fresh pineapple, mozzarella, and a hint of sweet chili sauce', 499, 'pineapple_perfection.jpg'),
            ('Cajun Chicken', 'Cajun-spiced chicken, bell peppers, onions, and mozzarella', 629, 'cajun_chicken.jpg'),
            ('Four Cheese Delight', 'A rich combination of mozzarella, parmesan, cheddar, and goat cheese', 599, 'four_cheese_delight.jpg'),
            ('Ranch Chicken', 'Grilled chicken with ranch dressing, onions, and mozzarella', 589, 'ranch_chicken.jpg'),
            ('Spinach & Artichoke', 'Creamy spinach and artichoke with mozzarella and garlic', 549, 'spinach_artichoke.jpg'),
            ('Tropical Fiesta', 'Pineapple, ham, green pepper, and mozzarella', 529, 'tropical_fiesta.jpg');



--order
CREATE TABLE orderMaster(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    userId INTEGER,
    totalAmount FLOAT,
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--order details
CREATE TABLE orderDetails (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    orderId INTEGER,
    pizzaId INTEGER,
    quantity INTEGER,
    totalAmount FLOAT,
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
