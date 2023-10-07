    // Fungsi untuk mengimpor dan menyisipkan konten navbar
    function includeNavbar() {
        fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            const menuList = document.getElementById('menu-list');
            const menuIcon = document.getElementById("menu-icon");
           menuIcon.addEventListener("click", () => {
            menuList.classList.toggle('hidden')            

           })

        });
    }
    
    function includeContact(){
    fetch('contact.html')
    .then(response => response.text())
    .then(data =>{
        document.getElementById('contact-container').innerHTML = data;
    } )
}

// Panggil fungsi includeNavbar untuk mengimpor navbar
includeNavbar();
includeContact()

