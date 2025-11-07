import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import * as dat from './node_modules/dat.gui/build/dat.gui.module.js';

// This file is no longer needed as we've moved the Three.js code directly into index.html
console.log("Using inline Three.js implementation in index.html");

// Simplified version without external module imports
window.addEventListener('load', init);

function init() {
  try {
    // Check if THREE is available
    if (typeof THREE === 'undefined') {
      // Load Three.js dynamically
      const script = document.createElement('script');
      script.src = './node_modules/three/build/three.min.js';
      script.onload = function() {
        initializeApp();
      };
      script.onerror = function() {
        document.getElementById('loading').innerHTML = '<h2>Error loading Three.js</h2><p>Please check your internet connection and try again.</p>';
      };
      document.head.appendChild(script);
    } else {
      initializeApp();
    }
  } catch (error) {
    console.error('Error initializing application:', error);
    document.getElementById('loading').innerHTML = '<h2>Error initializing application</h2><p>Please check the console for details.</p>';
  }
}

function initializeApp() {
  try {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    // Add background
    scene.background = new THREE.Color(0x000000);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create a simple sun
    const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create a simple planet
    const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
    const planetMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.position.x = 15;
    scene.add(planet);

    // Set camera position
    camera.position.z = 30;

    // Add stars in the background
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7
    });

    const starVertices = [];
    for (let i = 0; i < 5000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Handle window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Hide loading screen
    setTimeout(() => {
      document.getElementById('loading').style.display = 'none';
    }, 1000);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      
      // Rotate sun
      sun.rotation.y += 0.005;
      
      // Rotate planet around sun
      planet.position.x = Math.cos(Date.now() * 0.001) * 15;
      planet.position.z = Math.sin(Date.now() * 0.001) * 15;
      
      // Rotate planet on its axis
      planet.rotation.y += 0.01;
      
      renderer.render(scene, camera);
    }

    animate();
  } catch (error) {
    console.error('Error in initializeApp:', error);
    document.getElementById('loading').innerHTML = '<h2>Error in application</h2><p>Please check the console for details.</p>';
  }
}
