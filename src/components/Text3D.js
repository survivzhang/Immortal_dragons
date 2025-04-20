"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import helvetikerFont from "three/examples/fonts/helvetiker_regular.typeface.json";

const Text3D = ({ text = "Default Text", className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 32; // 调整相机距离，确保文字可见

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const fontLoader = new FontLoader();
    const font = fontLoader.parse(helvetikerFont);

    const textGeometry = new TextGeometry(text, {
      font: font,
      size: 5, // 文字大小
      height: 0.5, // 文字厚度
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelSegments: 5,
    });

    textGeometry.center();

    const material = new THREE.MeshPhongMaterial({
      color: 0x2196f3,
      shininess: 100,
      specular: 0x444444,
    });

    const mesh = new THREE.Mesh(textGeometry, material);
    scene.add(mesh);
    mesh.position.y = 5;
    // 添加光源
    const frontLight = new THREE.DirectionalLight(0xffffff, 1);
    frontLight.position.set(0, 0, 1);
    scene.add(frontLight);

    const backLight = new THREE.DirectionalLight(0x2196f3, 0.5);
    backLight.position.set(0, 0, -1);
    scene.add(backLight);

    const topLight = new THREE.DirectionalLight(0xffffff, 0.5);
    topLight.position.set(0, 1, 0);
    scene.add(topLight);

    scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    // 平滑动画
    let time = 0;
    const animate = () => {
      time += 0.01;
      mesh.position.y = Math.sin(time) * 0.1;
      mesh.rotation.y = Math.sin(time * 0.5) * 0.1;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // 响应窗口调整
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "50px",
        position: "relative",
      }}
    />
  );
};

export default Text3D;
