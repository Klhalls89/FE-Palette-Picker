import React, { Component } from "react";
import Project from "../Project/Project";
import { newProject, updateProject } from "../../Utility/ApiCalls";
import "./SubmitProject.css";

class SubmitProject extends Component {
  constructor() {
    super();
    this.state = {
      project_title: "",
      editId: null,
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ project_title: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { edit } = this.props;
    const { project_title, editId } = this.state;

    if (!edit) {
      newProject({ project_title });
      this.props.handleProject("project", project_title);
    } else {
      updateProject({ project_title }, editId);
    }
    this.setState({
      project_title: "",
      editId: null,
    });
  };

  editProjectTitle = () => {
    const { projects, folderToEdit, edit } = this.props;
    const foundProject = projects.find(
      (project) => project.id === folderToEdit.project_id
    );
    if (edit) {
      this.setState({
        project_title: foundProject.project_title,
        editId: foundProject.id,
      });
    }
  };

  render() {
    return (
      <div className="projects">
        <form
          className="project-form"
          onMouseEnter={() => this.editProjectTitle()}
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            className="title-input"
            onChange={this.handleChange}
            autoComplete="off"
            value={this.state.project_title}
            placeholder="Enter Project Title"
          />
          <button className="submit-btn">Submit</button>
        </form>
        <section className="saved-portion">
          <Project />
        </section>
      </div>
    );
  }
}

export default SubmitProject;
