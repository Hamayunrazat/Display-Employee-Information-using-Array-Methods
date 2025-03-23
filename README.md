# Employee Management System

## Description
This is a simple Employee Management System that allows users to view, filter, and calculate employee-related information using HTML, CSS, and JavaScript. The system provides options to display all employees, filter employees based on departments, calculate total salaries, and find employees by ID.

## Features
- Display a list of all employees
- Calculate the total salaries of all employees
- Filter employees based on departments (HR, IT, Finance, Marketing)
- Find an employee by their ID

## Technologies Used
- **HTML**: For structuring the web page
- **CSS**: For styling the user interface
- **JavaScript**: For dynamic interactions and data handling

## File Structure
```
root/
│── index.html          # Main HTML file
│── display.css         # CSS file for styling
│── display.js          # JavaScript file for functionality
│── README.md           # Documentation file
```

## Setup and Usage
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-repo/employee-management-system.git
   ```
2. **Open the Project:**
   - Navigate to the project folder and open `index.html` in a browser.
3. **Interact with the System:**
   - Click buttons to display employees, filter them by department, calculate salaries, or search by ID.

## JavaScript Functions
- `displayEmployees()`: Displays all employees.
- `calculateTotalSalaries()`: Computes the total salaries of employees.
- `displayHREmployees()`: Shows employees in the HR department.
- `displayITEmployees()`: Shows employees in the IT department.
- `displayFinanceEmployees()`: Shows employees in the Finance department.
- `findEmployeeById()`: Searches for an employee by their unique ID.

## Example Employee Data Structure
```javascript
const Employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
];
```

## Contributions
Feel free to contribute by forking the repository and submitting a pull request.

## License
This project is open-source and free to use.

