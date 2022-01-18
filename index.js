    let main=document.querySelector(".mainPage");
    let container=document.querySelector(".container");
    let startBtn2=document.querySelector(".srtBtn2");
    let srtBtn=document.querySelector(".srtBtn");
    let srtBtn1=document.querySelector(".srtBtn1");
    let part2=document.querySelector(".part2");
    let aside1=document.querySelector(".aside1");
    let section=document.querySelector(".section");
    let ques=document.querySelector(".ques");
    let options=document.getElementById(".options");
    let option1=document.getElementById("option1");
    let option2=document.getElementById("option2");
    let option3=document.getElementById("option3");
    let option4=document.getElementById("option4");
    let algl=document.querySelector(".algl");
    let aside2=document.querySelector(".aside2");
    let aside=document.querySelector(".aside");
    let startGame=document.getElementById("startGame");
    let questionDisplay=document.querySelector(".questionDisplay")
    let loosing=document.querySelector(".loosing")
    let winamount=document.querySelector(".winamount")
    var wrong=new Audio('./sounds/wrong.mp3');
    var right=new Audio('./sounds/kbc_option_lock_tune.mp3');
    var next=new Audio('./sounds/kbc.mp3')
    let count=0;
    let correctAns="";
    let price=0;
    let ANSWER=false;

    startGame.addEventListener("click" , ()=>{
        main.classList.add("none");
        part2.classList.remove("none");
        console.log("click");
        questions();
    });
    function questions(){
        let f=fetch("question.json");
        f.then((response)=>{
           return response.json();
        }).then((data)=>{
            if(count==0){
                show1(data);
                ANSWER=false;
            }
            if(ANSWER==true){
            show1(data);
            next.play();
            ANSWER=false;
            }

        })
    }
    function show1(data){
      console.log(data.data[0].moderate[count].question);
     let question=data.data[0].moderate[count].question;
     questionDisplay.innerHTML=question;
         let opts1=data.data[0].moderate[count].options[0].option
         let opts2=data.data[0].moderate[count].options[1].option
         let opts3=data.data[0].moderate[count].options[2].option
         let opts4=data.data[0].moderate[count].options[3].option
         let Answer=data.data[0].moderate[count].answer;
            correctAns=Answer;
        console.log(correctAns)
         option1.innerHTML=opts1;
         option2.innerHTML=opts2;
         option3.innerHTML=opts3;
         option4.innerHTML=opts4;
    //    let random=Math.random();
    //   random= Math.floor(random*15);
    //   console.log(random);
      count++;
    }
    algl.addEventListener('click' , questions);
    // algl.addEventListener('click' , ()=>{
    //     next.play();
    // });
    console.log(count);
   algl.addEventListener("click" , ()=>{
        document.getElementById("option1").classList.remove("back");
         document.getElementById("option2").classList.remove("back");
         document.getElementById("option3").classList.remove("back");
         document.getElementById("option4").classList.remove("back");
    })
    option1.addEventListener("click" , ()=>{
        console.log(option1.innerHTML)
        // let Answer=data.data[0].easy[que].answer
            // console.log(correctAns)
            // console.log(que)
            if(count<15)
            {if(option1.innerHTML==correctAns){
                // console.log("wow");
                option1.classList.remove("backs")
                option1.classList.add("back");
                price=price+1000;
                console.log(price);
                let li=document.createElement("h1");
                li.innerText=" you won Rs" + price;
                aside.appendChild(li);
                right.play();
                ANSWER=true;
                // console.log(ul)
            }
            else{
                console.log("oops");
                ANSWER=false;
                option1.style.background="red"
                wrong.play();
                part2.classList.add("none");
                loosing.classList.remove("none");
                winamount.innerHTML="W!n!ng Amount:"+price
            }}
    })
    option2.addEventListener("click" , ()=>{
        console.log(option2.innerHTML)
        console.log(correctAns)
        // console.log(que)
        if(count<15)
         {if(option2.innerHTML==correctAns){
                console.log("wow");
                option2.classList.add("back");
                price=price+5000;
                console.log(price);
                let li=document.createElement("h1");
                li.innerText=" you won Rs" + price;
                aside.appendChild(li)
                ANSWER=true;
                right.play();
            }
            else{
                console.log("oops")
                ANSWER=false;
                option2.style.background="red";
                wrong.play();
                part2.classList.add("none");
                loosing.classList.remove("none");
                winamount.innerHTML="W!n!ng Amount:"+price
            }}
    })
    option3.addEventListener("click" , ()=>{
        console.log(option3.innerHTML)
        console.log(correctAns)
        // console.log(que)
        if(count<15)
         {if(option3.innerHTML==correctAns){
                console.log("wow");
                option3.classList.add("back");
                price=price+5000;
                console.log(price);
                let li=document.createElement("h1");
                li.innerText=" you won Rs" + price;
                aside.appendChild(li)
                ANSWER=true;
                right.play();
                
            }
            else{
                console.log("oops")
                ANSWER=false;
                option3.style.background="red";
                wrong.play();
                part2.classList.add("none");
                loosing.classList.remove("none");
                winamount.innerHTML="W!n!ng Amount:"+price
            }}
    })
    option4.addEventListener("click" , ()=>{
        console.log(option4.innerHTML)
        console.log(correctAns)
        // console.log(que)
        if(count<15)
         {if(option4.innerHTML==correctAns){
                console.log("wow");
                option4.classList.add("back");
                price=price+5000;
                console.log(price);
                let li=document.createElement("h1");
                li.innerText=" you won Rs" + price;
                aside.appendChild(li)
                ANSWER=true;
                right.play();
            }
            else{
                console.log("oops")
                ANSWER=false;
                option4.style.background="red";
                wrong.play();
                part2.classList.add("none");
                loosing.classList.remove("none");
                winamount.innerHTML="W!n!ng Amount:"+price
            }}
    })
