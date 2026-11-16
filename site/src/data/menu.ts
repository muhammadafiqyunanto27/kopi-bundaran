export type MenuItem = {
  name: string;
  price: number;
  note?: string;
  from?: boolean;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    title: "Coffee",
    items: [
      { name: "Classic Americano", price: 8000 },
      { name: "Kopi Keluk", price: 11000 },
      { name: "Kopi Gula Aren", price: 12000 },
    ],
  },
  {
    title: "Latte",
    items: [
      { name: "Coffee Latte", price: 10000 },
      { name: "Vanilla Latte", price: 12000 },
      { name: "Caramel Latte", price: 13000 },
      { name: "Butterscotch", price: 15000 },
    ],
  },
  {
    title: "V60 Series (Ice / Hot)",
    items: [
      { name: "V60 Series", price: 20000, from: true, note: "Untuk pilihan beans, tanya barista." },
    ],
  },
  {
    title: "Kopi Tubruk",
    items: [
      { name: "Robusta", price: 10000 },
      { name: "Arabica", price: 10000 },
    ],
  },
  {
    title: "Non Coffee",
    items: [
      { name: "Susu Coklat", price: 11000 },
      { name: "Red Velvet", price: 13000 },
      { name: "Taro", price: 13000 },
      { name: "Matcha Latte", price: 13000 },
      { name: "Bubblegum Milk", price: 14000 },
      { name: "Cookies And Cream", price: 14000 },
      { name: "Milo Dino", price: 14000 },
      { name: "Teh", price: 4000 },
      { name: "Wedang Jahe", price: 8000 },
      { name: "Wedang Jahe Susu", price: 10000 },
    ],
  },
  {
    title: "Snack",
    items: [
      { name: "French Fries", price: 10000 },
      { name: "Telo Goreng", price: 10000 },
      { name: "Tahu Goreng", price: 7000 },
      { name: "Omelette Mie", price: 7000 },
      { name: "Roti Panggang Keju", price: 8000 },
      { name: "Roti Panggang Coklat", price: 8000 },
      { name: "Roti Panggang Coklat Keju", price: 10000 },
      { name: "Cireng", price: 8000 },
      { name: "Putih Gurih", price: 7000 },
      { name: "Indomie Biasa", price: 6000 },
      { name: "Indomie Tambahan", price: 10000 },
    ],
  },
];

export function formatPrice(price: number) {
  return "Rp " + price.toLocaleString("id-ID");
}