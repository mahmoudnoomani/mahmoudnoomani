export const trafficSources = [
  { source: 'Search', value: 44 },
  { source: 'Social', value: 27 },
  { source: 'Email', value: 18 },
  { source: 'Direct', value: 11 },
];

export const bestSellers = [
  { name: 'Air Zoom Runner', orders: 198, revenue: '$24,900' },
  { name: 'ActiveFit Hoodie', orders: 162, revenue: '$18,630' },
  { name: 'SmartBand V4', orders: 148, revenue: '$16,910' },
  { name: 'Urban Lite Backpack', orders: 136, revenue: '$14,450' },
];

export const brandRows = [
  { name: 'Nike', products: 148, sales: '12,940', revenue: '$241,500' },
  { name: 'Apple', products: 96, sales: '9,720', revenue: '$318,900' },
  { name: 'Samsung', products: 121, sales: '8,810', revenue: '$227,420' },
  { name: 'Sony', products: 85, sales: '7,190', revenue: '$188,750' },
  { name: 'LG', products: 73, sales: '5,930', revenue: '$142,380' },
];

export const barValues = [54, 71, 63, 84, 67, 78, 92];
export const lineValues = [30, 42, 36, 58, 52, 64, 70, 66, 82, 78, 88, 96];

export function getLinePath(values: number[]) {
  const width = 100;
  const height = 100;
  const max = Math.max(...values);
  const min = Math.min(...values);

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / (max - min || 1)) * 70 - 12;
      return `${x},${y}`;
    })
    .join(' ');
}
