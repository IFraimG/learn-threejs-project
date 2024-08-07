import * as THREE from "three"
import WebGL from "three/addons/capabilities/WebGL.js";
import CubeCreator from "./models/CubeCreator";
import LinesCreator from "./models/LinesCreator";
import SceneCreator from "./models/SceneCreator";

const sceneCreator = new SceneCreator()
const objectCreator = new CubeCreator(75, 0.1, 1000)
const linesCreator = new LinesCreator(45, 1, 500)
const renderer = new THREE.WebGLRenderer()

// размеры для анимации
renderer.setSize(SceneCreator.WIDTH, SceneCreator.HEIGHT)

// добавление canvas буквально
document.body.appendChild(renderer.domElement)

linesCreator.draw()
sceneCreator.addItem(linesCreator.item)

// отрисовываем с fps 60 - в отличии от setInterval приостанавливается при переходе на другую страницу браузера 
const animate = () => {
  requestAnimationFrame(animate)

  // objectCreator.move()

	renderer.render(sceneCreator.scene, linesCreator.camera)

}

if (WebGL.isWebGL2Available()) animate()
else {
  const warning = WebGL.getWebGL2ErrorMessage()
	document.getElementById('not_available').appendChild(warning)
}