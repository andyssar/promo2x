export const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#ethics', label: 'Ethics' },
];

export const statItems = [
  { value: '10M+', label: 'Ethically\nSourced IPs', icon: '/icons/heart.svg' },
  { value: '195+', label: 'Countries\nCovered', icon: '/icons/globe.svg' },
  { value: '~99%', label: 'Success\nRate', icon: '/icons/gauge.svg' },
];

export const flagItems = [
  'us','uk','de','ca','fr','jp','br','in','au','kr','nl','it','es','pl','tr','mx','se','cn'
].map((code) => ({ src: `/flags/${code}.svg`, alt: code.toUpperCase() }));

export const featureItems = [
  {
    title: 'Full Parity API',
    description:
      'Automate your entire workflow with an API that mirrors every dashboard function, from proxy creation and configuration to managing limits and pulling analytics.',
    icon: '/icons/rocket.svg',
  },
  {
    title: 'Security & Budget Control',
    description:
      'Protect your operations and your bottom line by using Target Whitelists, Authorized IPs, and hard Spending Limits set in GB or USD for each project.',
    icon: '/icons/mask_1.svg',
  },
  {
    title: 'The Zero-Lag Dashboard',
    description:
      'Manage your team and projects effortlessly with a clean, fast interface that responds instantly, without the lag.',
    icon: '/icons/mask_2.svg',
  },
  {
    title: 'Unthrottled Performance',
    description:
      'Scale without bottlenecks. We provide maximum connection speeds and truly unlimited concurrent sessions to handle your most demanding tasks.',
    icon: '/icons/rocket.svg',
  },
];
