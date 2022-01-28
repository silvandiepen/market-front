export interface PanelColumn {
  title: string;
  description: string;
  image?: string;
  action?: {
    label: string;
    link: string;
  };
}
