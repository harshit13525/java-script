let qdata=[
    {
        'question':"25 + 58",
        'opt':["25","52","58","83"],
        'ans':4
    },
    {
        'question':"85 - 58",
        'opt':["27","72","85","58"],
        'ans':1
    },
    {
        'question':"4 * 4",
        'opt':["44","4","16","1"],
        'ans':3
    }
]

let que = document.getElementById("ques")
let opt = document.querySelectorAll(".opt")
let res = document.getElementById("res")

let qesnum = 0
let marks = 0 

function getques(){
    que.innerText = qdata[qesnum].question
    opt.forEach((btn,index)=>{
        btn.innerText = qdata[qesnum].opt[index]
    })
}

getques()

opt.forEach((btn,index)=>{
    btn.addEventListener("click",()=>{
        if(qdata[qesnum].ans==index+1){
            marks++
        }
        qesnum++;

        if(qesnum<qdata.length){
            getques()
        }
        else{
            res.innerText = `Your Total Marks Is :- ${marks}`
        }
    })
})
