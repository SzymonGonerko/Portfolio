import {
  SiReact,
  SiRedux,
  SiDotnet,
  SiBlender,
  SiThreedotjs,
  SiPrettier,
  SiEslint,
  SiGithub,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiWebstorm,
  SiVisualstudiocode,
  SiWebpack,
  SiMaterialui,
  SiGulp,
  SiLinux,
  SiWindows,
  SiHtml5,
  SiExpo,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCsharp,
  SiMiro,
  SiJira,
} from 'react-icons/si';
import { IconType } from 'react-icons';
import { FaReact } from 'react-icons/fa';

export interface SkillItem {
  label: string;
  icon?: IconType;
  group?: number;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface skillsStructure {
  heading: string;
  categories: SkillCategory[];
}

export interface skillsStructureIT {
  heading: string;
  categories: {
    title: string;
    items: {
      label: string;
      icon: IconType;
      group?: number;
    }[];
  }[];
}

export const skillsdata: skillsStructure[] = [
  {
    heading: 'Skills',
    categories: [
      {
        title: '',
        items: [
          { label: 'Software development', group: 1 },
          { label: 'Process automation', group: 2 },
        ],
      },
      {
        title: '',
        items: [
          { label: 'Cloud deployment', group: 3 },
          { label: 'Cybersecurity standards', group: 1 },
          { label: 'Policy compliance (NIS/NIS2, GDPR)', group: 1 },
          { label: 'Employee Onboarding & Offboarding', group: 1 },
          { label: 'Agile', group: 1 },
          { label: 'SEO', group: 1 },
        ],
      },
    ],
  },
  {
    heading: 'Tech Stack',
    categories: [
      {
        title: '',
        items: [
          { label: 'React', group: 3 },
          { label: 'React Native', group: 2 },
          { label: 'Microsoft Azure', group: 3 },
        ],
      },
      {
        title: '',
        items: [
          { label: 'Kubernetes', group: 1 },
          { label: 'Docker', group: 1 },
          { label: 'MS SQL', group: 1 },
        ],
      },
      {
        title: '',
        items: [
          { label: 'JavaScript/TypeScript', group: 3 },
          { label: 'C#/.NET', group: 3 },
          { label: 'Python', group: 3 },
        ],
      },
    ],
  },
];

export const skillsdatait: skillsStructureIT[] = [
  {
    heading: 'Technologies',
    categories: [
      {
        title: '',
        items: [
          { label: 'HTML5', icon: SiHtml5 },
          { label: 'CSS3', icon: SiCss3 },
          { label: 'SCSS', icon: SiSass },
          { label: 'JavaScript', icon: SiJavascript },
          { label: 'TypeScript', icon: SiTypescript },
          { label: 'Python', icon: SiPython },
          { label: 'C#', icon: SiCsharp },
        ],
      },
    ],
  },
  {
    heading: 'Services',
    categories: [
      {
        title: '',
        items: [
          { label: 'GitHub', icon: SiGithub },
          { label: 'MS Azure', icon: SiMicrosoftazure },
          { label: 'MS SQL', icon: SiMicrosoftsqlserver },
          { label: 'Google Cloud', icon: SiGooglecloud },
          { label: 'EXPO', icon: SiExpo },
          { label: 'Kubernetes', icon: SiKubernetes },
          { label: 'Docker', icon: SiDocker },
          { label: 'Miro', icon: SiMiro },
          { label: 'Jira', icon: SiJira },
        ],
      },
    ],
  },
  {
    heading: 'IDE',
    categories: [
      {
        title: '',
        items: [
          { label: 'WebStorm', icon: SiWebstorm },
          { label: 'Visual Studio Code', icon: SiVisualstudiocode },
          { label: 'Visual Studio', icon: SiVisualstudiocode },
          { label: 'Gulp', icon: SiGulp },
          { label: 'WebPack', icon: SiWebpack },
          { label: 'Linux', icon: SiLinux },
          { label: 'Windows', icon: SiWindows },
        ],
      },
    ],
  },

  {
    heading: 'Other Tools',
    categories: [
      {
        title: '',
        items: [
          { label: 'React', icon: SiReact },
          { label: 'React Native', icon: FaReact },
          { label: 'Redux', icon: SiRedux },
          { label: '.NET', icon: SiDotnet },
          { label: 'Material-UI', icon: SiMaterialui },
          { label: 'JSS', icon: SiJavascript },
          { label: 'Blender', icon: SiBlender },
          { label: 'Three.js', icon: SiThreedotjs },
          { label: 'Prettier', icon: SiPrettier },
          { label: 'Eslint', icon: SiEslint },
        ],
      },
    ],
  },
];
