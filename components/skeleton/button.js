export default function ButtonSkeleton() {
  return (
    <div className='animate-pulse flex justify-center items-center py-2 px-4 space-x-1 rounded-xl'>
      <div className='w-6 h-6 rounded-full bg-gray-300'></div>
      <div className='h-4 w-28 bg-gray-300'></div>
    </div>
  );
}
