import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Clientes', href: paths.dashboard.customers, icon: 'users' },
  { key: 'working_hours', title: 'Horas de Trabalho', href: paths.dashboard.working_hours, icon: 'clock-user' },
  { key: 'services', title: 'Serviços', href: paths.dashboard.services, icon: 'seal-percent' },
  { key: 'appoiments', title: 'Agendamentos', href: paths.dashboard.appoiments, icon: 'calendar-dots' },
  { key: 'settings', title: 'Configurações', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Conta', href: paths.dashboard.account, icon: 'user' },
] satisfies NavItemConfig[];
