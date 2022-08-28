
let color=["black","white","gray","darkblue","yellow","pink","skyblue"];
let btn=document.getElementById("btn")
btn.addEventListener("click",function(){
    let randomcolor=color[Math.floor(Math.random()*color.length)]
    document.body.style.background=randomcolor;
})
const firstName=document.getElementById("u");
const lastName=document.getElementById("u1");
const dob=document.getElementById("u2");
const email=document.getElementById("u3");
const password=document.getElementById("u4");
const confirmPassword=document.getElementById("u5");
const gender=document.getElementById("Gender")
const number=document.getElementById("u7");
document.querySelector(".button").addEventListener("click",function(event){
    event.preventDefault();
    var obj={};
    // console.log("hello")
    const data=checkData(obj);
    console.log(data);
    // fs.writeFileSync("user.json",data)
    if (value==6){
        alert("Your Form has been submitted.")
    }
    value=0
})
let value=0;
function checkData(obj){
    const userName=firstName.value.trim()
    const userLastName=lastName.value.trim()
    const userDob=dob.value
    obj["Date Of Birth"]=userDob;
    const userGender=gender.value
    // obj["User Gender"]=gender.innerText;
    const userEmail=email.value.trim()
    const userpassword=password.value.trim()
    const userConPassword=confirmPassword.value.trim()
    const userNumber=number.value.trim()
    if(userName==""){
        setError(firstName,"\nit cann't be blank")
    }
    else{
        setSuccess(firstName)
        obj["First Name"]=userName;
    }
    if (userLastName==""){
        setError(lastName,"\nit cann't be blank")
    }else{
        setSuccess(lastName)
        obj["Last Name"]=userLastName;
    }
    if(userEmail==""){
        setError(email,"\nEmail cann't be blank")
    }
    else if(!isEmail(userEmail)){
        setError(email,"\nEmail is invailid")
    }
    else{
        setSuccess(email)
        obj["User Email"]=userEmail;
    }
    if(userpassword==""){
        setError(password,"\nPassword cann't be blank")
    }
    else if(!validatePassword(userpassword)){
        setError(password,"\nPlease enter the strong Password")
    }

    else{
        setSuccess(password)
        obj["User Password"]=userpassword;
    }
    if(userConPassword==""){
        setError(confirmPassword,"\nPassword cann't be blank")
    }
    else if(userpassword!=userConPassword){
        setError(confirmPassword,"\nPassword does not match")
    }
    else{
        setSuccess(confirmPassword)
    }
    if(userNumber==""){
        setError(number,"\nNumber cann't be blank")
    }
    else if(!isnumber(userNumber) || userNumber.length!=10){
        setError(number,"\nInvalid Mobile Nnumber")
    }
    else{
        setSuccess(number)
        obj["User Mobile Number"]=userNumber;
    }
    return obj
}
function setError(user,msg){
    const userparent=user.parentElement
    userparent.className="error"
    const span=userparent.querySelector("span")
    const fa=userparent.querySelector(".fa-solid")
    fa.className="fa-solid fa-circle-exclamation"
    span.innerText=msg;
}
function setSuccess(user){
    const userparent=user.parentElement
    userparent.className="success"
    const fa=userparent.querySelector(".fa-solid")
    fa.className="fa-solid fa-circle-check"
    value+=1
}
function isEmail(e){
    const reg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(e)
}
function validatePassword(str)
{
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}
function isnumber(m){
    const regex=/\d/
    return regex.test(m)
}
const l="hi"
// export {setError,setSuccess,l}