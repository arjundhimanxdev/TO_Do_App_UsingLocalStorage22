import { Outlet } from "react-router-dom"

const HomeLayoutPage = () => {
  return (
    <>
    <header className="bg-gradient-to-br from-purple-600 via-blue-500 to-orange-400 text-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">📝 My To-Do App</h1>
      <nav>
      </nav>
    </header>

    <main>
        <Outlet/>
    </main>

    <footer className="bg-gray-100 text-gray-600 py-4 px-6 mb-10 border-t">
      <div className="flex justify-between items-center text-sm">
        <p>© 2025 Arjun's Productivity Hub</p>
        <div className="flex gap-3">
          <a href="#" className="hover:text-indigo-500">Privacy</a>
          <a href="#" className="hover:text-indigo-500">Terms</a>
          <a href="#" className="hover:text-indigo-500">Contact</a>
        </div>
      </div>
    </footer>

    </>
  )
}

export default HomeLayoutPage