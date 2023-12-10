// Function to load JSON into a tabular format
async function fetch_func(url) {
    try {
        console.log("Fetch Function called");
        const response = await fetch(url);
        //return console log if status is 200
        if (response.status == 200) {
            console.log("Success!");
        }
        //pop up a warning if the status is not 200
        else {
            console.log("Failure");
            const execMsg = document.getElementById("execmsg");
            execMsg.innerHTML = "JSON Fetch Failed!";
            const failimg = document.getElementById("img-ft");
            failimg.src = `https://http.cat/${response.status}`;
            failimg.alt = 'HTTP Cats'
        }

        const data = await response.json();

        const table = document.createElement("table");
        const trow = document.createElement("tr");

        //get all column headers
        const allHeader = Object.keys(data.education[0].exp);

        //create table headers
        allHeader.forEach(function (key) {
            const th = document.createElement('th');
            th.textContent = key;
            trow.appendChild(th);
        })
        table.appendChild(trow);

        //create table body
        data.education.forEach((element, index) => {
            const allValue = Object.values(element.exp);
            const trow = document.createElement("tr");
            allValue.forEach(function (value) {
                const td = document.createElement('td');
                td.textContent = value;
                trow.appendChild(td);
            })
            table.appendChild(trow);
        }
        )
        //add to content div
        const ctntDiv = document.getElementById("education_tbl");
        ctntDiv.appendChild(table);
    } catch (err) { console.log(err) }

}

//run fetch functionto load DOM content
document.addEventListener("DOMContentLoaded", (event) => {
    fetch_func("education.json");
    //remove alt if there is no error img
    const errImg = document.getElementById('img-ft');
    errImg.alt = '';
});

// Function to toggle photos in grid
function photoGallery(imgs) {
    const expandImg = document.getElementById('expandedImg');
    const imgText = document.getElementById('imgtext');
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = 'block';
}

// Load Tongji photo as default
const defaultimg = document.getElementById("tj");
photoGallery(defaultimg);


const errImg = document.getElementById('img-ft');


// Func to toggle humbegar
// function menuToggle() {
//     const x = document.getElementById("app");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// } 