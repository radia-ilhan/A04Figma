
let jobs = [
    {id:1, companyName:"Programming Hero", position:"Frontend Developer", location:"Dhaka", type:"Full time", salary:"45k BDT", description:"Build websites", status:"all"},
    {id:2, companyName:"CodeStudio", position:"Backend Developer", location:"Rajshahi", type:"Remote", salary:"50k BDT", description:"Build full stack websites", status:"all"},
    {id:3, companyName:"High Tech Park", position:"Instructor", location:"Rajshahi", type:"Contract", salary:"30k BDT", description:"Teach AI, ML", status:"all"},
    {id:4, companyName:"VivaSoft", position:"Software Engineer", location:"Rajshahi/Dhaka", type:"Full-time", salary:"55k BDT", description:"Build websites", status:"all"},
    {id:5, companyName:"Chorcha", position:"IT Intern", location:"Rajshahi", type:"Part time", salary:"10k BDT", description:"Supervise IT work", status:"all"},
    {id:6, companyName:"BrainStation", position:"Backend Developer", location:"Rajshahi", type:"Remote", salary:"50k BDT", description:"Build full stack websites", status:"all"},
    {id:7, companyName:"Selice", position:"Intern", location:"Dhaka", type:"Contract", salary:"10k BDT", description:"Build full stack websites", status:"all"},
    {id:8, companyName:"NextGen IT", position:"Cyber Security Expert", location:"Remote", type:"Full time", salary:"70k BDT", description:"Ethical hacking and fix bugs", status:"all"},
    {id:9, companyName:"NextGen IT", position:"Cyber Security Expert", location:"Remote", type:"Full time", salary:"70k BDT", description:"Ethical hacking and fix bugs", status:"all"}
];

let currentTab = "all";


function showTab(tab) {
    currentTab = tab;
    renderJobs();
}


function renderJobs() {
    let container = document.getElementById("jobContainer");
    container.innerHTML = "";

    let filtered = jobs.filter(job => currentTab === "all" || job.status === currentTab);

    document.getElementById("jobCount").innerText = filtered.length + " Jobs";

    if(filtered.length === 0) {
        container.innerHTML = `
            <div class="empty">
                <img src="images/empty.png" alt="No jobs">
                <h3>No jobs Available</h3>
                <p>No records found in this section</p>
            </div>
        `;
        updateDashboard();
        return;
    }

    filtered.forEach(job => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <p><b>Company:</b> ${job.companyName}</p>
            <p><b>Position:</b> ${job.position}</p>
            <p><b>Location:</b> ${job.location}</p>
            <p><b>Type:</b> ${job.type}</p>
            <p><b>Salary:</b> ${job.salary}</p>
            <p><b>Description:</b> ${job.description}</p>
            <button onclick="setStatus(${job.id}, 'interview')">Interview</button>
            <button onclick="setStatus(${job.id}, 'rejected')">Rejected</button>
            <button onclick="deleteJob(${job.id})">Delete</button>
        `;
        container.appendChild(div);
    });

    updateDashboard();
}

function setStatus(id, status) {
    let job = jobs.find(j => j.id === id);
    if(job.status === status) job.status = "all";
    else job.status = status;

    renderJobs();
}

function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id);
    renderJobs();
}

function updateDashboard() {
    document.getElementById("allCount").innerText = jobs.length;
    document.getElementById("interviewCount").innerText = jobs.filter(j => j.status === "interview").length;
    document.getElementById("rejectedCount").innerText = jobs.filter(j => j.status === "rejected").length;
}

renderJobs();