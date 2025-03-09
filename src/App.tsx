import { Button } from "./Components/Button";
import { CiShare2 } from "react-icons/ci";
import { Card } from "./Components/Card";

function App() {
  return (
    <>
      {/* Button Section */}
      <div className="flex mt-16 ml-8 gap-4">
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

      {/* Cards Section */}
      <div className="flex  items-center gap-4 mt-8">
        <Card
          title="Twitter Post"
          type="twitter"
          link="https://twitter.com/ashish88390/status/1894837242989883700"
        />
        <Card
          title="Jaun Elia Poetry"
          type="youtube"
          link="https://youtu.be/vmA1DIKB9ZQ?si=T5F0cD3h6F7KlK5z"
        />
      </div>
    </>
  );
}

export default App;
