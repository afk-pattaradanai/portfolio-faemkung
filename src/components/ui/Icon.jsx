import { createElement } from 'react';
import {
  Briefcase,
  Building2,
  Camera,
  Code,
  Compass,
  Cpu,
  FolderGit2,
  GraduationCap,
  Layers,
  Mail,
  MessageCircle,
  School,
  Sparkles,
  Users,
} from 'lucide-react';

// Neutral Lucide icons instead of brand marks → no incorrect logos.
const icons = {
  facebook: Users,
  instagram: Camera,
  github: FolderGit2,
  line: MessageCircle,
  mail: Mail,
  school: School,
  building: Building2,
  graduation: GraduationCap,
  briefcase: Briefcase,
  cpu: Cpu,
  code: Code,
  compass: Compass,
  layers: Layers,
  sparkles: Sparkles,
};

export default function Icon({ name, size = 20, strokeWidth = 1.75, ...props }) {
  return createElement(icons[name] ?? Sparkles, {
    size,
    strokeWidth,
    'aria-hidden': 'true',
    focusable: 'false',
    ...props,
  });
}