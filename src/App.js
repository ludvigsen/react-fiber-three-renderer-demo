import React, { Component } from 'react';
import ReactThree from 'react-fiber-three-renderer';
import * as THREE from 'three';
import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import SpaceInvader from './components/SpaceInvader';
import Projectile from './components/Projectile';

const PLAYER_WIDTH = 100;
const PLAYER_HEIGHT = 100;
const PLAYER_SPEED = 1000;
const FPS = 30;

class App extends Component {
  constructor(props) {
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    const centerX = WIDTH / 2 + PLAYER_WIDTH / 2;
    const centerY = HEIGHT / 2 + PLAYER_HEIGHT / 2;
    super(props);
    this.state = {
      cubePosition: { x: centerX, y: 100, z: 0 },
      cubeRotation: { x: 0, y: 0, z: 0 },
      cameraPosition: { x: centerX, y: centerY, z: 1000 },
      cameraTarget: {
        position: { x: 0, y: 0, z: 0 },
      },
      projectiles: [],
    };
    let now,
      dt,
      fpsInterval = 1000 / FPS,
      last = this.timestamp();
    const frame = () => {
      requestAnimationFrame(frame);
      now = this.timestamp();
      dt = now - last;
      if (dt > fpsInterval) {
        this.update(dt / 1000);
        last = now - dt % fpsInterval;
      }
    };
    frame();
    this.onkeydown = this.onkeydown.bind(this);
    this.onkeyup = this.onkeyup.bind(this);
    document.onkeydown = this.onkeydown;
    document.onkeyup = this.onkeyup;
    this._renderer = new THREE.WebGLRenderer({ antialias: true });
    this._renderer.setClearColor('#FFFFFF');
    this._renderer.setSize(WIDTH, HEIGHT);
  }
  update(dt) {
    this.setState({
      projectiles: this.state.projectiles
        .map(p => ({
          ...p,
          y: (p.y += PLAYER_SPEED * dt),
        }))
        .filter(p => p.y < 2000),
      cubePosition: {
        ...this.state.cubePosition,
        x: Math.max(
          Math.min(
            this.state.cubePosition.x +
              (this.state.keydown === 'ArrowLeft' ? -(PLAYER_SPEED * dt) : this.state.keydown === 'ArrowRight' ? PLAYER_SPEED * dt : 0),
            window.innerWidth - PLAYER_WIDTH,
          ),
          0,
        ),
      },
    });
  }
  timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
  }
  onkeydown(evt) {
    evt = evt || window.event;
    if (this.state.keydown !== evt.key) {
      this.setState({
        keydown: evt.key,
      });
    }
  }
  onkeyup(evt) {
    if (evt.code === 'Space') {
      this.setState({
        projectiles: [...this.state.projectiles, { x: this.state.cubePosition.x + 10, y: this.state.cubePosition.y }],
      });
    }
    this.setState({
      keydown: undefined,
    });
  }
  render() {
    return (
      <div className="App">
        <ReactThree renderer={this._renderer} fps={FPS}>
          <scene>
            <SpaceInvader position={{ x: window.innerWidth / 2, y: window.innerHeight }} />
            <Player width={PLAYER_WIDTH} height={PLAYER_HEIGHT} rotation={this.state.cubeRotation} position={this.state.cubePosition} />
            {this.state.projectiles.map((p, i) => <Projectile key={i} position={p} />)}
          </scene>
          <perspectiveCamera
            target={this.state.cameraTarget}
            position={this.state.cameraPosition}
            fov={45}
            aspect={4 / 3}
            near={0.1}
            far={1000}
          />
        </ReactThree>
      </div>
    );
  }
}

export default App;
