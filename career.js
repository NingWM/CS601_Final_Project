// Function to load JSON into a tabular format
async function fetch_work(url) {
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
            const execMsg = document.getElementById("execmsg2");
            execMsg.innerHTML = "JSON Fetch Failed!";
            const failimg = document.getElementById("img-ft2");
            failimg.src = `https://http.cat/${response.status}`;
            failimg.alt = 'HTTP Cats';
        }

        const data = await response.json();

        //create job section
        const work_sec = document.getElementById("work-sec")
        data.career.forEach((element, index) => {
            const ttl_logo = document.createElement('div');
            ttl_logo.classList.add("title_logo");
            //Title
            const work_pos = document.createElement("div");
            work_pos.classList.add('work-position');
            work_pos.innerHTML = element.exp.Title;
            ttl_logo.appendChild(work_pos)

            //logo
            const com_logo = document.createElement('img');
            com_logo.classList.add('work-logo');
            com_logo.src = element.exp.logo;
            com_logo.alt = "Company logo";
            ttl_logo.appendChild(com_logo)

            work_sec.appendChild(ttl_logo);

            //Company
            const work_comp = document.createElement("div")
            work_comp.classList.add('work-company');
            work_comp.innerHTML = element.exp.Company;
            work_sec.appendChild(work_comp);
            //Year
            const work_year = document.createElement("div")
            work_year.classList.add('work-year');
            work_year.innerHTML = element.exp.Year;
            work_sec.appendChild(work_year);
            //Experience
            const work_exp = document.createElement("div")
            work_exp.classList.add('work-experience');
            const allValue = Object.values(element.exp.Details);
            allValue.forEach(function (value) {
                const work_dtl = document.createElement("p");
                work_dtl.classList.add('work_detail');
                work_dtl.innerHTML = value;
                work_exp.appendChild(work_dtl);
            })
            work_sec.appendChild(work_exp);

        }
        )


    } catch (err) { console.log(err) }
}


//run fetch functionto load DOM content
document.addEventListener("DOMContentLoaded", (event) => {
    fetch_work("career.json");
});