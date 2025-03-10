export default function Login() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold">Login</h1>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="border p-2" />
          <input type="password" placeholder="Password" className="border p-2" />
          <button className="bg-blue-900 text-white py-2">Login</button>
        </form>
      </div>
    );
  }
  