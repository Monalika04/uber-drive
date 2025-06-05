# API Documentation

## /users/register Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

**POST**

### Request Body

The request body should be in JSON format and include the following fields:

- **fullname** (object):
  - **firstname** (string, required): User's first name (minimum 3 characters).
  - **lastname** (string, optional): User's last name (minimum 3 characters).
- **email** (string, required): User's email address (must be a valid email).
- **password** (string, required): User's password (minimum 6 characters).

#### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourPassword123"
}
```

### Example Response

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "<JWT Token>"
}
```

---

## /users/login Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

**POST**

### Endpoint

`/users/login`

### Request Body

The request body should be in JSON format and include the following fields:

- **email** (string, required): User's email address (must be a valid email).
- **password** (string, required): User's password (minimum 6 characters).

#### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "yourPassword123"
}
```

### Example Response

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  },
  "token": "<JWT Token>"
}
```

---

## /users/profile Endpoint

### Description

Retrieves the profile information of the currently authenticated user. Requires a valid JWT token in the request (sent via cookie or Authorization header).

### HTTP Method

**GET**

### Authentication

- Requires authentication via JWT token (cookie or `Authorization: Bearer <token>` header).

### Example Response

```json
{
  "user": {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Error Response

- **401 Unauthorized** if token is missing or invalid.
- **404 Not Found** if user does not exist.

---

## /users/logout Endpoint

### Description

Logs out the currently authenticated user by blacklisting their JWT token and clearing the authentication cookie.

### HTTP Method

**GET**

### Authentication

- Requires authentication via JWT token (cookie or `Authorization: Bearer <token>` header).

### Example Response

```json
{
  "message": "User logged out successfully"
}
```

### Error Response

- **401 Unauthorized** if token is missing or invalid.
