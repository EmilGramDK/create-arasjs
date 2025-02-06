import { DemoPage } from "@components/demo-page";

export function App() {
  // Update Aras Tab Title
  arasProvider.setTabTitle("My Application");

  return (
    <div className='flex h-full w-full flex-col items-center justify-center p-4'>
      <DemoPage />
    </div>
  );
}
