import Image from 'next/image';
import { AuroraBackground } from '../components/ui/aurora-background';
 
export default function Home() {
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="fixed inset-y-0 left-[120px] w-[2px] bg-white/30 backdrop-blur-sm z-10 pointer-events-none"></div>
      <div className="fixed inset-y-0 right-[120px] w-[2px] bg-white/30 backdrop-blur-sm z-10 pointer-events-none"></div>
      <div className="fixed bottom-[120px] left-[30px] right-[30px] h-[2px] bg-white/30 backdrop-blur-sm z-10 pointer-events-none"></div>

      <div className="fixed top-10 left-0 right-0 z-50 px-4">
        <div className="w-[70%] bg-white backdrop-blur-sm shadow-2xl rounded-[30px] p-2 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="bg-black rounded-[20px] ml-3 h-12 w-12 flex items-center justify-center overflow-hidden">
              <Image
                src="/image.png"
                alt="Perspectra Logo"
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            <span className="text-black text-2xl ml-2 font-bold">Perspectra</span>
          </div>
          <button className="
              bg-[#212121] 
              text-white 
              px-8 py-4 
              rounded-[20px]
              relative
              hover:bg-black/80 
              transition-colors
              before:content-[''] 
              before:absolute 
              before:inset-1
              before:rounded-2xl
              before:border-2 
              before:border-white
              before:pointer-events-none
            ">
              Join Waitlist
            </button>
        </div>
      </div>

      <div className="fixed inset-0 z-0">
      <img
  src="/bg.gif"
  alt=""
  className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
/>
       
        <div className="absolute inset-0 bg-black/30"></div>
        
     
        <div 
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cfilter id='a'%3E%3CfeTurbulence baseFrequency='0.75' numOctaves='4' seed='15' stitchTiles='stitch' type='fractalNoise'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`,
            opacity: 1,
            animation: 'grain 8s steps(10) infinite',
          }}
        ></div>
      </div>

   
      <div className="relative z-20 min-h-screen mt-40 flex flex-col items-center justify-center pt-20">
        <main className="w-full px-4">
        
          <div className="text-center mb-8 w-full">
            <div className="flex justify-center w-full">
              <h1 className="text-4xl min-[400px]:text-5xl md:text-7xl font-md text-white mb-6 whitespace-nowrap">
                Unlock perspectives with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A51AE5] to-[#fff] animate-gradient">
                  Perspectra
                </span>
              </h1>
            </div>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Get diverse insights, explore different angles, and make smarter decisions with collective AI thinking.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <div className="flex-1 border-2 border-gray-600 bg-gradient-to-t from-gray-900/80 to-gray-500 p-2 rounded-2xl backdrop-blur-sm">
  <div className="flex flex-col sm:flex-row gap-3 w-full">
    <input 
      type="email"
      placeholder="Enter your email here" 
      className="placeholder-gray-500/80 flex-1 bg-white/90 text-gray-900 px-4 h-12 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white
                transition-all duration-200 text-base"
    />
    <button className="
      bg-[#212121]
      text-white 
      rounded-[18px]
      relative
      overflow-hidden
      hover:bg-black/90 
      transition-all duration-200
      before:content-[''] 
      before:absolute 
      before:inset-1
      before:rounded-[14px]
      before:border-2 
      before:border-white/50
      before:pointer-events-none
      before:transition-all before:duration-200
      hover:before:border-white/80
      flex items-center justify-center
      w-full sm:w-40
      h-12
      text-base
    ">
      <span className="relative z-10 font-medium tracking-wide">Join Waitlist</span>
    </button>
  </div>
</div>
            </div>

        </main>
    

<AuroraBackground/>
      </div>
    </div>
  );
}