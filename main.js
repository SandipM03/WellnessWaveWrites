const navItems = document.querySelector('.nav_items');
const openNavBtn = document.querySelector('#open_.nav-items');
const closeNavBtn = document.querySelector('#close_.nav-items');

//opens nav dropdown
const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

//close nav dropdown
const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click',openNav);
closeNavBtn.addEventListener('click',closeNav);




const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show_sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide_sidebar-btn');

//show sideber on small device
const showSidebar = () =>{
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}

const hideSidebar = () =>{
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}

showSidebarBtn.addEventListener('click',showSidebar);
hideSidebarBtn.addEventListener('click',hideSidebar);