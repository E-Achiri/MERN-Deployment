

const ProjectForm = props =>{
    const {inputs, handleInputChange, handleSubmit, errors, submitValue}= props;

    return(
        <form onSubmit={handleSubmit} className="col-7 mx-auto">
            <div className="form-group">
                <label htmlFor="title"> Project Title: </label>
                <input type="text" className="form-control" onChange={handleInputChange} value={inputs.title} name="title"/>
                <span className="text-danger"> {errors.title ? errors.title.message: ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="duedate"> Due Date: </label>
                <input type="date" className="form-control" onChange={handleInputChange} value={inputs.duedate} name="duedate"/>
                <span className="text-danger"> {errors.duedate ? errors.duedate.message: ""}</span>
            </div>
            <input type="submit" value = {submitValue} className="btn btn-primary"/>
        </form>
    )
}

export default ProjectForm;