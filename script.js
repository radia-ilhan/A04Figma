var jobs = [

    {id:1, companyName:"Programming Hero", position:"Frontend Developer", location:"Dhaka", type:"Full time", salary:"45k BDT", description:"Build websites", status:"all"},

 
    
    {id:2, companyName:"CodeStudio", position:"Backend Developer", location:"Rajshahi", type:"Remote", salary:"50k BDT", description:"Build websites", status:"all"},
    {id:3, companyName:"High Tech Park", position:"Instructor", location:"Rajshahi", type:"Contract", salary:"30k BDT", description:"Teach AI", status:"all"},
   
    
    {id:4, companyName:"VivaSoft", position:"Software Engineer", location:"Rajshahi/Dhaka", type:"Full-time", salary:"55k BDT", description:"Build websites", status:"all"},
    {id:5, companyName:"Chorcha", position:"IT Intern", location:"Rajshahi", type:"Part time", salary:"10k BDT", description:"IT support", status:"all"},


    
    {id:6, companyName:"BrainStation", position:"Backend Developer", location:"Rajshahi", type:"Remote", salary:"50k BDT", description:"Build websites", status:"all"},
    {id:7, companyName:"Selice", position:"Intern", location:"Dhaka", type:"Contract", salary:"10k BDT", description:"Build websites", status:"all"},
    {id:8, companyName:"NextGen IT", position:"Cyber Security Expert", location:"Remote", type:"Full time", salary:"70k BDT", description:"Fix bugs", status:"all"}
];

var current = "all";



//  ebar html button theke show(tab,e) function call 
// click kora button active class e add

function show(tab,e) {

    current = tab;

    var btns = document.querySelectorAll(".tabs button");

    for(var i=0;i<btns.length;i++){
        btns[i].classList.remove("active");
    }

    e.target.classList.add("active");

    render();
}


//html theke job container

function render(){

    var container = document.getElementById("jobContainer");



    
//ekhon prev jobs remove kori
    
    container.innerHTML="";

    var filt=[];
    for(var i=0;i<jobs.length;i++){

        if(current==="all"){
    filt.push(jobs[i]);

}

else{

    if(jobs[i].status===current){


        filt.push(jobs[i]);
    }
}

    }




    // filt array te koyta job ase
    
    var countText = filt.length + " Jobs";
    document.getElementById("jobCount").innerText = countText;


    if(filt.length===0){

        var empt=document.createElement("div");

        empt.className="empty";
        empt.innerHTML=

        "<img src='images/empty.png'>"+

            
        "<h3>No Jobs Available</h3>"+         
        "<p>No records found in this section</p>";
        container.appendChild(empt);


        
        updateDash();

        return;
    }

    //stat status mixed likhsilam dekhe bhul hoisilo

    for(var j=0;j<filt.length;j++){

        var job=filt[j];

        var card=document.createElement("div");

        card.className="card";


        var statusText="Not Applied";
        var statusClass="status-default";


        if(job.status==="interview"){
            statusText="Interview";
            statusClass="status-interview";
        }

        if(job.status==="rejected"){

            
            statusText="Rejected";
            
            statusClass="status-rejected";
        }

        
        

        var html="";


        html+="<div class='card-top'>";

        

        html+="<button class='delete-btn' onclick='rmv("+job.id+")'>Delete</button>";

        html+="</div>";

        html+="<h4>"+job.companyName+"</h4>";
        html+="<p>"+job.position+"</p>";

        html+="<p>"+job.location+" • "+job.type+" • "+job.salary+"</p>";


        
        html+="<span class='status "+statusClass+"'>"+statusText+"</span>";

        html+="<p>"+job.description+"</p>";


        
        html+="<button onclick='setStatus("+job.id+",\"interview\")'>Interview</button>";
        html+="<button onclick='setStatus("+job.id+",\"rejected\")'>Rejected</button>";



        card.innerHTML=html;

        container.appendChild(card);

    }


    updateDash();

}




//id diye clicked job ber korbo then stat theke interview/rejected
function setStatus(id,status){

    for(var i=0;i<jobs.length;i++){

        if(jobs[i].id===id){

            if(jobs[i].status===status){
                jobs[i].status="all";
            }
            else{
                jobs[i].status=status;
            }

        }

    }

    render();

}



function rmv(id){

    var newJobs=[];

    for(var i=0;i<jobs.length;i++){

        if(jobs[i].id!==id){

            newJobs.push(jobs[i]);
        }

    }

    var updatedJobs = newJobs;

    jobs = updatedJobs;
    
    render();

}


//var e reje lekhate status e rejected likhbo
function updateDash(){

    document.getElementById("allCount").innerText=jobs.length;

    var inter=0;
    var reje=0;


    for(var i=0;i<jobs.length;i++){

        if(jobs[i].status==="interview"){
            inter++;
        }

        if(jobs[i].status==="rejected"){
            reje++;      }

    }
    document.getElementById("inter").innerText=inter;

    document.getElementById("reje").innerText=reje;

}



render();
