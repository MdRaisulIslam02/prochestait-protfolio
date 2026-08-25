export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ServiceCategory {
  id: number;
  name: string;
  slug: string;
  icon: string | null;
  is_active: boolean;
  sort_order: number;
}

export interface Service {
  id: number | string;
  title: string;
  slug?: string;
  service_category_id: number;
  category: ServiceCategory;
  icon: string;
  color: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string | null;
  quote: string;
  metric: string | null;
  rating: number;
  color: string | null;
  initials: string | null;
  is_active: boolean;
  sort_order: number;
}

export interface QuotationPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service_type?: string;
  budget_range?: string;
  timeline?: string;
  message: string;
}

export interface PackageQuotationPayload {
  name: string;
  email?: string;
  phone: string;
  package_name: string;
  message?: string;
}

export interface AboutSetting {
  id: number;
  hero_tagline_en: string;
  hero_tagline_bn: string;
  hero_description_en: string | null;
  hero_description_bn: string | null;
  mission_en: string | null;
  mission_bn: string | null;
  vision_en: string | null;
  vision_bn: string | null;
  projects_count: string;
  clients_count: string;
  years_count: string;
  retention_rate: string;
  phone: string | null;
  email: string | null;
  office_address_en: string | null;
  office_address_bn: string | null;
  business_hours_en: string | null;
  business_hours_bn: string | null;
  map_embed_url: string | null;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string | null;
  image: string | null;
  initials: string | null;
  department: string | null;
  skills: string[] | null;
  facebook: string | null;
  linkedin: string | null;
  is_active: boolean;
  sort_order: number;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  url: string | null;
  is_active: boolean;
  sort_order: number;
}

export interface ContactSetting {
  id: number;
  hero_tagline_en: string;
  hero_tagline_bn: string;
  hero_description_en: string | null;
  hero_description_bn: string | null;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  facebook_messenger_url: string | null;
  office_address_en: string | null;
  office_address_bn: string | null;
  business_hours_en: string | null;
  business_hours_bn: string | null;
  map_embed_url: string | null;
}

export interface BilingualText {
  en: string;
  bn: string;
}

export interface Project {
  id: number;
  slug: string;
  featured: boolean;
  title: BilingualText;
  description: BilingualText;
  longDescription: BilingualText;
  image: string | null;
  link: string | null;
  tags: string[];
  category: string;
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}
