const studentForm = document.getElementById('studentForm');
const outputContainer = document.getElementById('outputContainer');
studentForm.addEventListener('submit', function(event) {

    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const branch = document.getElementById('branch').value.trim();
    const section = document.getElementById('section').value.trim();
    const college = document.getElementById('college').value.trim();
    const location = document.getElementById('location').value.trim();
    const outputHTML = `
        <h3>✅ Data Captured Successfully:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Branch:</strong> ${branch}</p>
        <p><strong>Section:</strong> ${section}</p>
        <p><strong>College:</strong> ${college}</p>
        <p><strong>Location:</strong> ${location}</p>
    `;

    outputContainer.innerHTML = outputHTML;
    outputContainer.style.display = 'block';
});