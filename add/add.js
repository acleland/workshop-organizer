import { createParticipant, getWorkshops, checkAuth } from '../fetch-utils.js';

const addForm = document.getElementById('add-form');
const selectWorkshop = document.getElementById('workshop-select');

checkAuth();

addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(addForm);
    const name = formData.get('name');
    const workshopID = formData.get('workshop-id');
    await createParticipant(name, workshopID);
    addForm.reset();
    window.location.replace('/workshops');

});

window.addEventListener('load', async () => {
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const option = document.createElement('option');
        option.value = workshop.id;
        option.textContent = workshop.name;
        selectWorkshop.append(option);
    }
});