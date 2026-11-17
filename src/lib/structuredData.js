import { profile } from '@/data/profile';
import { site } from '@/data/site';
import { socialLinks } from '@/data/socialLinks';
import { education } from '@/data/education';

function toOrganization(item) {
  const org = { '@type': item.schemaType ?? 'EducationalOrganization', name: item.institution };
  if (item.website) org.url = item.website;
  return org;
}

export function getPersonJsonLd() {
  const sameAs = socialLinks.filter((link) => link.type === 'link' && link.href).map((link) => link.href);

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.displayName,
    jobTitle: profile.roles[0],
    description: site.description,
    sameAs,
  };

  if (site.url) person.url = site.url;
  if (profile.fullName) person.alternateName = profile.fullName;

  const current = education.find((item) => item.status === 'current');
  if (current) person.affiliation = toOrganization(current);

  const alumni = new Map();
  education
    .filter((item) => item.status === 'completed')
    .forEach((item) => alumni.set(item.institution, toOrganization(item)));
  if (alumni.size > 0) person.alumniOf = [...alumni.values()];

  return person;
}