import {useState} from 'react';
import Axios from 'axios';
import { navigate, Link } from '@reach/router';
import ProjectForm from '../components/ProjectForm';

const Create = props =>{    
    const [project, setProject]= useState({
        title:"",
        duedate:""
    })

    const [errors, setErrors] = useState({
        title:"",
        duedate:""
    })

    const handleInputChange = e =>{
        setProject({...project,
        [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        Axios.post(`http://localhost:8000/api/projects/`, project)
            .then(res => navigate('/'))
            .catch(err => err.response.status === 404 ? setErrors(err.response.data.errors):console.log(err))

    }

    return (
        <>
        <Link to="/"> Back to DashBoard </Link>
        <div className="card col-24 mx-auto">
            

            <h4 className="card-title">Plan a new Project</h4>
            <ProjectForm inputs={project} handleInputChange={handleInputChange} handleSubmit={handleSubmit} errors={errors} submitValue="Plan Your Next Project" />
        </div>
        </>

    )

}

export default Create;
