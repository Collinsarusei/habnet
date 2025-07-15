import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

// Use all service-related and safari/travel images
const images = [
  '/images/constructin_materials.jpg',
  '/images/food.jpg',
  '/images/construction.jpg',
  '/images/road construction.jpg',
  '/images/borehole drilling.jpg',
  '/images/safari1.jpg',
  '/images/safari2.jpeg',
  '/images/safari3.jpeg',
  '/images/travel1.jpg',
  '/images/travel2.jpeg',
];

const BURST_DURATION = 1200; // ms
const REASSEMBLE_DURATION = 1200; // ms
const ROTATE_SPEED = 0.01; // radians per frame
const IMAGE_DISPLAY_TIME = 3500; // ms per image

export default function Globe3D({ width = 520 }: { width?: number }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [showText, setShowText] = useState(false);
  const [bursting, setBursting] = useState(false);
  const [reassembling, setReassembling] = useState(false);
  const [showTextAnim, setShowTextAnim] = useState(false); // for animated text
  const [imageIndex, setImageIndex] = useState(0);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const animationRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let frameId: number;
    const textureLoader = new THREE.TextureLoader();
    const widthPx = width;
    const height = widthPx;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, widthPx / height, 0.1, 1000);
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(widthPx, height);
    renderer.setClearColor(0x000000, 0); // transparent

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Globe geometry
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    // Load main image texture
    const baseTexture = textureLoader.load(images[imageIndex]);
    const material = new THREE.MeshStandardMaterial({
      map: baseTexture,
      roughness: 0.5,
      metalness: 0.2,
      transparent: false,
      opacity: 1,
    });
    const globe = new THREE.Mesh(geometry, material);
    globeRef.current = globe;
    scene.add(globe);

    // Mount renderer
    const mountNode = mountRef.current;
    if (mountNode) {
      mountNode.innerHTML = '';
      mountNode.appendChild(renderer.domElement);
    }

    // Animation loop
    const animate = () => {
      if (globe) {
        globe.rotation.y += ROTATE_SPEED;
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
      animationRef.current = frameId;
    };
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mountNode) mountNode.innerHTML = '';
    };
    // eslint-disable-next-line
  }, [imageIndex, bursting, reassembling]);

  // Handle image cycling, burst, and reassemble effect
  useEffect(() => {
    if (bursting) {
      // After burst, show text, then reassemble
      timeoutRef.current = setTimeout(() => {
        setShowText(true);
        setShowTextAnim(true);
        setBursting(false);
        setTimeout(() => {
          setShowTextAnim(false);
          setReassembling(true);
          setTimeout(() => {
            setReassembling(false);
            setShowText(false); // Hide company name only after reassemble completes
            setImageIndex(0);
          }, REASSEMBLE_DURATION);
        }, 1800);
      }, BURST_DURATION);
    } else if (!showText && !reassembling) {
      // Cycle images continuously except during burst/reassemble overlay
      timeoutRef.current = setTimeout(() => {
        if (imageIndex < images.length - 1) {
          setImageIndex(imageIndex + 1);
        } else {
          setBursting(true);
        }
      }, IMAGE_DISPLAY_TIME);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [imageIndex, bursting, reassembling, showText]);

  // Update globe texture on imageIndex change
  useEffect(() => {
    if (globeRef.current) {
      const loader = new THREE.TextureLoader();
      loader.load(images[imageIndex], (texture: THREE.Texture) => {
        (globeRef.current!.material as THREE.MeshStandardMaterial).map = texture;
        (globeRef.current!.material as THREE.MeshStandardMaterial).needsUpdate = true;
      });
    }
  }, [imageIndex]);

  return (
    <div className="w-full flex flex-col items-center justify-center my-8 relative">
      <div
        ref={mountRef}
        style={{ width: width, height: width, maxWidth: '100%', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', position: 'relative', margin: '0 auto' }}
        className="bg-gradient-to-br from-blue-100 via-white to-green-100 flex items-center justify-center mx-auto"
      >
        {/* No SVG circular text or message here */}
      </div>
      {/* Animated company name after burst */}
      <AnimatePresence>
        {showText && (
          <motion.div
            key="habnet-text"
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: showTextAnim ? 8 : 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 40 }}
            transition={{ duration: 0.7, type: 'tween', ease: 'easeInOut' }}
            className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full z-20"
          >
            <span className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow-lg bg-white/80 px-8 py-4 rounded-lg border-2 border-blue-200 shadow-xl">
              Habnet Solutions
            </span>
            {/* Simulate globe breaking effect with animated lines */}
            {showTextAnim && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-full flex flex-col items-center mt-2"
              >
                <div className="w-24 h-1 bg-blue-400 mb-1 animate-pulse" />
                <div className="w-16 h-1 bg-blue-300 mb-1 animate-pulse" />
                <div className="w-32 h-1 bg-blue-200 animate-pulse" />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Circular note around the globe, upright and readable at the top */}
      <div className="pointer-events-none select-none absolute top-1/2 left-1/2 z-30" style={{ transform: `translate(-50%, -50%)` }}>
        <svg width={width + 40} height={width + 40} viewBox={`0 0 ${width + 40} ${width + 40}`} style={{ position: 'absolute', top: 0, left: 0 }}>
          <defs>
            <path id="circlePathTop" d={`M ${(width + 40) / 2},${30} a${(width + 40) / 2 - 30},${(width + 40) / 2 - 30} 0 1,1 0.01,0`} />
          </defs>
          <text fill="#2563eb" fontSize="18" fontWeight="bold" letterSpacing="1.5">
            <textPath xlinkHref="#circlePathTop" startOffset="50%" textAnchor="middle" dominantBaseline="middle">
              We are recognized internationally. See our Global Reach page.
            </textPath>
          </text>
        </svg>
      </div>
      {/* International recognition note at the border */}
    </div>
  );
} 