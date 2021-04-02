import {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';
import ProjectCard from '../components/ProjectCard';
import moment from 'moment';



const Main = props =>{
    const[projects, setProjects]= useState({
        backlog:[],
        inprogress: [],
        completed: []
    });

    const[toggle, setToggle] =useState(false);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/projects")
            .then( res =>{
                setProjects({
                    backlog: res.data.results.filter(a => a.status ==="backlog").sort(function(a, b) {return moment(a.duedate).diff(moment(b.duedate));}),
                    inprogress: res.data.results.filter(a => a.status ==="inprogress").sort(function(a, b) {return moment(a.duedate).diff(moment(b.duedate));}),
                    completed: res.data.results.filter(a => a.status ==="completed").sort(function(a, b) {return moment(a.duedate).diff(moment(b.duedate));}),
                })

            })
            .catch(err => console.log(err))
    },[toggle])

    const destroyProject = (id) => {
        Axios.delete(`http://localhost:8000/api/projects/${id}`)
            .then( res =>{
                setToggle(!toggle);
            })
            .catch(err => console.log(err))
    }

    const handleStatus = (id, status) =>{
        if(status !== "completed"){
            var changestatus = {
            status: status === "backlog" ? "inprogress" : status === "inprogress" ? "completed" : "completed"
        }

        Axios.put(`http://localhost:8000/api/projects/${id}`, changestatus )
            .then( res =>{
                setToggle(!toggle);
            })
            .catch(err => console.log(err))
        }
        else{
            destroyProject(id)
        }
        
    }

    return (
        <div className="d-flex flex-wrap justify-content-center col=11 mx-auto">
            {/* BackLog Div */}
            <div className="col-3">
                <h3> Backlog </h3>
                {
                    projects.backlog.map((a,i) =>{
                        return <ProjectCard key={i} id={a._id} title={a.title} status={a.status} deadline={a.duedate} handleStatus={handleStatus}/>
                    })
                }
            </div>
            {/* In Progress Div */}
            <div className="col-3">
                <h3>In Progress</h3>
                {
                    projects.inprogress.map((a,i) =>{
                        return <ProjectCard key={i} id={a._id} title={a.title} status={a.status} deadline={a.duedate} handleStatus={handleStatus}/>
                    })
                }
            </div>
            {/* Completed Div */}
            <div className="col-3">
                <h3>Completed</h3>
                {
                    projects.completed.map((a,i) =>{
                        return <ProjectCard key={i} id={a._id} title={a.title} status={a.status} deadline={a.duedate} handleStatus={handleStatus}/>
                    })
                }
            </div>
            <Link className="btn btn-primary col-5" to="/new"> Add New Project </Link>

        </div>
    )
}

export default Main;