import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} FitLife. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#workouts" className="hover:text-white">Workouts</a>
          <a href="#trainers" className="hover:text-white">Trainers</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};
