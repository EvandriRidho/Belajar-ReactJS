import Button from "./components/Elements/Button";

export default function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button variant="bg-red-700">login</Button>
        <Button variant="bg-slate-700">logout</Button>
        <Button></Button>
      </div>
    </div>
  );
}
