import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
export default function Projects() {
  const [query, setQuery] = useState(''); const [category, setCategory] = useState('All');
  const categories = useMemo(() => ['All', ...new Set(projects.map(p => p.category))], []);
  const filtered = projects.filter(p => (category === 'All' || p.category === category) && `${p.title} ${p.summary} ${p.technologies.join(' ')}`.toLowerCase().includes(query.toLowerCase().trim()));
  const clear = () => { setQuery(''); setCategory('All'); };
  return <section className="section" id="projects"><div className="container"><SectionHeading eyebrow="SELECTED WORK" title="Projects with a purpose." description="A selection of builds, experiments, and ideas. Replace the demo entries with your own work."/>
    <div className="project-toolbar"><label className="search-box"><Search size={18}/><span className="sr-only">Search projects</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects or technologies…"/></label><div className="filter-wrap"><SlidersHorizontal size={16}/><label className="sr-only" htmlFor="project-category">Filter by category</label><select id="project-category" value={category} onChange={e => setCategory(e.target.value)}>{categories.map(c => <option key={c}>{c}</option>)}</select></div><button className="clear-filters" onClick={clear}><RotateCcw size={14}/> Clear</button></div>
    <p className="results-count">Showing <b>{filtered.length}</b> of {projects.length} projects</p>
    {filtered.length ? <div className="projects-grid">{filtered.map(project => <ProjectCard project={project} key={project.id}/>)}</div> : <div className="empty-state"><Search size={25}/><h3>No projects found</h3><p>Try another keyword or clear your filters.</p><button className="button button-outline" onClick={clear}>Clear filters</button></div>}
  </div></section>;
}
