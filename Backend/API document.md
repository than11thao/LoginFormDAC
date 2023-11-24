# API Documentation
## Introduction
This is an API document for Frontend understand more about 
Endpoint - Request - Response - Error Handling…
## Login
## Endpoint
- __/api/login__
  -__[POST]__
  - Summary: Login
  - Header (Content-Type): application/json
  - __RefreshToken PAYLOAD:__
  `Payload = {
    "user_id": user_id,
    "role_id": role_id
  }`
  - __Request Body:__
  `{
    "email": "string",
    "password": "string"
  }`

**Responses:**

```json
Cookies:
{
	'RefreshToken': refresh_token
}

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

**Error Handling:**

```json
The API handles errors by returning appropriate status codes and error messages. 
Possible error responses include:
{
	'500': 'Unexpected Error'
	'404': 'Page Not Found'
	'401': 'Unauthorized'
}
```
