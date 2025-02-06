/**
 * Demo of the Grid Service to create a simple grid
 * with arasjs
 */
export function DemoGrid() {
  const showGrid = () => {
    // Get the Grid Service from the Aras Provider
    const gridService = arasProvider.gridService;

    // Create a new Grid Control
    const gridControl = gridService.createGrid("gridContainer", {});

    // Set the columns for the Grid
    gridControl.setColumns([
      {
        field: "id",
        label: "ID",
        width: 75,
      },
      {
        field: "name",
        label: "Name",
        width: 250,
      },
    ]);
  };

  return (
    <div className='demo-view bg-blue-300' id='gridContainer'>
      <button className='btn bg-white !text-black !m-8' onClick={showGrid}>
        Show Grid
      </button>
    </div>
  );
}
