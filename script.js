// Toggle nav menu
const toggleNav = () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
  }
  
  // Filter projects
  const filterProjects = (category) => {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      const categories = project.dataset.categories.split(',');
      if (categories.includes(category) || category === 'all') {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  }
  
  // Event listeners
  const toggleNavBtn = document.querySelector('.toggle-nav');
  toggleNavBtn.addEventListener('click', toggleNav);
  
  const projectFilters = document.querySelectorAll('.project-filter');
  projectFilters.forEach(filter => {
    filter.addEventListener('click', (event) => {
      const category = event.target.dataset.category;
      filterProjects(category);
    });
  });
  