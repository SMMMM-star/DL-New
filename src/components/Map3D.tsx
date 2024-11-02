import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface Map3DProps {
  selectedState: string;
  selectedZone: string;
}

export default function Map3D({ selectedState, selectedZone }: Map3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color(0x0a192f);

    // Initialize camera
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current.position.z = 5;

    // Initialize renderer
    rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Add controls
    controlsRef.current = new OrbitControls(
      cameraRef.current,
      rendererRef.current.domElement
    );
    controlsRef.current.enableDamping = true;

    // Create India map geometry (simplified for demo)
    const geometry = new THREE.BoxGeometry(3, 4, 0.2);
    const material = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.8,
    });
    const map = new THREE.Mesh(geometry, material);
    sceneRef.current.add(map);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    sceneRef.current.add(pointLight);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (controlsRef.current) controlsRef.current.update();
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // Cleanup
    return () => {
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  // Update map highlighting based on selection
  useEffect(() => {
    if (!sceneRef.current) return;

    const map = sceneRef.current.children.find(
      (child) => child instanceof THREE.Mesh
    ) as THREE.Mesh;
    if (!map) return;

    if (selectedState && selectedZone) {
      (map.material as THREE.MeshPhongMaterial).color.setHex(0x10b981);
      (map.material as THREE.MeshPhongMaterial).opacity = 1;
    } else {
      (map.material as THREE.MeshPhongMaterial).color.setHex(0x3b82f6);
      (map.material as THREE.MeshPhongMaterial).opacity = 0.8;
    }
  }, [selectedState, selectedZone]);

  return <div ref={containerRef} className="h-[400px] w-full" />;
}