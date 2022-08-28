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
    // value+=1
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
export {setError,setSuccess,isEmail,validatePassword};
