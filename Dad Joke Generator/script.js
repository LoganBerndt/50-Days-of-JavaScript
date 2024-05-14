const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');


async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        },
    }

    // Uses await (async function)

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke


    // Using .then (non-async function)

    // fetch('https://icanhazdadjoke.com', config)
    //     .then(res => res.json())
    //     .then(data => {
    //         jokeEl.innerHTML = data.joke
    //     })

}


generateJoke();
jokeBtn.addEventListener('click', generateJoke) 
