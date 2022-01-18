export default function TypeFormSkeleton() {
  return (
    <div className=' animate-pulse flex flex-row md:flex-col mx-auto min-h-screen'>
      <div className='flex-1 h-screenbg bg-gray-300'></div>
      <div className='flex-1'>
        <div className='flex flex-col min-h-screen justify-between items-center max-w-full'>
          <div className='flex-grow flex flex-col justify-center items-start w-full p-10 space-y-2'>
            <div className='h-8 bg-gray-300 rounded w-3/4'></div>
            <div className='h-4 bg-gray-300 rounded w-full'></div>
            <div className='h-4 bg-gray-300 rounded w-11/12'></div>
            <div className='h-4 bg-gray-300 rounded w-10/12'></div>
            <div className='h-4 bg-gray-300 rounded w-2/3'></div>
          </div>
          <div className='flex-shrink w-full bg-gray-400 bg-opacity-20 py-5 px-10'>
            <div className='h-14 bg-gray-300 rounded w-1/2 mx-auto'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
