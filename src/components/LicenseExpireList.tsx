import React from 'react';

const users = [
  { name: 'Robert Fox', daysLeft: 2, image: '/path/to/image1.jpg', color: 'bg-red-500' },
  { name: 'Jacob Jones', daysLeft: 3, image: '/path/to/image2.jpg', color: 'bg-red-500' },
  { name: 'Esther Howard', daysLeft: 7, image: '/path/to/image3.jpg', color: 'bg-red-500' },
  { name: 'Savannah Nguyen', daysLeft: 10, image: '/path/to/image4.jpg', color: 'bg-yellow-500' },
  { name: 'Courtney Henry', daysLeft: 16, image: '/path/to/image5.jpg', color: 'bg-yellow-500' },
  { name: 'Dianne Russell', daysLeft: 21, image: '/path/to/image6.jpg', color: 'bg-yellow-500' },
  { name: 'Eleanor Pena', daysLeft: 25, image: '/path/to/image7.jpg', color: 'bg-yellow-500' },
  { name: 'Darrell Steward', daysLeft: 30, image: '/path/to/image8.jpg', color: 'bg-yellow-500' },
];

const LicenseExpireList = () => {
  return (
    <div className="w-full lg:w-7/8 p-4 bg-white rounded-lg shadow-md mt-4 lg:mt-0">
      <h2 className="w-full text-lg font-semibold mb-4">License Expire List</h2>
      <ul className="space-y-4">
        {users.map((user, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src={user.image}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-500 text-sm">{user.daysLeft} Days Left</p>
              </div>
            </div>
            <span className={`w-5 h-3 rounded-full ${user.color}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LicenseExpireList;
