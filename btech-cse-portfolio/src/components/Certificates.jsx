import { Award, ExternalLink, FileBadge } from 'lucide-react';
import SectionHeading from './SectionHeading';
export default function Certificates({ certificates }) {
  if (!certificates.length) return null;
  return <section className="section section-muted" id="certificates"><div className="container"><SectionHeading eyebrow="CONTINUOUS LEARNING" title="Certificates & learning." description="Credentials and courses that support my ongoing learning."/><div className="cert-grid">{certificates.map(cert => <article className="cert-card" key={cert.id || cert.title}><div className="cert-icon"><FileBadge size={23}/></div><div><span className="category-label">{cert.category || 'Certificate'}</span><h3>{cert.title}</h3><p>{cert.issuer}{cert.date ? ` · ${cert.date}` : ''}</p>{cert.demo && <p className="demo-note">Demonstration entry — replace with a real credential.</p>}<div className="cert-actions">{cert.file && <a href={cert.file} target="_blank" rel="noreferrer">View certificate <ExternalLink size={14}/></a>}{cert.verificationUrl && <a href={cert.verificationUrl} target="_blank" rel="noreferrer"><Award size={14}/> Verify</a>}</div></div></article>)}</div></div></section>;
}
