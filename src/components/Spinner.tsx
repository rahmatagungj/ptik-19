import "./Spinner.css";

function Spinner() {
  return (
    <div className="flex items-center justify-center m-auto">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4" />
    </div>
  );
}

export default Spinner;
