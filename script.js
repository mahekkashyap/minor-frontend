function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

document.getElementById('student-login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Example simple authentication for student
    const username = document.getElementById('student-username').value;
    const password = document.getElementById('student-password').value;

    if (username === 'student' && password === 'password') {
        showPage('student-dashboard');
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('teacher-login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Example simple authentication for teacher
    const username = document.getElementById('teacher-username').value;
    const password = document.getElementById('teacher-password').value;

    if (username === 'teacher' && password === 'password') {
        showPage('teacher-dashboard');
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('internal-factors-form').addEventListener('submit', function(e) {
    e.preventDefault();

    document.getElementById('internal-result').innerText = 'Your predicted SGPA of current semester is 8.7';
});

document.getElementById('external-factors-form').addEventListener('submit', function(e) {
    e.preventDefault();

    document.getElementById('external-result').innerText = 'Your predicted SGPA of current semester according to external factors is 8.10';
});

document.getElementById('add-student-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const enrollmentNumber = document.getElementById('new-enrollment-number').value;
    const name = document.getElementById('new-student-name').value;
    const midsemMarks = document.getElementById('new-midsem-marks').value;
    const attendancePercent = document.getElementById('new-attendance-percent').value;
    const assignmentMarks = document.getElementById('new-assignment-marks').value;
    const previousSgpa = document.getElementById('new-previous-sgpa').value;

    const newRow = `
        <tr>
            <td>${enrollmentNumber}</td>
            <td>${name}</td>
            <td>${midsemMarks}</td>
            <td>${attendancePercent}</td>
            <td>${assignmentMarks}</td>
            <td>${previousSgpa}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="updateStudent(this)">Update</button>
                <button class="btn btn-danger btn-sm" onclick="deleteStudent(this)">Delete</button>
            </td>
        </tr>
    `;

    document.getElementById('student-list').insertAdjacentHTML('beforeend', newRow);
    showPage('teacher-dashboard');
});

function deleteStudent(button) {
    const row = button.closest('tr');
    row.remove();
}

function updateStudent(button) {
    const row = button.closest('tr');
    const cells = row.children;
    document.getElementById('new-enrollment-number').value = cells[0].innerText;
    document.getElementById('new-student-name').value = cells[1].innerText;
    document.getElementById('new-midsem-marks').value = cells[2].innerText;
    document.getElementById('new-attendance-percent').value = cells[3].innerText;
    document.getElementById('new-assignment-marks').value = cells[4].innerText;
    document.getElementById('new-previous-sgpa').value = cells[5].innerText;

    row.remove();
    showPage('add-student');
}

// Show home page by default
showPage('home');
