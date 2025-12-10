const Sidebar = ({ open, onClose, user }) => {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 w-96 h-full bg-white shadow-xl p-6 z-50 transform transition-transform duration-300 
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-semibold">Edit User</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* User Details */}
        {user ? (
          <div className="space-y-4">
            <p>
              <strong>Name:</strong> {user.firstName}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>

            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Save Changes
            </button>
          </div>
        ) : (
          <p className="text-gray-500">Select a user to edit</p>
        )}
      </div>
    </>
  );
};

export default Sidebar;
