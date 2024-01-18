import "./App.css";
import PhoneForm from "./components/PhoneForm.JSX";

function App() {
  return (
    <>
      <div className="border w-screen h-screen flex flex-col items-center p-3 gap-4">
        <h1 className="text-3xl">Login With Phone Number</h1>
        <PhoneForm />
      </div>
    </>
  );
}

export default App;
