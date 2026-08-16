export interface FeatureBar {
  id: string;
  label: string;
}

export interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
  number: string | null;
  active: boolean;
}

export interface ServiceCatalogItem {
  id: string;
  name: string;
  price: string;
  duration: string;
}
