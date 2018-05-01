import React, { Component } from 'react';
import * as THREE from 'three';
const unit = 20;
class SpaceInvader extends Component {
  constructor(props) {
    super(props);
    this.geometry = new THREE.BoxGeometry(unit, unit, unit);
    this.material = new THREE.MeshNormalMaterial();
    this.state = {
      ...props,
    };
  }
  componentWillReceiveProps(props) {
    this.setState(props);
  }
  render() {
    return [
      // Row 1
      <mesh
        position={{ x: this.state.position.x - 2 * unit, y: this.state.position.y }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 9 * unit, y: this.state.position.y }}
        geometry={this.geometry}
        material={this.material}
      />,
      // Row 2
      <mesh
        position={{ x: this.state.position.x - 3 * unit, y: this.state.position.y - unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 8 * unit, y: this.state.position.y - unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      // Row 3
      <mesh
        position={{ x: this.state.position.x - 2 * unit, y: this.state.position.y - 2 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 3 * unit, y: this.state.position.y - 2 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 4 * unit, y: this.state.position.y - 2 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 5 * unit, y: this.state.position.y - 2 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 6 * unit, y: this.state.position.y - 2 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 7 * unit, y: this.state.position.y - 2 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 8 * unit, y: this.state.position.y - 2 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 9 * unit, y: this.state.position.y - 2 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      // Row 4
      <mesh
        position={{ x: this.state.position.x - unit, y: this.state.position.y - 3 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 2 * unit, y: this.state.position.y - 3 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 4 * unit, y: this.state.position.y - 3 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 5 * unit, y: this.state.position.y - 3 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 6 * unit, y: this.state.position.y - 3 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 8 * unit, y: this.state.position.y - 3 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 9 * unit, y: this.state.position.y - 3 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 10 * unit, y: this.state.position.y - 3 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      // Row 5
      <mesh
        position={{ x: this.state.position.x, y: this.state.position.y - 4 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - unit, y: this.state.position.y - 4 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 2 * unit, y: this.state.position.y - 4 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 3 * unit, y: this.state.position.y - 4 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 4 * unit, y: this.state.position.y - 4 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 5 * unit, y: this.state.position.y - 4 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 6 * unit, y: this.state.position.y - 4 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 7 * unit, y: this.state.position.y - 4 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 8 * unit, y: this.state.position.y - 4 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 9 * unit, y: this.state.position.y - 4 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 10 * unit, y: this.state.position.y - 4 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 11 * unit, y: this.state.position.y - 4 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      // Row 6
      <mesh
        position={{ x: this.state.position.x, y: this.state.position.y - 5 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 2 * unit, y: this.state.position.y - 5 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 3 * unit, y: this.state.position.y - 5 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 4 * unit, y: this.state.position.y - 5 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 5 * unit, y: this.state.position.y - 5 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 6 * unit, y: this.state.position.y - 5 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 7 * unit, y: this.state.position.y - 5 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 8 * unit, y: this.state.position.y - 5 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 9 * unit, y: this.state.position.y - 5 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 11 * unit, y: this.state.position.y - 5 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      // Row 7
      <mesh
        position={{ x: this.state.position.x, y: this.state.position.y - 6 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 2 * unit, y: this.state.position.y - 6 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 9 * unit, y: this.state.position.y - 6 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 11 * unit, y: this.state.position.y - 6 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      // Row 8
      <mesh
        position={{ x: this.state.position.x - 3 * unit, y: this.state.position.y - 7 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 4 * unit, y: this.state.position.y - 7 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 7 * unit, y: this.state.position.y - 7 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
      <mesh
        position={{ x: this.state.position.x - 8 * unit, y: this.state.position.y - 7 * unit }}
        geometry={this.geometry}
        material={this.material}
      />,
    ];
  }
}
export default SpaceInvader;
