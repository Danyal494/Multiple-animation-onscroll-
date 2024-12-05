import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

import { Environment, OrbitControls, ScrollControls, Sky, MeshReflectorMaterial, ContactShadows } from '@react-three/drei';
import { KillerBot } from './killerBot';

const Scene = () => {
  return (
    <>
    <div className='info'>
      <p>when select 06_Sphere_bot_Run_Attack use scroll to animate</p>
    </div>
      <Canvas dpr={[1, 2]}  style={{ height: '100vh' }} camera={{ position: [-2, 5, 17], fov: 45 }}>
        {/* Add a directional light */}
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <Sky />
        <Environment preset="city" />

        {/* Add OrbitControls and ScrollControls */}
        <Suspense fallback={null}>
        <ContactShadows frames={1} position={[0, -0.5, 0]} scale={10} opacity={0.4} far={1} blur={2} />
        <OrbitControls enableZoom={false} makeDefault rotateSpeed={2} minPolarAngle={0} maxPolarAngle={Math.PI / 2.5} />
          <ScrollControls damping={0.2} pages={10}>
            {/* Add KillerBot and Plane */}
         <KillerBot/>
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
      {/* Plane geometry and reflective material */}
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        blur={[400, 100]} // Blur for reflections
        resolution={1024} // Reflection resolution
        mixBlur={1} // Mix reflections with surface blur
        mixStrength={40} // Reflection strength
        roughness={1} // Surface roughness
        depthScale={1} // Depth scale of reflections
        minDepthThreshold={0.9} // Minimum depth for reflections
        maxDepthThreshold={1.2} // Maximum depth for reflections
        color="#101010" // Surface color
        metalness={0.5} // Metallic property
      />
    </mesh>
  );
};
