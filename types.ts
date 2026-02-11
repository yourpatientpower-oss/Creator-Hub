
export enum AppTab {
  DASHBOARD = 'Dashboard',
  CONTENT_SERIES = 'Content Series',
  TEMPLATES = 'Templates',
  ANALYTICS = 'Analytics',
  BRAND_KIT = 'Brand Kit',
}

export interface SeriesItem {
  id: string;
  title: string;
  frequency: string;
  created: string;
  platforms: ('instagram' | 'twitter' | 'tiktok' | 'linkedin')[];
  structure: string[];
  nextPost: string;
  autoFill: boolean;
  status: 'active' | 'draft';
  coverImage?: string;
}

export interface PipelineDraft {
  id: string;
  name: string;
  series: string;
  confidence: number;
  status: 'Review Required' | 'Ready to Post' | 'Draft';
  content?: string;
}

export interface CompletedPost {
  id: string;
  title: string;
  platform: 'instagram' | 'twitter' | 'tiktok' | 'linkedin';
  date: string;
  content: string;
  series: string;
  metrics?: {
    views: string;
    likes: string;
  };
}
