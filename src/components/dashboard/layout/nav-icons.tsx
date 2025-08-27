import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import { UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { ClockUser } from '@phosphor-icons/react/dist/ssr/ClockUser';
import { CalendarDots } from '@phosphor-icons/react/dist/ssr/CalendarDots';
import { SealPercent } from '@phosphor-icons/react/dist/ssr/SealPercent';

export const navIcons = {
  'chart-pie': ChartPieIcon,
  'gear-six': GearSixIcon,
  'plugs-connected': PlugsConnectedIcon,
  'clock-user': ClockUser,
  'calendar-dots': CalendarDots,
  'seal-percent': SealPercent,
  user: UserIcon,
  users: UsersIcon,
} as Record<string, Icon>;
