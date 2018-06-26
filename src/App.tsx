import * as React from "react";
import { VictoryChart, VictoryZoomContainer } from "victory";

class App extends React.Component {
  public render() {
    return (
      <div>
        <VictoryChart containerComponent={<VictoryZoomContainer />} />
      </div>
    );
  }
}

export default App;
