import moment from 'moment';
import {useState} from 'react';

const ProjectCard = props => {
    const { title, id, status, handleStatus, deadline } = props

    const[overdue, setOverdue]= useState({
        
            color: moment().diff(moment(deadline)) > 0? 'red' : 'black'
        
    })


    return (
        <div className="card col-10 mx-auto">
            <div className="card-body">
                <h4 className="card-title"> {title}</h4>
                
                <p style={overdue}> Due Date: {moment(deadline).format('L')}</p>

                {
                    status === "backlog" ?
                        <div className="card-footer">
                            <button className="btn btn-info" onClick={()=> handleStatus(id,status)}> Start Project</button>
                        </div>
                        : status === "inprogress" ?
                            <div className="card-footer">
                                <button className="btn btn-success" onClick={()=> handleStatus(id,status)}>Move To Complete</button>
                            </div>
                            : <div className="card-footer">
                                <button className="btn btn-warning" onClick={()=> handleStatus(id,status)}> Remove Project </button>
                            </div>

                }
            </div>
        </div>


    )
}

export default ProjectCard;