export type TopicId =
  | 'erp_tally'
  | 'tax_compliance'
  | 'crm_consulting'
  | 'domestic_tours'
  | 'international_tours'
  | 'spiritual_tours'
  | 'group_packages'
  | 'ai_tools'
  | 'automation'
  | 'saas'
  | 'web_app_dev'
  | 'ecommerce';

export type Segment = 'trust_code' | 'arvi_yatra' | 'easy_pc';

export interface Subscriber {
  id: string;
  email: string;
  topics: TopicId[];
  is_active: boolean;
  created_at: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  category: string;
  segment: Segment;
  topics: TopicId[];
  tags: string[];
  external_link?: string;
  cover_image?: string;
  views: number;
  published: boolean;
  auto_send_newsletter: boolean;
  created_at: string;
  updated_at: string;
}

export interface Newsletter {
  id: string;
  subject: string;
  html_content: string;
  target_segment?: Segment | 'all';
  target_topics: TopicId[];
  status: 'draft' | 'sent' | 'scheduled';
  sent_at?: string;
  scheduled_at?: string;
  recipient_count: number;
  created_at: string;
}

export interface EmailEvent {
  id: string;
  newsletter_id: string;
  subscriber_id: string;
  event_type: 'sent' | 'opened' | 'clicked' | 'bounced';
  metadata: Record<string, unknown>;
  created_at: string;
}