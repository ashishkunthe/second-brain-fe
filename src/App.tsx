import { FaShareAlt } from "react-icons/fa";
import { Button } from "./Components/Button";
import { CiShare2 } from "react-icons/ci";

function App() {
  return (
    <>
      <div className="flex mt-16 ml-8">
        <Button
          text="Share"
          variant="secondary"
          size="lg"
          onClick={() => {}}
          startIcon={<CiShare2 />}
        />
        <Button
          text="Click Here"
          variant="primary"
          size="lg"
          onClick={() => {}}
        />
      </div>
    </>
  );
}

export default App;
