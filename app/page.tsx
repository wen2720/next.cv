import { SideCol, MainCol } from './comp'
export default function f_cv() {
  return (
    <div className="flex h-screen w-full">
      {/* Left Sidebar (3/8 of the screen) */}
      {/* <aside className="w-[37.5%] bg-gray-200 p-6"> */}
      <aside className="w-[33%] bg-gray-200 p-6">
        <SideCol></SideCol>
      </aside>

      {/* Main Content Area (5/8 of the screen) */}
      {/* <main className="w-[62.5%] bg-gray-100 p-6"> */}
      <main className="w-[67%] bg-gray-100 p-6">
        <MainCol></MainCol>
      </main>
    </div>
    
  );
}
