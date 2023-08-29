///sticky///
const stickyNav = document.getElementById("sticky-navbar");

function toggleStickyNavbar() {
    if (window.scrollY > stickyNav.offsetTop) {
        stickyNav.classList.add('sticky');

    } else {
        stickyNav.classList.remove("sticky");
    }
}
window.addEventListener('scroll', toggleStickyNavbar);


//sidebar//
function showSearchBox() {
    var searchcontainer = document.getElementById("searchcontainer");
    searchcontainer.classList.remove("hidden");
    console.log("hello")
}

function hideSearchBox() {
    var searchcontainer = document.getElementById("searchcontainer");
    searchcontainer.classList.add("hidden");
    console.log("close")
}

function performSearch() {
    var searchInput = document.getElementById("searchInput").value;
    // Perform your search operation using the search input value
    // Add your search logic here (e.g., making an API request, filtering data)
    console.log("Performing search: " + searchInput);

}