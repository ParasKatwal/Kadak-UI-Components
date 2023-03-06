/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

import { Button } from "components/atoms";

function App() {
  return (
    <div tw="flex justify-center items-center h-screen w-screen flex-col gap-5">
      <h1>COMPONENTS</h1>
      <Button variant="primary">Button</Button>
    </div>
  );
}

export default App;
