const alumniData = [
    {
        "name": "Zacky Muchlas Dharmawan",
        "nickname": "Zacky",
        "campus": "Universitas Indonesia",
        "ig": "https://instagram.com/zacky_md",
        "linkedin": "https://www.linkedin.com/in/zacky-muchlas-dharmawan/",
        "cv": "https://drive.google.com/open?id=1ypeara4TSDXEvWVLlMRovN7lAtlxVxzC"
    },
    {
        "name": "Nicholas Yang",
        "nickname": "NY",
        "campus": "Universitas Sumatera Utara",
        "ig": "https://instagram.com/nicholasyangg",
        "linkedin": "https://www.linkedin.com/in/nicholas-yang925?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "cv": "https://drive.google.com/open?id=1b593pcPlDnKZCTF3clLqzqlYImM8Ssai"
    },
    {
        "name": "Mohammad Izamul Fikri Fahmi",
        "nickname": "Izam",
        "campus": "Politeknik Negeri Malang",
        "ig": "https://www.instagram.com/izamulfi/",
        "linkedin": "https://www.linkedin.com/in/izamulfikri/",
        "cv": "https://drive.google.com/open?id=11vJwiPa5Npo4yjK8_1PvX9o-QjvuCr0j"
    },
    {
        "name": "Ajri Inda Robby",
        "nickname": "Ajri",
        "campus": "Institut Teknologi Nasional Bandung",
        "ig": "https://www.instagram.com/jri_inr/",
        "linkedin": "https://www.linkedin.com/in/ajri-robby-24ab91221/",
        "cv": "https://drive.google.com/open?id=1Y5DjTItwUDgiojBnMvGUTtXFKVMMLuNT"
    },
    {
        "name": "Fina Valentina",
        "nickname": "Fina",
        "campus": "Universitas Multimedia Nusantara",
        "ig": "https://www.instagram.com/finvalnnk/",
        "linkedin": "https://www.linkedin.com/in/fina-valentina-387256231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "cv": "https://drive.google.com/open?id=1gtPhOgdUbnxQtv5kHZjGRb5W440sblK-"
    },
    {
        "name": "Agung Riyadi",
        "nickname": "Agung",
        "campus": "Gunadarma",
        "ig": "https://www.instagram.com/_agung_r_/",
        "linkedin": "https://www.linkedin.com/in/agungr10/",
        "cv": "https://drive.google.com/open?id=1wxfHgHTEKHgAXAzzseHnk5vqlnR_7Tky"
    },
    {
        "name": "Fariz Aziz Kurniawan",
        "nickname": "Fariz",
        "campus": "UIN Sunan Kalijaga Yogyakarta",
        "ig": "https://www.instagram.com/lafarizo/",
        "linkedin": "https://www.linkedin.com/in/lafarizo/",
        "cv": "https://drive.google.com/open?id=12bw9wVwf20ihDelbIPZBNqEMCPMADWyS"
    },
    {
        "name": "Muhammad Alif Ilham",
        "nickname": "Alif",
        "campus": "Universitas Indonesia",
        "ig": "https://www.instagram.com/alifilhmm/",
        "linkedin": "https://www.linkedin.com/in/muhammadalifilham?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "cv": "https://drive.google.com/open?id=1aU1Klw8RjHpg93tAJAFLpKWp6KjwPx5J"
    },
    {
        "name": "Regi Kurniawan",
        "nickname": "Regi",
        "campus": "Institut Teknologi PLN",
        "ig": "https://www.instagram.com/regi.kt30?igsh=MTBsOXZnNDU0N2Npeg==",
        "linkedin": "https://www.linkedin.com/in/regi-kurniawan-777435290/",
        "cv": "https://drive.google.com/open?id=1yPLTlHI-pxpOaPqcI0m8nSfze1Br2Map"
    },
    {
        "name": "Safitri",
        "nickname": "Fitri",
        "campus": "Universitas Janabadra",
        "ig": "https://www.instagram.com/saafitrisa?igsh=em9yc3JjMWJudXk4",
        "linkedin": "https://www.linkedin.com/in/safitri-safitri0212/",
        "cv": "https://drive.google.com/open?id=1TVxOD5xcFQVojaOtps99d5Jq0HuoKIwl"
    },
    {
        "name": "Muhammad Habibi Ramadhan",
        "nickname": "Bibim",
        "campus": "Gunadarma",
        "ig": "https://www.instagram.com/habibi.ramadhannn/",
        "linkedin": "https://www.linkedin.com/in/habibiramadhan",
        "cv": "https://drive.google.com/open?id=19gHtGvu3iX2CVf159ZS2Q2GEpFK7BS-p"
    },
    {
        "name": "Maitsa Adinda Prana Putri",
        "nickname": "Dinda",
        "campus": "Universitas Brawijaya",
        "ig": "https://www.instagram.com/maitsaadinda/",
        "linkedin": "https://www.linkedin.com/in/maitsaadinda/",
        "photo": "Maitsa Adinda Prana Putri A006D4KX3486.jpg"
    }
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