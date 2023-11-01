"use client";

import Image from "next/image";

import { useEffect, useRef } from "react";

import gsap from "gsap";

import Container from "@/components/container";

import IconFile from "/public/assets/icon-file.svg";
import IconHand from "/public/assets/icon-hand.svg";
import IconHand2 from "/public/assets/icon-hand-02.svg";
import Mockup from "/public/assets/mockup.svg";

const SectionHero = () => {
	const textHeroRef = useRef(null);
	const mockupLeftRef = useRef(null);
	const mockupRigthRef = useRef(null);

	useEffect(() => {
		const textHero = textHeroRef.current;
		const mLeft = mockupLeftRef.current;
		const mRight = mockupRigthRef.current;

		gsap.fromTo(
			textHero,
			{
				opacity: 0,
				y: 20,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: "power4.out",
			}
		);

		gsap.fromTo(
			mLeft,
			{
				rotate: 0,
			},
			{
				rotate: -10,
				duration: 1,
			}
		);

		gsap.fromTo(
			mRight,
			{
				rotate: 0,
			},
			{
				rotate: 10,
				duration: 1,
			}
		);
	}, []);

	return (
		<section className="relative w-full bg-brand-dark bg-hero bg-no-repeat bg-top h-[54.625rem] border-t border-t-[#2A4B46] pt-16 overflow-hidden">
			<Container className="flex flex-col items-center">
				<div className="w-full max-w-[66rem] text-center opacity-0" ref={textHeroRef}>
					<h3 className="font-medium text-[1.375rem] text-brand-light mb-4">
						Novo curso focado em instagram
					</h3>
					<h1 className="font-semibold text-white text-7xl leading-[6.75rem] mb-2">
						Destrave as suas habilidades
					</h1>
					<div className="flex items-center justify-center gap-10">
						<button className="flex items-center gap-2">
							<Image src={IconFile} alt={"Icone de lista"} />
							<span className="font-medium text-white">Assinar lista de espera</span>
						</button>
						<button className="bg-brand-default rounded-full py-[0.875rem] px-[1.625rem]">
							<span className="font-semibold text-brand-dark">Começar agora</span>
						</button>
					</div>
				</div>

				<div className="relative w-full max-w-[53.5rem] h-28 mt-4">
					<Image src={IconHand} alt={"Icone de mão"} className="absolute left-0 bottom-0" />
					<Image src={IconHand2} alt={"Icone de mão"} className="absolute right-0 top-0" />
				</div>

				<div className="absolute flex justify-between -bottom-48 w-full max-w-[59.8125rem]">
					<Image
						src={Mockup}
						alt={"Imagem Mockup"}
						className="relative top-[1.1rem] left-[3.3rem]"
						ref={mockupLeftRef}
					/>
					<Image
						src={Mockup}
						alt={"Imagem Mockup"}
						className="relative top-[1.1rem] right-[3.3rem]"
						ref={mockupRigthRef}
					/>
				</div>
			</Container>
		</section>
	);
};

export default SectionHero;
