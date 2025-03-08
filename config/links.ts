// config/links.ts
import { Settings } from '@mui/icons-material';

interface Links {
  label: string;
  href: string;
  icon: string;
}

export const links: Links[] = [
  {
    label: 'Demand and Supply',
    href: '/demand-supply',
    icon: '/demand-supply.svg',
  },
  {
    label: 'Inventory Management',
    href: '/inventory',
    icon: '/inventory-management.svg',
  },
  {
    label: 'Logistics & Route',
    href: '/logistics',
    icon: '/logistics-route.svg',
  },
  {
    label: 'Anomalies & Risks',
    href: '/anomalies',
    icon: '/anomalies-risks.svg',
  },
  {
    label: 'Carbon Footprint',
    href: '/carbon-footprint',
    icon: '/carbon-footprint.svg',
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: '/settings.svg',
  },
];