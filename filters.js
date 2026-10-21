(() => {
  const filters = document.querySelector('#project-filters');
  const buttons = [...filters.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('[data-project-tags]')];
  const count = document.querySelector('#project-count');
  const status = document.querySelector('#filter-status');
  const empty = document.querySelector('#empty-state');

  function selectFilter(tag) {
    let visible = 0;
    for (const project of projects) {
      const matches = tag === 'all' || project.dataset.projectTags.split(/\s+/).includes(tag);
      project.hidden = !matches;
      if (matches) visible++;
    }
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button.dataset.filter === tag));
    }
    const label = buttons.find(button => button.dataset.filter === tag).textContent;
    const noun = visible === 1 ? 'project' : 'projects';
    count.textContent = String(visible).padStart(2, '0');
    count.setAttribute('aria-label', `${visible} ${noun}`);
    status.textContent = tag === 'all'
      ? `Showing all ${visible} ${noun}`
      : `${visible} ${noun} tagged “${label}”`;
    empty.hidden = visible !== 0;
    if (!visible) {
      document.querySelector('#empty-title').textContent = tag === 'in-progress'
        ? 'Something new is always next.' : `No ${label.toLowerCase()} projects yet.`;
      document.querySelector('#empty-description').textContent = 'Nothing here just yet. There’s plenty to explore in the library.';
    }
  }

  for (const button of buttons) {
    button.addEventListener('click', () => selectFilter(button.dataset.filter));
  }
  document.querySelector('.reset-filter').addEventListener('click', () => {
    selectFilter('all');
    buttons[0].focus();
  });
  selectFilter('all');
  filters.hidden = false;
  status.hidden = false;
})();
