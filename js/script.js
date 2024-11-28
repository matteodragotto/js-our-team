const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const row = document.querySelector('.row')


function newMemberCard (member) {
  const {name, role, email, img} = member
  return           `<div class="card">
                     <div class="img">
                       <img src="${img}" alt="${img}">
                     </div>
                     <div class="name">
                       <p>${name}</p>
                     </div>
                     <div class="role">                   
                       <p>${role}</p>
                     </div>
                     <div class="email">
                       <p>${email}</p>
                     </div>
                   </div>`
}



for (let teamMember of teamMembers) {
  row.innerHTML += newMemberCard(teamMember)

}