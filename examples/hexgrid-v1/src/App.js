import React, { Component } from 'react';
import { HexGrid, Layout, Path, Hexagon, Text, Pattern, Hex } from 'react-hexgrid';
import './App.css';

class App extends Component {
  render() {
    const hexagonSize = { x: 10, y: 10 };
    return (
      <div className="App">
        <h2>React Hexgrid v1</h2>
        <p>Constructing Hexgrid with component-based approach with custom SVG elements.</p>
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100">
          <Layout size={hexagonSize} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={0} r={0} s={0} />
            {/* Using pattern (defined below) to fill the hexagon */}
            <Hexagon q={0} r={-1} s={1} fill="pat-1" />
            <Hexagon q={0} r={1} s={-1} />
            <Hexagon q={1} r={-1} s={0}>
              <Text>1, -1, 0</Text>
            </Hexagon>
            <Hexagon q={1} r={0} s={-1}>
              <Text>1, 0, -1</Text>
            </Hexagon>
            {/* Pattern and text */}
            <Hexagon q={-1} r={1} s={0} fill="pat-2">
              <Text>-1, 1, 0</Text>
            </Hexagon>
            <Hexagon q={-1} r={0} s={1} />
            <Hexagon q={-2} r={0} s={1} />
            <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
          </Layout>
          {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
          <Pattern id="pat-1" link="http://lorempixel.com/400/400/cats/1/" size={hexagonSize} />
          <Pattern id="pat-2" link="http://lorempixel.com/400/400/cats/2/" size={hexagonSize} />
          <g>
            <circle cx="50" cy="10" r="10" />
          </g>
        </HexGrid>
      </div>
    );
  }
}

export default App;
