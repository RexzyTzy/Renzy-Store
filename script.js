// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}
// Fungsi untuk membuka WhatsApp ke nomor yang dituju
function redirectToWhatsApp(number) {
    let url = `https://wa.me/${number.replace('+', '')}`;
    window.open(url, '_blank');
}