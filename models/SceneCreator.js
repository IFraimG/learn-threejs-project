import * as THREE from "three"


export default class SceneCreator {
    static WIDTH = window.innerWidth
    static HEIGHT = window.innerHeight
    
    constructor() {
        this.scene = new THREE.Scene()
    }

    addItem(item) {
        this.scene.add(item)
    }
}