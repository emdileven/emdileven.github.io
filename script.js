const alumniData = [
    {
        name: "Rais Zainuri",
        campus: "Perjuangan University",
        photo: "https://avatars.githubusercontent.com/u/35108804?v=4",
        ig: "https://instagram.com/raiszainuri",
        linkedin: "https://linkedin.com/in/raiszainuri"
    },
    {
        name: "Rais Zainuri",
        campus: "Perjuangan University",
        photo: "https://avatars.githubusercontent.com/u/35108804?v=4",
        ig: "https://instagram.com/raiszainuri",
        linkedin: "https://linkedin.com/in/raiszainuri"
    },
    // Tambahkan data alumni lainnya di sini
];

function createAlumniCard(alumni) {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-lg-3';

    const card = document.createElement('div');
    card.className = 'alumni-card';

    const img = document.createElement('img');
    img.src = alumni.photo;
    img.alt = `${alumni.name} photo`;
    
    const name = document.createElement('h2');
    name.textContent = alumni.name;
    
    const campus = document.createElement('p');
    campus.textContent = alumni.campus;
    
    const links = document.createElement('div');
    links.className = 'links';
    
    const igLink = document.createElement('a');
    igLink.href = alumni.ig;
    igLink.textContent = 'Instagram';
    igLink.target = '_blank';
    
    const separator = document.createElement('span');
    separator.textContent = '  ';

    const linkedinLink = document.createElement('a');
    linkedinLink.href = alumni.linkedin;
    linkedinLink.textContent = 'LinkedIn';
    linkedinLink.target = '_blank';

    links.appendChild(igLink);
    links.appendChild(separator);
    links.appendChild(linkedinLink);
    
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(campus);
    card.appendChild(links);
    
    col.appendChild(card);
    return col;
}

document.addEventListener('DOMContentLoaded', () => {
    const alumniContainer = document.getElementById('alumniContainer');
    alumniData.forEach(alumni => {
        const col = createAlumniCard(alumni);
        alumniContainer.appendChild(col);
    });

    // Inisialisasi Masonry setelah elemen ditambahkan ke DOM
    new Masonry('#alumniContainer', {
        itemSelector: '.col-md-4',
        columnWidth: '.col-md-4',
        percentPosition: true
    });
});