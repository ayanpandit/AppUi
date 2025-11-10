// Navbar component configuration
import Navbar1 from '../ui/navbar/navbar1';
import navbar1Code from '../ui/navbar/code/navbar1.txt?raw';

export const navbarComponents = [
  {
    id: 'navbar1',
    name: 'Navbar 1',
    displayName: 'Navbar 1',
    component: Navbar1,
    code: navbar1Code,
    category: 'navbar'
  },
  // Add more navbar components here as you create them
  // {
  //   id: 'navbar2',
  //   name: 'Navbar 2',
  //   displayName: 'Navbar 2',
  //   component: Navbar2,
  //   code: navbar2Code,
  //   category: 'navbar'
  // },
];

export default navbarComponents;