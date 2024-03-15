"use client";

// Import necessary dependencies
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { OrbitControls } from "@react-three/drei";

// Define the Cube component
const HeroCube = ({ className }: { className?: string }) => {
	return (
		<Canvas className={cn("aspect-square", className)}>
			<OrbitControls enableZoom={false} enablePan={false} />
			<ambientLight intensity={2} />
			<directionalLight position={[1, 2, 1]} intensity={1} />
			<Cube />
		</Canvas>
	);
};

export { HeroCube };

// Define the Cube component
function Cube() {
	const mesh = useRef(null);

	// Update the rotation of the mesh on each frame
	useFrame((state, delta) => {
		if (mesh.current !== null) {
			(mesh.current as any).rotation.x -= delta * 0.25;
			(mesh.current as any).rotation.y += delta * 0.15;
		}
	});

	// Load textures using TextureLoader
	const texture1 = useLoader(TextureLoader, "/cover_art/1.jpg");
	const texture2 = useLoader(TextureLoader, "/cover_art/2.jpg");
	const texture3 = useLoader(TextureLoader, "/cover_art/3.jpg");
	const texture4 = useLoader(TextureLoader, "/cover_art/4.jpg");
	const texture5 = useLoader(TextureLoader, "/cover_art/5.jpg");
	const texture6 = useLoader(TextureLoader, "/cover_art/6.jpg");

	return (
		<mesh ref={mesh}>
			<boxGeometry args={[3.5, 3.5, 3.5]} />

			{/* Assign textures to different materials */}
			<meshStandardMaterial map={texture1} attach={"material-0"} />
			<meshStandardMaterial map={texture2} attach={"material-1"} />
			<meshStandardMaterial map={texture3} attach={"material-2"} />
			<meshStandardMaterial map={texture4} attach={"material-3"} />
			<meshStandardMaterial map={texture5} attach={"material-4"} />
			<meshStandardMaterial map={texture6} attach={"material-5"} />
		</mesh>
	);
}
