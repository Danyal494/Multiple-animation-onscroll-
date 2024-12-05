/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: 3DHaupt (https://sketchfab.com/dennish2010)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/sphere-bot-6c3a32958c2d43cdbf12a7109616bdbe
Title: Sphere Bot
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva';


export function KillerBot(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/sphere_bot.glb');
  const { actions } = useAnimations(animations, group);
  const scroll = useScroll();

  // Populate animation options dynamically
  const animationNames = Object.keys(actions);
  const [selectedAnimation, setSelectedAnimation] = useState(animationNames[0]);
  const [isAnimating, setIsAnimating] = useState(false); // Animation toggle state

  // Leva controls
  useControls({
    Animation: {
      value: selectedAnimation,
      options: animationNames,
      onChange: (value) => setSelectedAnimation(value),
    },
    "Enable Animation": {
      value: isAnimating,
      onChange: (value) => setIsAnimating(value),
    },
  });

  useEffect(() => {
    // Manage animation play/pause based on the toggle
    if (selectedAnimation && actions[selectedAnimation]) {
      if (isAnimating) {
        Object.values(actions).forEach((action) => action.stop());
        actions[selectedAnimation].reset().play();
      } else {
        actions[selectedAnimation]?.stop();
      }
    }
  }, [selectedAnimation, isAnimating, actions]);

  useFrame(() => {
    // Optional: Sync animation time with scroll for specific animations
    if (isAnimating && selectedAnimation === "06_Sphere_bot_Run_Attack" && actions[selectedAnimation]) {
      actions[selectedAnimation].time =
        (actions[selectedAnimation].getClip().duration * scroll.offset) / 1;
    }
  });
  // useEffect(() => {
//   // Play all animations initially and pause them
//   Object.values(actions).forEach((action) => {
//     action.play();
//     action.paused = true;
//   });
// }, [actions]);

// useFrame(() => {
//   const totalAnimations = Object.keys(actions).length;
//   const animationDurationSum = animations.reduce(
//     (sum, clip) => sum + clip.duration,
//     0
//   );
  
//   // Determine the total time based on scroll position
//   const totalTime = scroll.offset * animationDurationSum;

//   let accumulatedTime = 0;

//   // Iterate through all animations to play them sequentially
//   Object.keys(actions).forEach((key, index) => {
//     const clip = animations[index];
//     const startTime = accumulatedTime;
//     const endTime = accumulatedTime + clip.duration;

//     if (totalTime >= startTime && totalTime <= endTime) {
//       actions[key].paused = false;
//       actions[key].time = totalTime - startTime;
//     } else {
//       actions[key].paused = true;
//     }

//     accumulatedTime += clip.duration;
//   });
// });


  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0,-1,0]} name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.667}>
          <group name="9b55d0db6a714da380d45a45629c5778fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Sphere_Bot__Leg_Ao}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Sphere_Bot__Leg_Nor}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.Sphere_Bot__Leg_Nor}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.Sphere_Bot__Leg_Nor}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Sphere_Bot__Leg_Nor}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.Sphere_Bot__Leg_Nor}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.Sphere_Bot__Leg_Nor}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials.Sphere_Bot__Leg_Nor}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials.Sphere_Bot__Leg_Nor}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials.Sphere_Bot__Leg_Nor}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Object_27"
                    geometry={nodes.Object_27.geometry}
                    material={materials.Sphere_Bot__Leg_Nor}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name="Object_29"
                    geometry={nodes.Object_29.geometry}
                    material={materials.Sphere_Bot__Leg_Nor}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name="Object_31"
                    geometry={nodes.Object_31.geometry}
                    material={materials.Sphere_Bot__Leg_Nor}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name="Object_33"
                    geometry={nodes.Object_33.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name="Object_34"
                    geometry={nodes.Object_34.geometry}
                    material={materials.Material_002}
                    skeleton={nodes.Object_34.skeleton}
                  />
                  <group name="Object_6" position={[0, 1.268, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Object_8" position={[0, 1, 0]} rotation={[-0.492, 0.991, -2.72]} />
                  <group name="Object_10" position={[0, 1, 0]} rotation={[-0.262, 0, Math.PI]} />
                  <group name="Object_12" position={[0, 1, 0]} rotation={[-0.492, -0.991, 2.72]} />
                  <group name="Object_14" position={[0, 1, 0]} rotation={[-2.65, -0.991, 0.421]} />
                  <group name="Object_16" position={[0, 1, 0]} rotation={[-2.88, 0, 0]} />
                  <group name="Object_18" position={[0, 1, 0]} rotation={[-2.65, 0.991, -0.421]} />
                  <group name="Object_20" position={[0, 1, 0]} rotation={[0.492, 0.991, -0.421]} />
                  <group name="Object_22" position={[0, 1, 0]} rotation={[0.262, 0, 0]} />
                  <group name="Object_24" position={[0, 1, 0]} rotation={[0.492, -0.991, 0.421]} />
                  <group name="Object_26" position={[0, 1, 0]} rotation={[2.65, -0.991, 2.72]} />
                  <group name="Object_28" position={[0, 1, 0]} rotation={[2.88, 0, -Math.PI]} />
                  <group name="Object_30" position={[0, 1, 0]} rotation={[2.65, 0.991, -2.72]} />
                  <group
                    name="Object_32"
                    position={[0, 1.001, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group name="Cube" position={[0, 0, 1.268]} />
                  <group name="Leg_1" position={[0, 0, 1]} rotation={[1.079, 0.991, -2.72]} />
                  <group name="Leg_2" position={[0, 0, 1]} rotation={[1.309, 0, Math.PI]} />
                  <group name="Leg_3" position={[0, 0, 1]} rotation={[1.079, -0.991, 2.72]} />
                  <group name="Leg_4" position={[0, 0, 1]} rotation={[-1.079, -0.991, 0.421]} />
                  <group name="Leg_5" position={[0, 0, 1]} rotation={[-1.309, 0, 0]} />
                  <group name="Leg_6" position={[0, 0, 1]} rotation={[-1.079, 0.991, -0.421]} />
                  <group name="Leg_7" position={[0, 0, 1]} rotation={[2.063, 0.991, -0.421]} />
                  <group name="Leg_8" position={[0, 0, 1]} rotation={[1.833, 0, 0]} />
                  <group name="Leg_9" position={[0, 0, 1]} rotation={[2.063, -0.991, 0.421]} />
                  <group name="Leg_10" position={[0, 0, 1]} rotation={[-2.063, -0.991, 2.72]} />
                  <group name="Leg_11" position={[0, 0, 1]} rotation={[-1.833, 0, -Math.PI]} />
                  <group name="Leg_12" position={[0, 0, 1]} rotation={[-2.063, 0.991, -2.72]} />
                  <group name="Circle" position={[0, 0, 1.001]} />
                  {/* <group name="Plane" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Plane_Material_001_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane_Material_001_0.geometry}
                      material={materials.Material_001}
                    />
                  </group> */}
                  <group
                    name="Hemi"
                    position={[3.195, 7.238, 1.018]}
                    rotation={[0.413, -0.073, -0.79]}>
                    <group name="Object_133" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_134" />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sphere_bot.glb')