export default function Login() {
    return (
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 bg-blue-900 text-white">
          <img src="/login-image.png" alt="Login" className="w-40 mb-4" />
          <p className="text-lg">123 Street, City, Country</p>
          <p className="text-lg">Phone: +123456789</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-xl">🔵</a>
            <a href="#" className="text-xl">🟠</a>
            <a href="#" className="text-xl">🔴</a>
          </div>
        </div>
  
        {/* Right Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-sm">
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <form className="flex flex-col gap-4">
              <input type="email" placeholder="Email" className="border p-2" />
              <input type="password" placeholder="Password" className="border p-2" />
              <button className="bg-blue-900 text-white py-2">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  