# API Documentation

## Introduction

> This is an API document for Frontend understand more about Endpoint - Request - Response - Error Handling…

## Login

- ### **[POST]/api/login**

  > - Summary: Login
  > - Header (Content-Type): application/json
  > - **RefreshToken PAYLOAD:**

  ```
  Payload = {
    "user_id": user_id,
    "role_id": role_id
  }
  ```

  - ### **Request Body:**

  ```
  {
    "email": "string",
    "password": "string"
  }
  ```

  - ### **Responses:**

  ```
  Cookies:
  {
    'RefreshToken': refresh_token
  }
  ```

  ```
  Message:
  '200' = {
  	'msg': 'Đăng nhập thành công!'
  }

  '401' = {
  	  'msg' = {
  		'Null': 'Vui lòng điền email/mật khẩu!',
  		'Email': 'Email không tồn tại!',
  		'Password': 'Sai mật khẩu!'
  	  }
  }
  ```

  - ### **Error Handling:**

  ```
  The API handles errors by returning appropriate status codes and error messages.
  Possible error responses include:
  {
  	'500': 'Unexpected Error'
  	'404': 'Page Not Found'
  	'401': 'Unauthorized'
  }
  ```

  ## Get Access Token

- ### **[POST]/api/refresh_token**

  > - Summary: Transmit payload from RefreshToken to AccessToken
  > - Header (Authorization): RefreshToken

  - ### **Authorization HEADER:**

  ```
  {
  'Authorization': 'Refresh token'
  }
  ```

  - ### **Request BODY:**

  ```
  {
    "email": "string",
    "password": "string"
  }
  ```

  - ### **Responses:**

  ```
  {
  	'AccessToken': 'Access_token'
  }
  ```

  - ### **Error Handling:**

  ```
  {
  	'401' = {
  	   'msg':{
  			'InvalidTokenError': 'Invalid token!',
  			'DecodeError': 'Token failed validation!',
  			'InvalidSignatureError': 'Invalid refresh token!',
  			'ExpiredSignatureError': 'The RF token is expired!',
  	    }
  	 }

  	'404' = {
  			'msg': 'Page not found!'
       }
  	'500' = {
  			'msg': 'Unexpected error!'
       }
  }
  ```

  ## Logout

- ### **[GET]/api/logout**

  > - Summary: Delete refresh token in Cookies at Endpoint = ‘/api/refresh_token’
  > - Header (Authorization): None

  - ### **Request BODY:**

  ```
  {
    null
  }
  ```

  - ### **Responses:**

  ```
  {
  'RefreshToken': null
  }
  ```

  - ### **Error Handling:**

  ```
  {
  '200' = {
  		'msg': 'Đăng xuất thành công!'
    }
  '500' = {
  		'msg': 'Unexpected error!'
    }
  }
  ```

  ## User management
