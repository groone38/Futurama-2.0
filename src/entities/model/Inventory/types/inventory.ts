export interface Inventory {
  title: string;
  category: string;
  description: string;
  slogan: string;
  price: number;
  stock: number;
  id: number;
}

export interface InventorySchema {
  isLoading: boolean;
  inventory?: Inventory[];
}
