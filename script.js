
// Fungsi untuk mengimpor dan menyisipkan konten navbar
function includeNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        });
}

// Panggil fungsi includeNavbar untuk mengimpor navbar
includeNavbar();
