export function renderWorkshop(workshop) {
    const div = document.createElement('div');
    div.classList.add('workshop');
    const h3 = document.createElement('h3');
    h3.textContent = workshop.name;
    div.append(h3);
    return div;
}

export function renderParticipant(participant) {
    const li = document.createElement('li');
    li.classList.add('participant');
    li.textContent = participant.name;
    return li;
}