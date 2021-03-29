

##  Api Rest With Jwt


**Produccion:**  https://salesapirest.herokuapp.com/

**Routes:**

- /api/auth/signup POST
- /api/auth/signin  POST
- /api/products   GET, POST, PUT, DELETE
- /api/users     GET, PUT, DELETE
- /api/sales     GET, POST, DELETE

**Products**
```json
{
    "price": 500,
    "name": "Sardina 4KG"
}`
```
**Signin**
```json
{
    "email": "publicuser@gmail.com",
    "password": "123456789"
}`
```
**Signup**
```json
{
    "name": "user",
    "email": "user@gmail.com",
    "password": "123456789"
}
```
**Create Sales**

```json
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
```

