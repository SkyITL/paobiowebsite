import React, { useState } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import WeChatQR from './components/WeChatQR';
import Footer from './components/Footer';
import { products } from './data/products';
import { useCart } from './hooks/useCart';

export default function PaoBioApp() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWeChatQROpen, setIsWeChatQROpen] = useState(false);

  const {
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    getCartTotal,
    getItemCount,
    isInCart,
    getCartItem
  } = useCart();

  const handleCheckout = () => {
    if (cart.items.length > 0) {
      setIsCartOpen(false);
      setIsWeChatQROpen(true);
    }
  };

  const handleWeChatClick = () => {
    setIsWeChatQROpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header
        itemCount={getItemCount()}
        onCartClick={() => setIsCartOpen(true)}
        onWeChatClick={handleWeChatClick}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pao-green-600 to-pao-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Pao Bio Club Shop
          </h1>
          <p className="text-xl mb-8">
            Explore our collection of club merchandise and educational materials
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg inline-block p-4">
            <p className="text-lg font-medium mb-2">📱 Order easily via WeChat!</p>
            <button
              onClick={handleWeChatClick}
              className="bg-white text-pao-green-600 hover:text-pao-green-700 font-medium px-6 py-2 rounded-lg transition-colors"
            >
              Scan QR Code to Order
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Products Section */}
        <section id="shop" className="py-8">
          <ProductGrid
            products={products}
            onAddToCart={addToCart}
            isInCart={isInCart}
            getCartItem={getCartItem}
          />
        </section>

        {/* About Section */}
        <section id="about" className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">About Pao Bio Club</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  The Pao Bio Club is a vibrant community of students and professionals passionate about biological sciences.
                  We organize regular workshops, lectures, and hands-on laboratory sessions to explore the fascinating world of biology.
                </p>
                <p className="text-gray-600 mb-4">
                  Our mission is to foster scientific curiosity, promote research skills, and build a supportive network
                  for anyone interested in life sciences.
                </p>
                <div className="bg-pao-green-50 rounded-lg p-4 mt-6">
                  <h3 className="font-semibold text-pao-green-800 mb-2">Join Us!</h3>
                  <p className="text-sm text-pao-green-700">
                    Meetings every Thursday at 5:00 PM in Science Building, Room 302
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pao-green-100 to-pao-blue-100 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧬</div>
                  <h3 className="text-xl font-semibold mb-2">Exploring Life Sciences Together</h3>
                  <p className="text-gray-600">
                    From molecular biology to ecology, we cover it all!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Order Section */}
        <section id="contact" className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">How to Order</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-pao-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">Browse Products</h4>
                      <p className="text-gray-600">Explore our collection and add items to your cart</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-pao-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">Review Cart</h4>
                      <p className="text-gray-600">Check your selected items and quantities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-pao-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">Contact via WeChat</h4>
                      <p className="text-gray-600">Scan our QR code and send your order details</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-pao-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">Complete Payment</h4>
                      <p className="text-gray-600">Pay via WeChat Pay, Alipay, or cash at meetings</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-pao-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                      5
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">Receive Your Order</h4>
                      <p className="text-gray-600">Pick up at meetings or arrange delivery</p>
                    </div>
                  </li>
                </ol>
                <div className="mt-6 text-center">
                  <button
                    onClick={handleWeChatClick}
                    className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-lg inline-flex items-center space-x-2 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                    </svg>
                    <span>Contact Us on WeChat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onWeChatClick={handleWeChatClick} />

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onIncrement={incrementQuantity}
        onDecrement={decrementQuantity}
        onRemove={removeFromCart}
        onClear={clearCart}
        getCartTotal={getCartTotal}
        onCheckout={handleCheckout}
      />

      {/* WeChat QR Modal */}
      <WeChatQR
        isOpen={isWeChatQROpen}
        onClose={() => setIsWeChatQROpen(false)}
        cart={cart}
        getCartTotal={getCartTotal}
      />
    </div>
  );
}