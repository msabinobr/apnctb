import { LucideIcon } from 'lucide-react';

export type VisualType = 'mobile' | 'browser' | 'book' | 'browser-text';

export interface StrategyItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  icon: LucideIcon;
  visualType: VisualType;
  visualSrc?: string; // Optional image source for the content inside the mockup
}

export interface RoadmapWeek {
  week: number;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export interface Asset {
  id: number;
  title: string;
  description: string;
}