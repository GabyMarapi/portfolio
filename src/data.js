window.filterProjects = (projects, filterBy) =>{
    console.log(projects);
    
    if(filterBy === 'all'){
        return projects
    }
    return projects.filter(elm=>elm.category === filterBy)
}