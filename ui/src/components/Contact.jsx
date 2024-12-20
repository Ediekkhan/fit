import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">Contact Us</h2>
          <p className="mt-2 text-lg text-gray-600">Get in touch with us.</p>
        </div>

        
        <div className="mt-10 bg-white shadow-md rounded-lg overflow-hidden">
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3964.8111997030946!2d7.5271!3d6.4183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a782ba7732e5%3A0x5b0fc94342389d0!2sInfinity%20Fitness%20Centre%2C%20Enugu.!5e0!3m2!1sen!2sng!4v1714666036849!5m2!1sen!2sng"
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;
