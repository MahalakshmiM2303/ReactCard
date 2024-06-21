const user=[{
  name:"Jas",
  loc:"NewYork",
  posi:"Front-end Dev",
  skills:["UI/UX","HTML","CSS","Java","JavaScript","ReactJS"],
  online:true,
  profile:"pic1.jpg",
},
{
  name:"Charles",
  loc:"Los Angels",
  posi:"Software Engineer",
  skills:["C","C++","Python","Java","DSA","R","SRS"],
  online:true,
  profile:"pic3.jpg",

},{
  name:"Harry",
  loc:"London",
  posi:"Data Scientist",
  skills:["Excel","Power BI","Scipy","Pandas","R","Matplotlib","Tableau"],
  online:false,
  profile:"pic2.jpg",
},];

function User(props)
{
    return( <div className="container">
        <span className={props.online ?"pro online":"pro offline"}>{props.online ?"ONLINE":"OFFLINE"}</span>
        <img src={props.profile} alt="user" className="image" />
        <h3 className="name">{props.name}</h3>
        <h3 className="loc">{props.loc}</h3>
        <p>{props.posi}</p>
        <div className="buttons">
            <button className="b1">Message</button>
            <button className="b2"> Following</button>
        </div>
        <div className="skills">
            <h6 >Skills</h6>
            <ul>
              {props.skills.map((skill,index)=>(

               <li key={index}>{skill}</li> 
              ))}
            </ul>
        </div>

    </div>
    );
}

export const Card = () => {
  return (
    <>
   {
    user.map((user,index)=>(
        <User key={index} name={user.name} loc={user.loc} posi={user.posi} online={user.online} profile={user.profile} skills={user.skills} />
    ))}
       
      
    </>
  );
};

 
