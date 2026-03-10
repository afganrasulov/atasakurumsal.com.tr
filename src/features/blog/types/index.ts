export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  summary: string | null;
  keywords: string[];
  faq: FaqItem[];
  seo_score: number;
  schema_json: SchemaJson;
  created_at: string;
  updated_at: string;
  topic_id: string | null;
}

export interface BlogPostCard {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  keywords: string[];
  seo_score: number;
  created_at: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SchemaJson {
  article?: Record<string, unknown>;
  faq?: Record<string, unknown>;
  howto?: Record<string, unknown>;
}

export interface BlogPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
