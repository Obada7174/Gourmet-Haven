import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Gourmet Haven
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Experience culinary excellence in every bite
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link to="/menu">View Menu</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className='text-black'>
                <Link to="/reservations">Book a Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Grilled Salmon',
                image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
                description: 'Fresh Atlantic salmon with herbs and lemon'
              },
              {
                name: 'Sushi Platter',
                description: 'Assorted fresh sushi rolls with wasabi, ginger, and soy sauce',
                image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
              },
              // {
              //   title: 'Beef Tenderloin',
              //   image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
              //   description: 'Premium cut served with seasonal vegetables'
              // },
              {
                title: 'Chocolate Fondant',
                image: 'https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
                description: 'Warm chocolate cake with vanilla ice cream'
              }
            ].map((dish, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dish.title}</h3>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Gourmet Haven has been serving exceptional cuisine
                that combines traditional flavors with modern techniques. Our
                passionate team of chefs creates memorable dining experiences using
                only the finest ingredients.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in sustainable practices and work closely with local
                farmers to bring you the freshest seasonal ingredients.
              </p>
              <Button asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;