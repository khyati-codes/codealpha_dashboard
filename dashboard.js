var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar(){
    if (sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}


function closeSidebar(){
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}



//Fonts.google.com/icons?selected=Material+Icons+Outlined:close:&icon.query=C&icon.set=Material+Icons