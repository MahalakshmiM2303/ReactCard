

 export const Comp1 = (props) => {
  return (
    <>
    <div className="student">
    <table>
        <tr>
            <th>Name</th>
            <td>{props.name}</td>
        </tr>
        <tr>
            <th>Age</th>
            <td>{props.age}</td>
        </tr>
        <tr>
            <th>isstudent</th>
            <td>{props.isstudent ?"Yes" :"No"}</td>
        </tr>
    </table>
    
    </div>
    </>
  )
}

