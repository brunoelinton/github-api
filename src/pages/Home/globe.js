import './styles.css';

import * as THREE from 'three';
import vertexShader from '../../assets/shaders/vertex.glsl';

const canvasContainer = document.querySelector("#canvasContainer");
console.log(canvasContainer);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvasContainer.offsetWidth / canvasContainer.offsetHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector('canvas')
});

console.log(camera);

renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.canvas.appendChild(renderer.domElement);

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.MeshBasicMaterial({
        // color: 0xff0000
        map: new THREE.TextureLoader().load('../../assets/images/globe.jpg')
    })
);

scene.add(sphere);

camera.position.z = 10;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();