export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum PlaygroundMode {
  CODE_GEN = 'CODE_GEN',
  EXPLAIN = 'EXPLAIN',
  DOCS = 'DOCS'
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  isCode?: boolean;
}