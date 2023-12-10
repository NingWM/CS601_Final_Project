// Function to load cat img
async function fetch_func() {
    try {
        console.log("Fetch cat img called");
        const response = await fetch('https://cataas.com/cat/says/Hello?fontColor=green&fontSize=30&type=square');
        console.log(response);
        // const data =  await response.json();
        console.log(response.url);
        // const cat_img_div = document.getElementById("cat-img-div");
        const cat_img = document.getElementById("cat-img");
        cat_img.src = response.url;
        console.log(cat_img);
        // cat_img_div.appendChild(cat_img);
    } catch (err) { console.log(err) }
}

//run fetch functionto load DOM content
document.addEventListener("DOMContentLoaded", (event) => {
    fetch_func();
});

//Cat fun fact
async function catfact_func() {
    try {
        console.log("Fetch Cat Fact called");
        const cat_facts = document.getElementById("cat-fact");
        cat_facts.replaceChildren();
        fact_num = document.getElementById('fact-input').value;
        //validate input before passing to API
        if (fact_num > 10 || fact_num < 1) {
            const num_warning = document.createElement('p');
            num_warning.id = 'input-warning';
            num_warning.innerHTML = "Please enter a number between 1 to 10.";
            cat_facts.appendChild(num_warning);
        }
        else {
            const response = await fetch(`https://catfact.ninja/facts?limit=${fact_num}`);
            console.log(response);
            const data = await response.json();
            console.log(data.data);

            data.data.forEach((element) => {
                fact = element.fact;
                const cat_fact = document.createElement('p');
                cat_fact.innerHTML = fact;
                cat_fact.classList.add('cat-col')
                cat_facts.appendChild(cat_fact);
            })
        }

    }
    catch (err) { console.log(err) }
}

