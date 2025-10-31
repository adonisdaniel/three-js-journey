import * as THREE from "three";

const scene = new THREE.Scene();

const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new THREE.CubeTextureLoader();
const envMap = loader.load([
  'images/mili.jpeg', 'images/textura.png',
  'images/textura.png', 'images/mili.jpeg',
  'images/mili.jpeg', 'images/textura.png'
])

const geometry = new THREE.BoxGeometry(2, 2, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xf6ce04,
//   wireframe: true,
  //   vertexColors: true,
  envMap,
  reflectivity: 1 
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

function animate() {
//   cube.rotation.x += 0.01;
//   cube.rotation.x = 0.9;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
