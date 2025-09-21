// Fix: Define and export the Lab and Page types.
export interface Lab {
  id: number;
  name: string;
  badge: string;
  badgeColorClasses: string;
  description: string;
  link?: string;
  status: 'live' | 'coming_soon';
}

export type Page = 'Home' | 'Labs' | 'News' | 'Sponsors';
