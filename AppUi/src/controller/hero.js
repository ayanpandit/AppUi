// Hero component configuration
import Hero1 from '../ui/hero/hero_1.jsx';
import hero1Code from '../ui/hero/code/hero_1.txt?raw';
import hero1Dependencies from '../ui/hero/dependencies/hero_1.txt?raw';
import Hero_2 from '../ui/hero/hero_2.jsx';
import hero2Code from '../ui/hero/code/hero_2.txt?raw';
import hero2Dependencies from '../ui/hero/dependencies/hero_2.txt?raw';

export const heroComponents = [
  {
    id: 'hero1',
    name: 'Hero 1',
    displayName: 'Hero 1',
    component: Hero1,
    code: hero1Code,
    dependencies: hero1Dependencies,
    category: 'hero'
  },
  {
    id: 'hero2',
    name: 'Hero 2',
    displayName: 'Hero 2',
    component: Hero_2,
    code: hero2Code,
    dependencies: hero2Dependencies,
    category: 'hero'
  },
];

export default heroComponents;
