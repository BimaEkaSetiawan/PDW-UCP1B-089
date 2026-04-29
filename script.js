let members = [
    { name: "bima eka setiawan", email: "bima@example.com", interest: "Web Development" },
];

function loadMembers() {
    const storedMembers = localStorage.getItem('members');
    if (storedMembers) {
        members = JSON.parse(storedMembers);
    }
}

function saveMembers() {
    localStorage.setItem('members', JSON.stringify(members));
}

function displayMembers() {
    const tableBody = document.getElementById('member-table');
    if (tableBody) {
        tableBody.innerHTML = '';
        members.forEach(member => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${member.name}</td>
                <td>${member.email}</td>
                <td>${member.interest}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    alert(`Data yang diinput:\nNama: ${name}\nEmail: ${email}\nBidang Minat: ${interest}`);
    members.push({ name, email, interest });
    saveMembers();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Data berhasil disimpan: Nama: ${name}, Email: ${email}, Minat: ${interest}</p>`;
    document.getElementById('member-form').reset();
}

let imageArray = [
    './robot.jpg',
    './download.jpg'
];
let imageIndex = 0;

function changeImage() {
    const image = document.getElementById('gallery-image');
    image.src = imageArray[imageIndex];
    imageIndex = (imageIndex + 1) % imageArray.length;
}

function playAudio() {
    const audio = document.getElementById('audio-player');
    audio.play();
}

function pauseAudio() {
    const audio = document.getElementById('audio-player');
    audio.pause();
}

function showInfo() {
    alert('Ini adalah contoh audio dari internet.');
}

document.addEventListener('DOMContentLoaded', function() {
    loadMembers();
    displayMembers();
    const form = document.getElementById('member-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});