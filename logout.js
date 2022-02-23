import { logout } from './fetch-utils.js';

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', async () => {
    await logout();
    window.location.replace('/');
});