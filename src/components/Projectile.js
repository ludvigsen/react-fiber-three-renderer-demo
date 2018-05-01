import React, { Component } from 'react';
import * as THREE from 'three';
const unit = 20;
class Projectile extends Component {
  constructor(props) {
    super(props);
    this.geometry = new THREE.BoxGeometry(unit, unit, unit);
    this.material = new THREE.MeshNormalMaterial();
    this.state = {
      ...props,
    };
  }
  componentWillReceiveProps(props) {
    console.log('RECIEVE PROPS: ', props);
    this.setState(props);
  }
  render() {
    return <mesh position={this.state.position} geometry={this.geometry} material={this.material} />;
  }
}
export default Projectile;
