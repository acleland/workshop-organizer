import { checkAuth, getUser, getWorkshops, logout } from '../fetch-utils.js';

const loginEmail = document.getElementById('login-email');

window.addEventListener('load', async () => {
    checkAuth();
    loginEmail.textContent = getUser().email;

    const workshops = await getWorkshops();
    console.log(workshops);
    
});
