import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState, useEffect } from 'react';
import { Environment, OrbitControls, ScrollControls, Sky, MeshReflectorMaterial, ContactShadows } from '@react-three/drei';
import { KillerBot } from './killerBot';

const Scene = () => {
  const [enable, setEnable] = useState(true);

  useEffect(() => {
    const disableRotateOnMobile = () => {
      if (window.innerWidth < 500) {
        setEnable(false);
      } else {
        setEnable(true);
      }
    };

    // Run on initial render and on window resize
    disableRotateOnMobile();
    window.addEventListener('resize', disableRotateOnMobile);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', disableRotateOnMobile);
    };
  }, []);

  return (
    <>
      <div className='info'>
        <p>When selecting 06_Sphere_bot_Run_Attack, use scroll to animate</p>
      </div>
      <Canvas
        dpr={[1, 2]}
        style={{ height: '100vh' }}
        camera={{ position: [-2, 5, 17], fov: 45 }}
      >
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <Sky />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <ContactShadows
            frames={1}
            position={[0, -0.5, 0]}
            scale={10}
            opacity={0.4}
            far={1}
            blur={2}
          />
          <OrbitControls
            enableZoom={false}
            makeDefault
            enableRotate={enable}
            rotateSpeed={2}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2.5}
          />
          <ScrollControls damping={0.2} pages={10}>
            <KillerBot />
            <Plane />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Scene;

const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1}
        minDepthThreshold={0.9}
        maxDepthThreshold={1.2}
        color="#101010"
        metalness={0.5}
      />
    </mesh>
  );
};
