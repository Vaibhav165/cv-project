import "/Users/vaibhavbansal/cv-project/src/styles/submit.css"
const EduSubmit = ({univ,deg,mf,uEmail})=>{
    return(
        <div className="educational">
        <h1>Education</h1>
        <h2>University : {univ}</h2>
        <div className="course">
        <p>Degree : {deg}</p>
        <p>Major field of study : {mf}</p>
        </div>
        </div>
    )
}

const PerSubmit = ({fname,lname,num,email,country})=>{
    return(
    <div className="personal">
    <h1>Personal Details </h1>
    <h2>{fname} {lname}</h2>
    <div className="contact">
    <p> {num}</p>
    <p> {email}</p>
    </div>
    <p>Country : {country}</p>
  </div>
    )
}

const ExpSubmit = ({comp,start,end,detail,role})=>{
    return(
        <div className="exper">
            <h1>Work history</h1>
            <div className="cr">
            <h2>{comp}</h2>
            <h3>Role: {role}</h3>
            </div>
            <div className="dat">
            <p>Stat date - {start}</p> <p>End date : {end}</p>
            </div>
            <h4>Details: {detail}</h4>
        </div>
    )
}

export {EduSubmit,PerSubmit,ExpSubmit};