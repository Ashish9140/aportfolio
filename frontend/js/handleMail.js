document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector(".fName");
    let email = document.querySelector(".pEmail");
    let message = document.querySelector(".message");
    let subject = document.querySelector(".iSubject");
    fetch("https://stchrom.tgb.software/sendemail", {
        method: "POST",
        // mode: 'no-cors',
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value,
            subject: subject.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));
    name.value = ''
    email.value = ''
    message.value = ''
    subject.value = ''
    alert("Email Sent SUccessfully");
})

// http://localhost:5000
// https://ashish-l65t.onrender.com


function fetchProject() {
    fetch("https://stchrom.tgb.software/projects", {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then((json) => {
            const projectBody = document.querySelector(".projects_backend");

            json.projects.forEach((element) => {
                // console.log(element);
                const tr = document.createElement('tr');
                tr.innerHTML =
                    `<td><a class="courseLista" target="_blank"
                href="${element.githublink}">${element.pname}</a></td>
                <td><a class="courseLista" target="_blank"
                href="${element.deploylink}">
                <i class="fa fa-solid fa-link" title="${element.pname}">
            </a></td>`
                projectBody.appendChild(tr);
            })
        });
}

fetchProject();