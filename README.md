# node-api-rest
Api Rest Node Js


Produccion: https://salesapirest.herokuapp.com/


Routes:

/api/auth/signup
/api/auth/signin

/api/products   GET, POST, PUT, DELETE
/api/users      GET, PUT, DELETE
/api/sales      GET, POST, DELETE


-- PRODUCTS --

{
    "price": 500,
    "name": "Sardina 4KG"
}

-- SIGNIN --

{
    "email": "publicuser@gmail.com",
    "password": "123456789"
}

-- SIGNUP --

{
    "name": "user",
    "email": "user@gmail.com",
    "password": "123456789"
}

-- CREATE SALES --

{
  "products": [
    {
      "quantity": 10000,
      "product": "605d2cbeb086cb071d321cec"
    },

    {
      "quantity": 3,
      "product": "605d2cbeb086cb071d321cec"
    }
  ],
  "user": "605d2ca8b086cb071d321ceb"
}
