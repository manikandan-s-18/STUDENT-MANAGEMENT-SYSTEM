# Student Management System

A **CRUD (Create, Read, Update, Delete) Student Management System** built using **Node.js, Express.js, MySQL, and Handlebars.js**.



## Features 🚀
- Add, view, edit, and delete students.
- Uses MySQL as the database.
- Handlebars.js as the template engine.
- Express.js for server-side handling.

## Technologies Used 🛠️
- **Node.js** - Backend runtime environment.
- **Express.js** - Web framework for Node.js.
- **MySQL** - Relational database to store student details.
- **Handlebars.js** - Templating engine for dynamic HTML rendering.
- **Bootstrap** (optional) - Styling for frontend.

## Installation & Setup 
### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/student-management-system.git
cd student-management-system
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up MySQL Database
- Open MySQL and create a new database:
```sql
CREATE DATABASE student_management_system;
```
- Use the database:
```sql
USE student_management_system;
```
- Create `users` table:
```sql
CREATE TABLE users (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(100),
    AGE INT,
    CITY VARCHAR(100)
);
```

### 4️⃣ Configure Database Connection
- Open `server/controllers/studentscontroller.js`
- Update MySQL connection details:
```js
const con = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "your_mysql_password",
    database: "student_management_system"
});
```

### 5️⃣ Start the Server
```sh
npm start
```
Server runs on `http://localhost:3000`

---

## Usage 
- **View all students:** Go to `http://localhost:3000/`
- **Add a new student:** Click "Add Student", enter details, and submit.
- **Edit student details:** Click "Edit" next to a student.
- **Delete a student:** Click "Delete" next to a student.

---

## Project Structure 
```
student-management-system/
│── server/
│   ├── controllers/
│   │   ├── studentscontroller.js  # CRUD functions
│   ├── routes/
│   │   ├── studentRoutes.js       # Route handling
│   ├── views/
│   │   ├── home.hbs               # Main page
│   │   ├── adduser.hbs            # Add user form
│   │   ├── edituser.hbs           # Edit user form
│   ├── app.js                     # Main server file
│── package.json                   # Dependencies & scripts
│── README.md                      # Project documentation
```

---

## Dependencies 📦
```json
"dependencies": {
  "express": "^4.17.1",
  "express-handlebars": "^6.0.6",
  "mysql": "^2.18.1",
  "body-parser": "^1.19.0"
}
```

Deployement Screenshots
1.Home page
![image](https://github.com/user-attachments/assets/eeef84ad-40b2-433a-812a-3df686d1fbd3)

2.Edit Page

![image](https://github.com/user-attachments/assets/d7273999-d34d-41a1-bbd8-e27336524113)

3. Add Student Page
![image](https://github.com/user-attachments/assets/ab42c9e1-a985-4072-8a8e-4d38f3e0634e)

4. Delete Page

![image](https://github.com/user-attachments/assets/af036d59-dcb0-46f6-a13d-fb988c61d586)

## Author ✍️
**ManiKandan S**  
[GitHub](https://github.com/manikandan-s-18) | [LinkedIn](https://www.linkedin.com/in/manikandan-s-8328b2269/)

