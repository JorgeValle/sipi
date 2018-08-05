export interface Category {
  system: {
    id: number;
  };
  content: {
    name: string;
    slug: string;
    summary: string;
  };
  iconId: string;
}