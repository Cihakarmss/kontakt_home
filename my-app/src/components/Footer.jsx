import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
            <p className="text-sm">© 2023 My Website. All rights reserved.</p>
            <ul className="flex justify-center space-x-4 mt-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
            </div>
        </footer>
      
    </div>
  )
}

export default Footer
