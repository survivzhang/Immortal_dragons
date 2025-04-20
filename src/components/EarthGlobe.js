"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const EarthGlobe = ({ coordinates }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      48,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
    mountRef.current.appendChild(renderer.domElement);

    // Earth setup
    const geometry = new THREE.SphereGeometry(8, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/earth.jpg");
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: textureLoader.load("/earth_bump.jpg"),
      bumpScale: 0.05,
      specularMap: textureLoader.load("/earth_specular.jpg"),
      specular: new THREE.Color("grey"),
    });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Perth marker
    const markerGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);

    // Convert lat/lon to 3D position
    const lat = -31.9514; // Perth's latitude
    const lon = -115.8617; // Perth's longitude
    const radius = 8.1; // 增加半径以匹配新的地球大小

    // Convert to radians
    const latRad = THREE.MathUtils.degToRad(lat);
    const lonRad = THREE.MathUtils.degToRad(lon);

    // Calculate position
    marker.position.x = radius * Math.cos(latRad) * Math.cos(lonRad);
    marker.position.y = radius * Math.sin(latRad);
    marker.position.z = radius * Math.cos(latRad) * Math.sin(lonRad);

    // Add marker to Earth instead of a separate group
    earth.add(marker);

    // Add text label
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 256;
    canvas.height = 128;
    context.fillStyle = "rgba(0, 0, 0, 0.8)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "bold 48px Arial";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Perth", canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const labelMaterial = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 1,
      depthTest: false, // 确保标签始终可见
    });
    const label = new THREE.Sprite(labelMaterial);
    label.position.copy(marker.position);
    label.position.y += 1.2; // 增加标签高度
    label.scale.set(1.5, 0.8, 1); // 增加标签大小
    earth.add(label);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 20; // 调整相机位置以适应更大的地球

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;

    // Hover rotation
    let isHovered = false;
    const handleMouseEnter = () => {
      isHovered = true;
    };
    const handleMouseLeave = () => {
      isHovered = false;
    };

    mountRef.current.addEventListener("mouseenter", handleMouseEnter);
    mountRef.current.addEventListener("mouseleave", handleMouseLeave);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.005; // 自动旋转速度
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      if (mountRef.current) {
        mountRef.current.removeEventListener("mouseenter", handleMouseEnter);
        mountRef.current.removeEventListener("mouseleave", handleMouseLeave);
        mountRef.current.removeChild(renderer.domElement);
      }

      scene.remove(earth);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [coordinates]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full flex items-center justify-center"
    />
  );
};

export default EarthGlobe;
