function login(event) {
    event.preventDefault();

    // Retrieve the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform validation and authentication logic here
    // Send a request to the server for login verification

    // Example validation
    if (username === 'admin' && password === 'password') {
        // Successful login, redirect to the dashboard or another page
        alert('Login successful!');
        window.location.href = 'home.html';
    } else {
        // Invalid credentials, display an error message
        alert('Invalid username or password');
    }
}

function register(event) {
    event.preventDefault();

    // Retrieve the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform validation and registration logic here
    // Send a request to the server for user registration

    // Example registration
    alert('Registration successful!');
    window.location.href = 'home.html';
}

const candidates = [
    { name: 'John Doe', location: 'New York', jobRole: 'developer' },
    { name: 'Jane Smith', location: 'San Francisco', jobRole: 'designer' },
    { name: 'Mike Johnson', location: 'Chicago', jobRole: 'manager' },
    { name: 'Emily Davis', location: 'New York', jobRole: 'developer' },
    { name: 'Chris Lee', location: 'Los Angeles', jobRole: 'manager' }
];

const searchButton = document.getElementById('search-button');
const locationInput = document.getElementById('location-input');
const jobRoleSelect = document.getElementById('job-role-select');
const candidateList = document.getElementById('candidate-list');

searchButton.addEventListener('click', searchCandidates);

function searchCandidates() {
    const location = locationInput.value.toLowerCase();
    const jobRole = jobRoleSelect.value.toLowerCase();

    // Clear previous search results
    candidateList.innerHTML = '';

    // Filter candidates based on location and job role
    const filteredCandidates = candidates.filter(candidate => {
        const candidateLocation = candidate.location.toLowerCase();
        const candidateJobRole = candidate.jobRole.toLowerCase();

        if (location && candidateLocation !== location) {
            return false;
        }

        if (jobRole && candidateJobRole !== jobRole) {
            return false;
        }

        return true;
    });

    // Display the filtered candidates
    filteredCandidates.forEach(candidate => {
        const listItem = document.createElement('li');
        listItem.className = 'candidate-item';
        listItem.textContent = candidate.name;
        candidateList.appendChild(listItem);
    });
}