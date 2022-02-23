import { checkAuth, deleteParticipant, getUser, getWorkshops } from '../fetch-utils.js';
import { renderParticipant, renderWorkshop } from '../render-utils.js';

const loginEmail = document.getElementById('login-email');
const workshopsEl = document.getElementById('workshops');

window.addEventListener('load', async () => {
    checkAuth();
    loginEmail.textContent = getUser().email;

    await displayWorkshops();



});

async function displayWorkshops() {
    workshopsEl.textContent = '';
    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const workshopEl = renderWorkshop(workshop);
        
        const ul = document.createElement('ul');
        ul.classList.add('participants');
        workshopEl.append(ul);
        for (let participant of workshop.participants) {
            const li = renderParticipant(participant);
            ul.append(li);
            li.addEventListener('click', async () => {
                deleteParticipant(participant.id);
                displayWorkshops();
            });
        }

        workshopsEl.append(workshopEl);
    }
}