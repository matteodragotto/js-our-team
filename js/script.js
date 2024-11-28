const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png"
  }
];

const form = document.querySelector('.form')
const inputs = document.querySelectorAll('input')
const row = document.querySelector('.row')

function newMemberCard (member) {
  const {name, role, email, img} = member
  return  `<div class="card">
            <div class="img">
              <img src="${img}" alt="${img}">
            </div>
            <div class="txt">
              <div class="name">
                <p>${name}</p>
              </div>
              <div class="role">                   
                <p>${role}</p>
              </div>
              <div class="email">
                <p>${email}</p>
              </div>
            </div>            
          </div>`
}

for (let teamMember of teamMembers) {
  row.innerHTML += newMemberCard(teamMember)

}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const newMember = {}
  for (let input of inputs) {
    
    const inputValue = input.value.trim()
    const inputName = input.name    
    
    newMember[inputName] = inputValue
  }    
 
  teamMembers.push(newMember) 
  

  row.innerHTML = ''

  for (let teamMember of teamMembers) {
    row.innerHTML += newMemberCard(teamMember)
  
  }

  form.reset()
})



