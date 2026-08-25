import type { AboutSetting, ContactSetting, ContactMessagePayload, Project, QuotationPayload, PackageQuotationPayload, Service, ServiceCategory, Testimonial, TeamMember, Partner } from '@/types';

// Controlled via NEXT_PUBLIC_API_URL in .env.local (or .env.production)
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api';

const BACKEND_ORIGIN = API_BASE_URL.replace(/\/api$/, '');

/** Converts a relative storage path (e.g. /storage/projects/x.jpg) to an absolute URL. */
export function resolveMediaUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${BACKEND_ORIGIN}${path.startsWith('/') ? '' : '/'}${path}`;
}

type NextCacheOptions = { revalidate?: number | false; tags?: string[] };

type RequestOptions = {
  method?: string;
  body?: unknown;
  token?: string;
  next?: NextCacheOptions;
};

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, token, next } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    ...(next ? { next } : {}),
  } as RequestInit);

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(error.message ?? 'API error');
  }

  return res.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string, token?: string) =>
    request<T>(path, { token }),

  post: <T>(path: string, body: unknown, token?: string) =>
    request<T>(path, { method: 'POST', body, token }),
};

export const serviceCategoriesApi = {
  list: () => request<{ data: ServiceCategory[] }>('/service-categories', { next: { revalidate: 3600, tags: ['service-categories'] } }),
};

export const servicesApi = {
  list: () => request<{ data: Service[] }>('/services', { next: { revalidate: 3600, tags: ['services'] } }),
  get: (slug: string) => request<{ data: Service }>(`/services/${slug}`, { next: { revalidate: 3600, tags: ['services'] } }),
};

export const testimonialsApi = {
  list: () => request<{ data: Testimonial[] }>('/testimonials'),
};

export const teamApi = {
  list: () => request<{ data: TeamMember[] }>('/team'),
};

export const partnersApi = {
  list: () => request<{ data: Partner[] }>('/partners'),
};

export const quotationsApi = {
  submit: (data: QuotationPayload) =>
    request<{ message: string; data: { id: number } }>('/quotations', {
      method: 'POST',
      body: data,
    }),
};

export const projectsApi = {
  list: () => request<{ data: Project[] }>('/projects', { next: { revalidate: 3600, tags: ['projects'] } }),
  get: (slug: string) => request<{ data: Project }>(`/projects/${slug}`, { next: { revalidate: 3600, tags: ['projects'] } }),
};

export const aboutApi = {
  get: () => request<{ data: AboutSetting }>('/about', { next: { revalidate: 3600, tags: ['about'] } }),
};

export const packageQuotationsApi = {
  submit: (data: PackageQuotationPayload) =>
    request<{ message: string; data: { id: number } }>('/package-quotations', {
      method: 'POST',
      body: data,
    }),
};

export const contactApi = {
  get: () => request<{ data: ContactSetting }>('/contact', { next: { revalidate: 3600, tags: ['contact'] } }),
  submit: (data: ContactMessagePayload) =>
    request<{ message: string; data: { id: number } }>('/contact-messages', {
      method: 'POST',
      body: data,
    }),
};
