const Employees = [
        { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
        { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
        { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
        { id: 4, name: 'Emma Williams', age: 26, department: 'Marketing', salary: 48000 },
        { id: 5, name: 'Michael Brown', age: 32, department: 'IT', salary: 52000 },
        { id: 6, name: 'Sarah Miller', age: 29, department: 'HR', salary: 46000 },
        { id: 7, name: 'David Wilson', age: 40, department: 'Finance', salary: 70000 },
        { id: 8, name: 'Olivia Moore', age: 27, department: 'IT', salary: 51000 },
        { id: 9, name: 'James Taylor', age: 38, department: 'Marketing', salary: 55000 },
        { id: 10, name: 'Sophia Anderson', age: 25, department: 'HR', salary: 44000 },
        { id: 11, name: 'Daniel Thomas', age: 31, department: 'IT', salary: 53000 },
        { id: 12, name: 'Emily Jackson', age: 29, department: 'Finance', salary: 62000 },
        { id: 13, name: 'Matthew White', age: 35, department: 'Marketing', salary: 56000 },
        { id: 14, name: 'Isabella Harris', age: 30, department: 'HR', salary: 45000 },
        { id: 15, name: 'Ethan Martin', age: 42, department: 'IT', salary: 75000 },
        { id: 16, name: 'Mia Thompson', age: 26, department: 'Marketing', salary: 47000 },
        { id: 17, name: 'Alexander Garcia', age: 33, department: 'Finance', salary: 63000 },
        { id: 18, name: 'Charlotte Martinez', age: 28, department: 'HR', salary: 46000 },
        { id: 19, name: 'William Robinson', age: 39, department: 'IT', salary: 68000 },
        { id: 20, name: 'Amelia Clark', age: 27, department: 'Marketing', salary: 49000 },
        { id: 21, name: 'Benjamin Rodriguez', age: 30, department: 'Finance', salary: 61000 },
        { id: 22, name: 'Harper Lewis', age: 24, department: 'HR', salary: 43000 },
        { id: 23, name: 'Henry Walker', age: 36, department: 'IT', salary: 65000 },
        { id: 24, name: 'Evelyn Hall', age: 29, department: 'Marketing', salary: 48000 },
        { id: 25, name: 'Sebastian Allen', age: 31, department: 'Finance', salary: 62000 },
        { id: 26, name: 'Victoria Young', age: 27, department: 'HR', salary: 45000 },
        { id: 27, name: 'Mason King', age: 40, department: 'IT', salary: 72000 },
        { id: 28, name: 'Ella Wright', age: 25, department: 'Marketing', salary: 46000 },
        { id: 29, name: 'Logan Scott', age: 32, department: 'Finance', salary: 63000 },
        { id: 30, name: 'Aria Green', age: 29, department: 'HR', salary: 47000 },
        { id: 31, name: 'Lucas Adams', age: 37, department: 'IT', salary: 69000 },
        { id: 32, name: 'Lily Baker', age: 26, department: 'Marketing', salary: 48000 },
        { id: 33, name: 'Jack Gonzalez', age: 34, department: 'Finance', salary: 64000 },
        { id: 34, name: 'Zoe Nelson', age: 28, department: 'HR', salary: 45000 },
        { id: 35, name: 'Carter Carter', age: 39, department: 'IT', salary: 71000 },
        { id: 36, name: 'Grace Mitchell', age: 27, department: 'Marketing', salary: 49000 },
        { id: 37, name: 'Owen Perez', age: 30, department: 'Finance', salary: 61000 },
        { id: 38, name: 'Natalie Roberts', age: 29, department: 'HR', salary: 46000 },
        { id: 39, name: 'Elijah Turner', age: 38, department: 'IT', salary: 67000 },
        { id: 40, name: 'Aubrey Phillips', age: 26, department: 'Marketing', salary: 47000 },
        { id: 41, name: 'Wyatt Campbell', age: 33, department: 'Finance', salary: 63000 },
        { id: 42, name: 'Hannah Parker', age: 24, department: 'HR', salary: 43000 },
        { id: 43, name: 'Landon Evans', age: 36, department: 'IT', salary: 64000 },
        { id: 44, name: 'Brooklyn Edwards', age: 28, department: 'Marketing', salary: 49000 },
        { id: 45, name: 'Nathan Collins', age: 31, department: 'Finance', salary: 62000 },
        { id: 46, name: 'Samantha Stewart', age: 29, department: 'HR', salary: 47000 },
        { id: 47, name: 'Gabriel Morris', age: 40, department: 'IT', salary: 70000 },
        { id: 48, name: 'Penelope Rogers', age: 25, department: 'Marketing', salary: 46000 },
        { id: 49, name: 'Isaac Reed', age: 32, department: 'Finance', salary: 63000 },
        { id: 50, name: 'Addison Bailey', age: 28, department: 'HR', salary: 45000 },
        { id: 51, name: 'Julian Hughes', age: 37, department: 'IT', salary: 69000 },
        { id: 52, name: 'Scarlett Foster', age: 26, department: 'Marketing', salary: 48000 },
        { id: 53, name: 'Eli Bennett', age: 34, department: 'Finance', salary: 64000 },
        { id: 54, name: 'Nora Simmons', age: 29, department: 'HR', salary: 46000 },
        { id: 55, name: 'Levi Howard', age: 39, department: 'IT', salary: 71000 },
        { id: 56, name: 'Madison Ward', age: 27, department: 'Marketing', salary: 49000 },
        { id: 57, name: 'Oliver Cox', age: 30, department: 'Finance', salary: 61000 },
        { id: 58, name: 'Skylar Russell', age: 29, department: 'HR', salary: 46000 },
        { id: 59, name: 'Hudson Torres', age: 38, department: 'IT', salary: 67000 },
        { id: 60, name: 'Paisley Peterson', age: 26, department: 'Marketing', salary: 47000 },
        { id: 61, name: 'Grayson Gray', age: 33, department: 'Finance', salary: 63000 },
        { id: 62, name: 'Aurora Jenkins', age: 27, department: 'HR', salary: 45000 },
        { id: 63, name: 'Jayden Cooper', age: 31, department: 'IT', salary: 62000 },
        { id: 64, name: 'Savannah Parker', age: 29, department: 'Finance', salary: 59000 },
        { id: 65, name: 'Lincoln Ramirez', age: 35, department: 'Marketing', salary: 58000 },
        { id: 66, name: 'Camila Adams', age: 28, department: 'HR', salary: 46000 },
        { id: 67, name: 'Chase Scott', age: 36, department: 'IT', salary: 70000 },
        { id: 68, name: 'Luna Edwards', age: 26, department: 'Marketing', salary: 47000 },
        { id: 69, name: 'Zachary Morris', age: 32, department: 'Finance', salary: 62000 },
        { id: 70, name: 'Stella Griffin', age: 30, department: 'HR', salary: 48000 },
        { id: 71, name: 'Leo Sanders', age: 40, department: 'IT', salary: 75000 },
        { id: 72, name: 'Valentina Brooks', age: 27, department: 'Marketing', salary: 50000 },
        { id: 73, name: 'Elliot Ward', age: 33, department: 'Finance', salary: 61000 },
        { id: 74, name: 'Hazel Jenkins', age: 29, department: 'HR', salary: 47000 },
        { id: 75, name: 'Roman Perry', age: 41, department: 'IT', salary: 76000 },
        { id: 76, name: 'Isla Bennett', age: 25, department: 'Marketing', salary: 46000 },
        { id: 77, name: 'Adam Fisher', age: 34, department: 'Finance', salary: 63000 },
        { id: 78, name: 'Everly Howard', age: 28, department: 'HR', salary: 45000 },
        { id: 79, name: 'Xavier Collins', age: 39, department: 'IT', salary: 72000 },
        { id: 80, name: 'Eliana Stewart', age: 26, department: 'Marketing', salary: 47000 },
        { id: 81, name: 'Ryder Price', age: 31, department: 'Finance', salary: 59000 },
        { id: 82, name: 'Naomi Gonzalez', age: 30, department: 'HR', salary: 48000 },
        { id: 83, name: 'Vincent Cooper', age: 38, department: 'IT', salary: 71000 },
        { id: 84, name: 'Bella Ross', age: 27, department: 'Marketing', salary: 50000 },
        { id: 85, name: 'Maxwell Bailey', age: 32, department: 'Finance', salary: 62000 },
        { id: 86, name: 'Lucy Turner', age: 29, department: 'HR', salary: 47000 },
        { id: 87, name: 'Hunter Murphy', age: 40, department: 'IT', salary: 74000 },
        { id: 88, name: 'Maya Hayes', age: 28, department: 'Marketing', salary: 49000 },
        { id: 89, name: 'Jasper Ramirez', age: 33, department: 'Finance', salary: 61000 },
        { id: 90, name: 'Nova Watson', age: 26, department: 'HR', salary: 46000 },
        { id: 91, name: 'Ezekiel Martinez', age: 35, department: 'IT', salary: 68000 },
        { id: 92, name: 'Leah Bell', age: 27, department: 'Marketing', salary: 47000 },
        { id: 93, name: 'Asher Hill', age: 31, department: 'Finance', salary: 59000 },
        { id: 94, name: 'Madeline Rivera', age: 29, department: 'HR', salary: 48000 },
        { id: 95, name: 'Charlie Flores', age: 36, department: 'IT', salary: 69000 },
        { id: 96, name: 'Addison Griffin', age: 26, department: 'Marketing', salary: 46000 },
        { id: 97, name: 'Samuel Reed', age: 32, department: 'Finance', salary: 62000 },
        { id: 98, name: 'Josephine Powell', age: 30, department: 'HR', salary: 47000 },
        { id: 99, name: 'Thomas Allen', age: 37, department: 'IT', salary: 73000 },
        { id: 100, name: 'Claire Mitchell', age: 28, department: 'Marketing', salary: 49000 }
    ];
    






// Function to display all employees
function displayEmployees() {
    const totalEmployees = Employees.map(employee => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Function to calculate total salaries
function calculateTotalSalaries() {
    const totalSalaries = Employees.reduce((acc, employee) => acc + employee.salary, 0);
    document.getElementById('employeesDetails').innerHTML = `<h2>Total Salaries: $${totalSalaries}</h2>`;
}
 
// Function to filter and display HR employees
function displayHREmployees() {
    const hrEmployees = Employees.filter(employee => employee.department === 'HR');
    if (hrEmployees.length === 0) {
        document.getElementById('employeesDetails').innerHTML = '<p>No HR Employees found.</p>';
        return;
    }
    const hrEmployeesDisplay = hrEmployees.map(employee => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to filter and display IT employees
function displayITEmployees() {
    const ITEmployees = Employees.filter(employee => employee.department === 'IT');
    if (ITEmployees.length === 0) {
        document.getElementById('employeesDetails').innerHTML = '<p>No IT Employees found.</p>';
        return;
    }
    const ITEmployeesDisplay = ITEmployees.map(employee => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = ITEmployeesDisplay;
}


// Function to filter and display Finance employees
function displayFinanceEmployees() {
    const FinanceEmployees = Employees.filter(employee => employee.department === 'Finance');
    if (FinanceEmployees.length === 0) {
        document.getElementById('employeesDetails').innerHTML = '<p>No Finance Employees found.</p>';
        return;
    }
    const FinanceEmployeesDisplay = FinanceEmployees.map(employee => 
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = FinanceEmployeesDisplay;
}


// Function to find an employee by ID
function findEmployeeById() {
    const employeeId = prompt("Enter Employee ID:");

    if (!employeeId || isNaN(employeeId)) {
        alert("Please enter a valid numeric Employee ID.");
        return;
    }

    const foundEmployee = Employees.find(emp => emp.id === parseInt(employeeId));

    if (foundEmployee) {
        alert(`Employee Found: \nID: ${foundEmployee.id}\nName: ${foundEmployee.name}\nDepartment: ${foundEmployee.department}\nSalary: $${foundEmployee.salary}`);
    } else {
        alert("No employee found with this ID.");
    }
}