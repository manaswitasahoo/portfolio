import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-red-600 text-white py-4 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} Manaswita Sahoo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
