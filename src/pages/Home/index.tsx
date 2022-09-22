import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import gsap from 'gsap';
import vertexShader from '../../assets/shaders/vertex.glsl';
import fragmentShader from '../../assets/shaders/fragment.glsl';
import atmosphereVertexShader from '../../assets/shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from '../../assets/shaders/atmosphereFragment.glsl';
import './styles.css';

const Home = () => {
  const globe = () => {
    const canvasContainer = document.querySelector(
      '#canvasContainer',
    ) as HTMLElement | null
    if (!canvasContainer) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasContainer.offsetWidth / canvasContainer.offsetHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: document.querySelector('canvas'),
      alpha: true,
    })

    renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    canvasContainer.appendChild(renderer.domElement)

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(
              '../../assets/images/globe.jpg',
            ),
          },
        },
      }),
    )

    
    scene.add(sphere)

    // CREATE ATMOSPHERE
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      }),
    )
    
    atmosphere.scale.set(1.1, 1.1, 1.1)
    atmosphere.position.x = -1
    scene.add(atmosphere)

    const group = new THREE.Group()
    group.add(sphere)
    scene.add(group)

    const starGeometry = new THREE.BufferGeometry()
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
    })

    /*
    const starVertices = []
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = -Math.random() * 3000
      starVertices.push(x, y, z)
    }

    starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starVertices, 3),
    )

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)
    */

    camera.position.z = 10
    camera.position.y = 0
  

    sphere.rotation.y = -Math.PI / 2

    group.rotation.offset = {
      x: 0,
      y: 0,
    }

    const mouse = {
      x: undefined,
      y: undefined,
      down: false,
      xPrev: undefined,
      yPrev: undefined,
    }

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
      group.rotation.y += 0.002
    }

    renderer.render(scene, camera)

    animate()

    canvasContainer.addEventListener('mousedown', ({ clientX, clientY }) => {
      mouse.down = true
      mouse.xPrev = clientX
      mouse.yPrev = clientY
    })

    addEventListener('mousemove', (event) => {
      mouse.x = ((event.clientX - innerWidth / 2) / (innerWidth / 2)) * 2 - 1
      mouse.y = -(event.clientY / innerHeight) * 2 + 1

      if (mouse.down) {
        event.preventDefault()
        const deltaX = event.clientX - mouse.xPrev
        const deltaY = event.clientY - mouse.yPrev

        group.rotation.offset.x += deltaY * 0.02
        group.rotation.offset.y += deltaX * 0.02

        gsap.to(group.rotation, {
          y: group.rotation.offset.y,
          x: group.rotation.offset.x,
          duration: 2,
        })

        mouse.xPrev = event.clientX
        mouse.yPrev = event.clientY
      }
    })

    addEventListener('mouseup', () => {
      mouse.down = false
    })

    function onResize() {
      camera.aspect = canvasContainer.offsetWidth / canvasContainer.offsetHeight
      camera.updateProjectionMatrix()
      renderer.setSize(
        canvasContainer.offsetWidth,
        canvasContainer.offsetHeight,
      )
    }

    window.addEventListener('resize', onResize, false)
  }
  useEffect(() => globe(), [])

  return (
    <section className="section-container">
      <main>
        <div className="main-content-left">
          <div className="main-content-left-buttom-top">
            <img src="../../assets/images/gitbotao.png" alt="" />
            <div className="main-content-left-buttom-top-text">
              <h1>Github Universe: A global developer event</h1>
              <p id="parag">Register now to get early bird passes 20% off.</p>
            </div>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </a>
          </div>
          <div className="main-content-left-text">
            <h2>Let's build from here,</h2>
            <h2>together.</h2>
            <p>
              The complete developer platform to build, scale, and deliver
              secure software.
            </p>
          </div>
          <Link to="/gitsearch">
            <div className="main-content-left-button">
              <span>Iniciar</span>
            </div>
          </Link>
          <hr />
        </div>
        <div className="main-content-right">
          <div className="main-content-right-globe">
            <div id="canvasContainer">
              <canvas></canvas>
            </div>
          </div>
        </div>
      </main>
      <div className="main-content-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1680 40"
        >
          <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
        </svg>
        <div className="main-content-bottom-image">
          <div className="main-content-bottom-avatar">
            <img src="../../assets/images/avatar.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    /*
        <div className="home-container">
            <Link to="/cepsearch">
                <button className="btn btn-primary btn-lg start-button">Iniciar</button>
            </Link>
        </div>
        */
  )
}
export default Home
