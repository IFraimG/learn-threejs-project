import * as THREE from "three"
import ObjectCreator from "./ObjectCreator";

export default class LinesCreator extends ObjectCreator {
    constructor(fow, near, far) {
        super(fow, near, far)

        this.camera.position.set(0, 0, 100);
        this.camera.lookAt(0, 0, 0);
    }

    draw() {
        super.draw()
        
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff })

        const points = [new THREE.Vector3(-10, 0, 0), new THREE.Vector3(0, 10, 0), new THREE.Vector3(10, 0, 0), new THREE.Vector3(-10, 0, 0)]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)

        this.item = new THREE.Line(geometry, material);
    }

    move() {
    }
}