import React from 'react';
import { clubInfo } from '../data/clubInfo';

const WeChatQR = ({ isOpen, onClose, cart, getCartTotal }) => {
  const total = getCartTotal();

  // Generate order summary text for copying
  const getOrderSummary = () => {
    let summary = "🛒 Order from Pao Bio Club Website\n";
    summary += "=====================================\n\n";

    cart.items.forEach(item => {
      summary += `📦 ${item.name}\n`;
      summary += `   Quantity: ${item.quantity} × $${item.price} = $${(item.quantity * item.price).toFixed(2)}\n\n`;
    });

    summary += "=====================================\n";
    summary += `💰 Total: $${total.toFixed(2)}\n`;
    summary += "\nPlease send this order via WeChat!";

    return summary;
  };

  const copyOrderToClipboard = () => {
    navigator.clipboard.writeText(getOrderSummary()).then(() => {
      alert('Order details copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4">Complete Your Order</h2>

        {/* QR Code Section */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex flex-col items-center">
            {/* Placeholder for QR Code */}
            <div className="w-48 h-48 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center mb-3">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-green-500 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                </svg>
                <p className="text-xs text-gray-500">WeChat QR Code</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 text-center">
              Scan with WeChat to contact us
            </p>
            <p className="text-xs text-gray-500 mt-1">
              WeChat ID: <span className="font-mono">{clubInfo.contact.wechatId}</span>
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="space-y-3 mb-4">
          <h3 className="font-semibold text-gray-800">How to complete your order:</h3>
          <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
            <li>Scan the QR code above with WeChat</li>
            <li>Send us your order details</li>
            <li>We'll confirm availability and total</li>
            <li>Complete payment via WeChat Pay</li>
            <li>Pick up at next meeting or arrange delivery</li>
          </ol>
        </div>

        {/* Order Summary */}
        <div className="bg-blue-50 rounded-lg p-3 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Order Total:</span>
            <span className="text-xl font-bold text-pao-green-600">${total.toFixed(2)}</span>
          </div>
          <p className="text-xs text-gray-600">
            {cart.items.length} item{cart.items.length !== 1 ? 's' : ''} in cart
          </p>
        </div>

        {/* Copy Order Button */}
        <button
          onClick={copyOrderToClipboard}
          className="w-full bg-pao-blue-600 hover:bg-pao-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          <span>Copy Order Details</span>
        </button>
      </div>
    </div>
  );
};

export default WeChatQR;