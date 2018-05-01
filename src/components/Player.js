import React, { Component } from 'react';
import * as THREE from 'three';
class Player extends Component {
  constructor(props) {
    super(props);
    this.geometry = new THREE.BoxGeometry(props.width, props.height, props.depth);
    this.material = new THREE.MeshNormalMaterial();
    this.state = {
      ...props,
    };
  }
  componentWillReceiveProps(props) {
    this.setState(props);
  }
  render() {
    return <mesh rotation={this.state.rotation} position={this.state.position} geometry={this.geometry} material={this.material} />;
  }
}
export default Player;
