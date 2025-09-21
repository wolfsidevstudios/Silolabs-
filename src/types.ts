export interface Lab {
  id: number;
  name: string;
  badge: string;
  badgeColorClasses: string;
  description: string;
  link?: string;
  status: 'live' | 'coming_soon';
}

export interface BetaMember {
  name: string;
  memberCode: string;
  profileImage: string; // base64 string
}

export type Page = 'Home' | 'Labs' | 'News' | 'Sponsors' | 'Beta Program' | 'Access Card';
