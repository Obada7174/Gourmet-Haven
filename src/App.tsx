import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Reservations from '@/pages/Reservations';
import Contact from '@/pages/Contact';
import NotFound from './pages/NotFound';
// import AdminDashboard from '@/pages/admin/Dashboard';
// import AdminMenu from '@/pages/admin/Menu';
// import AdminReservations from '@/pages/admin/Reservations';
// import AdminOrders from '@/pages/admin/Orders';
// import AdminSettings from '@/pages/admin/Settings';

function App() {
  return (
    <Router basename='/gourmet-haven'>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />

            {/* <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/menu" element={<AdminMenu />} />
            <Route path="/admin/reservations" element={<AdminReservations />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/settings" element={<AdminSettings />} /> */}
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;