import { SidePlane, MainCol } from '@/components'

const CV: React.FC = () => (
  <div className="flex h-screen w-full">
    {/* Left Side plane (3/8 of the screen) */}
    <aside className="w-[33%] bg-zinc-800 p-6 h-screen overflow-y-auto">
      <SidePlane/>
    </aside>

    {/* Main Content Area (5/8 of the screen) */}
    <main className="w-[67%] bg-gray-100 p-6">
      <MainCol/>
    </main>
  </div>
)

export default CV



