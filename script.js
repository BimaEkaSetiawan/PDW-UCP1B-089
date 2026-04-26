// Array untuk menyimpan data anggota
let members = [
    { name: "bima eka setiawan", email: "bima@example.com", interest: "Web Development" },
];

// Fungsi untuk memuat data dari localStorage
function loadMembers() {
    const storedMembers = localStorage.getItem('members');
    if (storedMembers) {
        members = JSON.parse(storedMembers);
    }
}

// Fungsi untuk menyimpan data ke localStorage
function saveMembers() {
    localStorage.setItem('members', JSON.stringify(members));
}

// Fungsi untuk menampilkan data anggota di tabel
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

// Fungsi untuk menangani submit form
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    
    // Tampilkan alert
    alert(`Data yang diinput:\nNama: ${name}\nEmail: ${email}\nBidang Minat: ${interest}`);
    
    // Simpan ke array
    members.push({ name, email, interest });
    
    // Simpan ke localStorage
    saveMembers();
    
    // Tampilkan di bawah form
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Data berhasil disimpan: Nama: ${name}, Email: ${email}, Minat: ${interest}</p>`;
    
    // Reset form
    document.getElementById('member-form').reset();
}

// Array gambar dan counter untuk bergilir
let imageArray = [
    'https://via.placeholder.com/300?text=Tech+Community+1',
    'https://via.placeholder.com/300?text=Tech+Community+2',
    'https://via.placeholder.com/300?text=Tech+Community+3',
    'https://via.placeholder.com/300?text=Tech+Community+4'
];
let imageIndex = 0;

// Fungsi untuk mengganti gambar bergantian
function changeImage() {
    const image = document.getElementById('gallery-image');
    image.src = imageArray[imageIndex];
    imageIndex = (imageIndex + 1) % imageArray.length;
}

// Fungsi untuk memutar audio
function playAudio() {
    const audio = document.getElementById('audio-player');
    audio.play();
}

// Fungsi untuk menghentikan audio
function pauseAudio() {
    const audio = document.getElementById('audio-player');
    audio.pause();
}

// Fungsi untuk menampilkan info audio
function showInfo() {
    alert('Ini adalah contoh audio dari internet.');
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    loadMembers();
    displayMembers();
    
    const form = document.getElementById('member-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});