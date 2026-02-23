var jobs = [
    {id:1,companyName:"Programming Hero",position:"Frontend Developer",location:"Dhaka",type:"Full time",salary:"45k BDT",description:"Build websites",status:"all"},


    {id:2,companyName:"CodeStudio",position:"Backend Developer",location:"Rajshahi",type:"Remote",salary:"50k BDT",description:"Build websites",status:"all"},
    {id:3,companyName:"High Tech Park",position:"Instructor",location:"Rajshahi",type:"Contract",salary:"30k BDT",description:"Teach AI",status:"all"},
    {id:4,companyName:"VivaSoft",position:"Software Engineer",location:"Rajshahi/Dhaka",type:"Full-time",salary:"55k BDT",description:"Build websites",status:"all"},



    {id:5,companyName:"Chorcha",position:"IT Intern",location:"Rajshahi",type:"Part time",salary:"10k BDT",description:"IT support",status:"all"},

    {id:6,companyName:"BrainStation",position:"Backend Developer",location:"Rajshahi",type:"Remote",salary:"50k BDT",description:"Build websites",status:"all"},

    {id:7,companyName:"Selice",position:"Intern",location:"Dhaka",type:"Contract",salary:"10k BDT",description:"Build websites",status:"all"},
    {id:8,companyName:"NextGen IT",position:"Cyber Security Expert",location:"Remote",type:"Full time",salary:"70k BDT",description:"Fix bugs",status:"all"}
];

var currentTab = "all";

function showTab(tab){
    currentTab = tab;
    renderJobs();
}

function renderJobs(){
    var container = document.getElementById("jobContainer");
    container.innerHTML = "";


    var list = [];
    for(var i = 0; i < jobs.length; i++){
        if(currentTab == "all" || jobs[i].status == currentTab){
            list.push(jobs[i]);
        }
    }

    document.getElementById("jobCount").innerText = list.length + " Jobs";

    //empty img
    if(list.length == 0){

        var empty = document.createElement("div");

        empty.className = "empty";


        empty.innerHTML = "<img src='images/empty.png' alt='No Jobs'><h3>No Jobs Available</h3><p>Nothing to show in this section</p>";
        container.appendChild(empty);

        updateCounts();
        return;
    }

    
    for(var j = 0; j < list.length; j++){


        var job = list[j];

        var card = document.createElement("div");
        card.className = "card";

        var inner = "";
        inner += "<p><b>" + job.companyName + "</b></p>";


        inner += "<p>Position: " + job.position + "</p>";
        inner += "<p>Location: " + job.location + "</p>";

        inner += "<p>Type: " + job.type + "</p>";

        inner += "<p>Salary: " + job.salary + "</p>";

        inner += "<p>" + job.description + "</p>";
        inner += "<button onclick='markJob(" + job.id + ", \"interview\")'>Interview</button>";



        inner += "<button onclick='markJob(" + job.id + ", \"rejected\")'>Rejected</button>";
        inner += "<button onclick='removeJob(" + job.id + ")'>Delete</button>";

        card.innerHTML = inner;
        container.appendChild(card);
    }

    updateCounts();
}


function markJob(id, newStatus){
    for(var i = 0; i < jobs.length; i++){
        if(jobs[i].id == id){
            if(jobs[i].status == newStatus){
                jobs[i].status = "all";
            } else {
                jobs[i].status = newStatus;
            }
        }
    }
    renderJobs();
}


function removeJob(id){
    var updated = [];
    for(var i = 0; i < jobs.length; i++){
        if(jobs[i].id != id){
            updated.push(jobs[i]);
        }
    }
    jobs = updated;
    renderJobs();
}


function updateCounts(){
    document.getElementById("allCount").innerText = jobs.length;

    var interviewCount = 0;
    var rejectedCount = 0;

    for(var i = 0; i < jobs.length; i++){
        if(jobs[i].status == "interview") interviewCount++;
        if(jobs[i].status == "rejected") rejectedCount++;
    }

    document.getElementById("interviewCount").innerText = interviewCount;
    document.getElementById("rejectedCount").innerText = rejectedCount;
}

renderJobs();
