import { DemoGrid } from "./demo-grid";
import { DemoSplitter } from "./demo-splitter";

export function DemoPage() {
  // Demo Function to update the Tab Title and Icon
  const updateTab = () => {
    arasProvider.setTabTitle("New Title", "../images/Part.svg");
  };

  // Demo Function to toggle the Spinner
  const toggleSpinner = async () => {
    arasProvider.toggleSpinner(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    arasProvider.toggleSpinner(false);
  };

  // Demo Function to show a Toast Message
  const showDemoToast = () => {
    arasProvider.showToast("This is a demo toast message", {
      timeout: 5000,
      type: "success",
      position: "top-left",
    });
  };

  return (
    <>
      <div className='mb-10 flex items-center gap-2'>
        <button className='btn bg-indigo-400' onClick={updateTab}>
          Update Tab Title
        </button>
        <button className='btn bg-green-400' onClick={showDemoToast}>
          Show Demo Toast
        </button>
        <button className='btn bg-red-400 ' onClick={toggleSpinner}>
          Toggle Spinner
        </button>
      </div>
      <DemoGrid />
      <DemoSplitter />
    </>
  );
}
