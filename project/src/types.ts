export interface Project {
  id: string;
  title?: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}