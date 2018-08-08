export interface Subcategory {
  system: {
    id: number;
    parentId: number;
  };
  content: {
    name: string;
    slug: string;
    summary: string;
  };
}