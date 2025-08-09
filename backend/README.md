# User Registration Endpoint Documentation

## Endpoint

`POST /user/register`

## Description

Registers a new user in the system. Requires email, password, and first name. Last name is optional.

## Request Body

The endpoint expects a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email.
- `password` (string, required): Minimum 6 characters.

## Example Request

```bash
curl -X POST http://localhost:3000/user/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "password": "securePass123"
  }'
```

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<JWT_TOKEN>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "Alice",
        "lastname": "Smith"
      },
      "email": "alice.smith@example.com"
      // other user fields
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
      // other errors
    ]
  }
  ```

### User Already Exists

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "message": "User already exists"
  }
  ```

## Notes

- Password is securely hashed before storing.
- Returns a JWT token for authentication