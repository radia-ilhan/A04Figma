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

var current = "all";

function show(tab){
    current = tab;
    render();
}

function render(){
    var container = document.getElementById("jobContainer");
    container.innerHTML = "";


    var list = [];
    for(var i = 0; i < jobs.length; i++){
        if(current == "all" || jobs[i].status == current){
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

        updates();
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

    updates();
}


function mark(id, newS){
    for(var i = 0; i < jobs.length; i++){
        if(jobs[i].id == id){
            if(jobs[i].status == newS){
                jobs[i].status = "all";
            } else {
                jobs[i].status = newS;
            }
        }
    }
    render();
}


function rmv(id){
    var updated = [];
    for(var i = 0; i < jobs.length; i++){
        if(jobs[i].id != id){
            updated.push(jobs[i]);
        }
    }
    jobs = updated;
    renderJ();
}


function updates(){
    document.getElementById("allCount").innerText = jobs.length;

    var inter = 0;
    var rej = 0;

    for(var i = 0; i < jobs.length; i++){
        if(jobs[i].status == "inter") inter++;
        if(jobs[i].status == "rejected") rej++;
    }

    document.getElementById("inter").innerText = inter;
    document.getElementById("reje").innerText = rej;
}

render();

