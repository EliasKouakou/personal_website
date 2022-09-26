import React from 'react'
import * as THREE from "three"

if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,0.1,1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );



} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}

const ThreeD = () => {
  return (
    <div>ThreeD</div>
  )
}

export default ThreeD