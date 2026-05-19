import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Main Container */}
      <div className="w-full max-w-6xl h-[700px] bg-card rounded-3xl overflow-hidden shadow-2xl border border-border">
        <div className="grid lg:grid-cols-2 h-full">
          {/* LEFT SIDE */}
          <div className="flex items-center justify-center p-10">
            <div className="w-full max-w-md">
              <Outlet />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:block h-full">
            <img
              src="https://i.ibb.co.com/QQkDv6s/time-Management.jpg"
              alt="Learning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
