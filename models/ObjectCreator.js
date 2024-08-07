import * as THREE from "three"
import SceneCreator from "./SceneCreator"

export default class ObjectCreator {
    constructor(fow, near, far) {
        // поле зрения сцены в градусах (field of view), соотношение сторон экрана (насколько все внутри будет сжиматься), near, far -> границы отображения объектов
        this.camera = new THREE.PerspectiveCamera(fow, SceneCreator.WIDTH / SceneCreator.HEIGHT, near, far)
    }

    draw() {}

    move() {}
}