export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  created_at: string;
}

export interface Reservation {
  id: string;
  customer_name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
}

export interface Order {
  id: string;
  customer_name: string;
  email: string;
  phone: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
  type: 'delivery' | 'pickup';
  address?: string;
  created_at: string;
}

export interface OrderItem {
  id: string;
  menu_item_id: string;
  quantity: number;
  price: number;
  name: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'customer';
  created_at: string;
}