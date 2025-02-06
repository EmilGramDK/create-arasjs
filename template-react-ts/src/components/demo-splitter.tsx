/**
 * Demo of the Aras Splitter Component
 */
export function DemoSplitter() {
  return (
    <div className='demo-view bg-indigo-300 mt-4 flex'>
      <div className='splitter-view h-full'></div>
      <aras-splitter />
      <div className='splitter-view h-full'></div>
    </div>
  );
}
