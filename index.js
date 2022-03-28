
let userData = [
    {
        name: "damon",
        email: "damon@mx.com"
    },
    {
        name: "putin",
        email: "putin@mx.com"
    },
    {
        name: "daleen",
        email: "daleen@mx.com"
    },
    {
        name: "ternanto",
        email: "ternanto@mx.com"
    },
    {
        name: "blade",
        email: "blade@mx.com"
    },
    {
        name: "dmx",
        email: "dmx@mx.com"
    },
    {
        name: "snoop",
        email: "snoop@mx.com"
    },
    {
        name: "rihana",
        email: "rihana@mx.com"
    },
    {
        name: "marshal",
        email: "marshal@mx.com"
    }
]

let users = [];

const search = () => {
    display();
    const searchInput = document.querySelector("[data-search]")

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase()
        users.forEach(user => {
            const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
            user.element.classList.toggle("hide", !isVisible);
        })
    })
}


const display = () => {
    const UserCards = document.querySelector("[User-cards-Template]")
    const cardContainer = document.querySelector("[data-user-card-container]")

    users = userData.map(user => {
        const  card = UserCards.content.cloneNode(true).children[0];
        const  title = card.querySelector("[title-header]")
        const  email = card.querySelector("[body-header]")
        title.textContent = user.name;
        email.textContent = user.email;
        cardContainer.append(card)
        return{name:user.name , email:user.email , element:card}
    })
}

search();
