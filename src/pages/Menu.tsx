import  { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const categories = [
  'All',
  'Appetizers',
  'Main Courses',
  'Seafood',
  'Vegetarian',
  'Desserts',
  'Beverages'
];
const menuItems = [
  {
    id: '1',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with herbs and lemon butter sauce',
    price: 28.99,
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: '2',
    name: 'Beef Tenderloin',
    description: 'Premium cut served with seasonal vegetables and red wine sauce',
    price: 34.99,
    category: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: '3',
    name: 'Chicken Caesar Salad',
    description: 'Grilled chicken breast over romaine lettuce with parmesan and Caesar dressing',
    price: 14.25,
    category: 'Appetizers', // تم تعديل التصنيف ليطابق قائمة التصنيفات
    image: 'https://images.unsplash.com/photo-1572441710534-2e0e5f3b4f8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: '4',
    name: 'Lamb Chops',
    description: 'Tender lamb chops grilled to perfection with rosemary and garlic',
    price: 32.00,
    category: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1613145991294-76423254b979?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: '5',
    name: 'Sushi Platter',
    description: 'Assorted fresh sushi rolls with wasabi, ginger, and soy sauce',
    price: 26.75,
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: '6',
    name: 'Shrimp Tacos',
    description: 'Soft tacos filled with grilled shrimp, cabbage slaw, and spicy aioli',
    price: 17.99,
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1622737132535-78f4ecb1a7ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: '7',
    name: 'Vegan Buddha Bowl',
    description: 'Colorful bowl of quinoa, chickpeas, avocado, and roasted vegetables',
    price: 16.25,
    category: 'Vegetarian', // تم التعديل من Vegan إلى Vegetarian
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: '8',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with gooey center served with vanilla ice cream',
    price: 8.75,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1600374928423-1c329f2ca5b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: '9',
    name: 'Fruit Smoothie',
    description: 'Blend of fresh berries, banana, and yogurt',
    price: 6.50,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1580910051070-cbd66cfdba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true
  },
  {
    id: '10',
    name: 'Bruschetta',
    description: 'Grilled bread with garlic, tomatoes, olive oil, and basil',
    price: 7.50,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1598137260012-0b4e9079864e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    available: true
  }
];


const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Our Menu</h1>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search menu..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button className="w-full">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;