import { Link } from "react-router-dom";
import { createContext, useState } from "react";
import Nav from '../features/layout/Nav'

export const queryContext = createContext(null);

const DashboardLayout = ({ children, title }) => {

  const [query, setQuery] = useState("");
  const [type, setType] = useState("ALL");
  console.log(type);
  return (
    <div className="flex flex-col min-h-screen">
      <Nav query ={query} setQuery={setQuery}/>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
      <main className="flex-grow">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div>
            <label htmlFor="sortDate" className="mr-4">Sort</label>
            <select id="sortDate" onChange={(e)=>setType(e.target.value)} name="type">
               <option value="ALL">All</option>
               <option value="UPCOMING" >Upcoming</option>
               <option value="LIVE">Live</option>
            </select>
          </div>
          <queryContext.Provider value={{ query, setQuery , type }}>
            {children}
          </queryContext.Provider>
        </div>
      </main>
      <footer class="bg-gray-800 text-white p-4">
        <div class="container mx-auto">
          <div class="flex flex-row md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
              <img
                src="assets/bookmyshow-logo.png"
                alt="BookMyShow"
                class="h-10 w-auto"
              />
            </div>
            <div class="text-sm">
              <p>&copy; 2023 BookMyShow. All rights reserved.</p>
              <p>Terms of Service | Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
