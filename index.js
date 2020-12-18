console.log('Profiles.');

const data = [
    {
        "name": "Abhishek Choudhary",
        "location": "Ujjain",
        "experience": "2 years 4 months",
        "previousCompancy": "Itron",
        "speciality": "Backend",
        "image": "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        "name": "Ankit Panchal",
        "location": "Ujjain",
        "experience": "4 years",
        "previousCompancy": "TCS",
        "speciality": "Backend",
        "image": "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
        "name": "Abhishek Goyal",
        "location": "Ujjain",
        "experience": "2 years",
        "previousCompancy": "TCS",
        "speciality": "Backend",
        "image": "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
        "name": "Aakansha Soni",
        "location": "Bilaspur",
        "experience": "2 years 5 months",
        "previousCompancy": "Oracle",
        "speciality": "Backend",
        "image": "https://randomuser.me/api/portraits/women/11.jpg"
    },
    {
        "name": "Poonam Singhai",
        "location": "Indore",
        "experience": "4 years 3 months",
        "previousCompancy": "Riverbed",
        "speciality": "Backend",
        "image": "https://randomuser.me/api/portraits/women/31.jpg"
    }
];

function checkoutProfiles(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}

const pro = checkoutProfiles(data);
display();

let next = document.getElementById('next');
next.addEventListener('click', display);

function display() {
    const currentCandidate = pro.next().value;
    if(currentCandidate != undefined){
        let image = document.getElementById('image');
        image.innerHTML = `<img src="${currentCandidate.image}"></img>`;
        let profile = document.getElementById('profile');
        profile.innerHTML = `
        <ul class="list-group">
            <li class="list-group-item active" aria-current="true">${currentCandidate.name}</li>
            <li class="list-group-item">Lives in ${currentCandidate.location}</li>
            <li class="list-group-item">Experience is ${currentCandidate.experience}</li>
            <li class="list-group-item">Current company is ${currentCandidate.previousCompancy}</li>
            <li class="list-group-item">${currentCandidate.speciality}</li>
        </ul>    
        `;    
    }
    else{
        window.alert('Candidate list is finished.');
    }
}