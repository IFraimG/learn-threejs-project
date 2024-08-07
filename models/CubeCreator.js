import * as THREE from "three"
import ObjectCreator from "./ObjectCreator";
import SceneCreator from "./SceneCreator"

export default class CubeCreator extends ObjectCreator {
    constructor(fow, near, far) {
        super(fow, near, far)

        // двигаем в глубину, чтобы камера и куб не оказались внутри друг друга
        this.camera.position.z = 5
    }

    draw() {
        super.draw()

        // тут указываем точки
        const geometry = new THREE.BoxGeometry(1, 1, 1)

        // тут указываем цвет, прозрачность, ....
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

        // сетка для добавления объекта на сцену
        this.item = new THREE.Mesh(geometry, material)
    }

    move() {
        super.move()

        this.item.rotation.x += 0.01
        this.item.rotation.y += 0.01
    }
}