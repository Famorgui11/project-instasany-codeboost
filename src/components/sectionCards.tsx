"use client";

import Image from "next/image";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import MockupMain from "/public/assets/mockup-main.png";
import Card01 from "/public/assets/image-01.png";
import Card02 from "/public/assets/image-02.png";
import Card03 from "/public/assets/image-03.png";
import Card04 from "/public/assets/image-04.png";
import Card05 from "/public/assets/image-05.png";
import Card06 from "/public/assets/image-06.png";

gsap.registerPlugin(ScrollTrigger);

const SectionCards = () => {
	const mockupRef = useRef(null);
	const titleRef = useRef(null);
	const sectionRef = useRef(null);
	const card1Ref = useRef(null);
	const card2Ref = useRef(null);
	const card3Ref = useRef(null);
	const card4Ref = useRef(null);
	const card5Ref = useRef(null);
	const card6Ref = useRef(null);
	const section = sectionRef.current;

	function animateCards(cards: null[], position: number) {
		gsap.fromTo(
			cards,
			{
				opacity: 0,
				x: position,
			},
			{
				opacity: 1,
				x: 0,
				duration: 0.5,
				stagger: 0.2,
				scrollTrigger: {
					trigger: section,
					start: "center center",
				},
			}
		);
	}

	useEffect(() => {
		const mockupPhone = mockupRef.current;
		const title = titleRef.current;

		gsap.fromTo(
			mockupPhone,
			{
				opacity: 0,
				scale: 0.5,
			},
			{
				opacity: 1,
				scale: 1,
				duration: 1,
				ease: "power4.out",
			}
		);

		gsap.fromTo(
			title,
			{
				opacity: 0,
				y: 100,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: section,
					start: "65% center",
				},
			}
		);

		const card1 = card1Ref.current;
		const card2 = card2Ref.current;
		const card3 = card3Ref.current;
		const card4 = card4Ref.current;
		const card5 = card5Ref.current;
		const card6 = card6Ref.current;

		const leftImages = [card1, card2, card3];
		const rightImages = [card4, card5, card6];

		animateCards(leftImages, 50);
		animateCards(rightImages, -50);
	}, []);

	return (
		<section className="w-full pb-20" ref={sectionRef}>
			<Image
				src={MockupMain}
				alt={"Mockup main"}
				className="sticky top-56 z-10 mx-auto -mt-[32rem] mb-16 opacity-0"
				ref={mockupRef}
			/>

			<h2
				className="text-center font-semibold text-7xl leading-[6.75rem] mb-60 opacity-0"
				ref={titleRef}>
				Faça <span className="text-brand-light">você</span> mesmo de casa
			</h2>

			<div className="relative w-full max-w-[82.5rem] h-[35.125rem] mx-auto">
				<Image
					src={Card01}
					alt={"Card 01"}
					className="absolute top-8 left-[11.5rem] opacity-0"
					ref={card1Ref}
				/>
				<Image
					src={Card02}
					alt={"Card 02"}
					className="absolute left-0 bottom-[7.6875rem] opacity-0"
					ref={card2Ref}
				/>
				<Image
					src={Card03}
					alt={"Card 03"}
					className="absolute bottom-0 left-[21.0625rem] opacity-0"
					ref={card3Ref}
				/>
				<Image
					src={Card04}
					alt={"Card 04"}
					className="absolute top-0 right-[8.6875rem] opacity-0"
					ref={card4Ref}
				/>
				<Image
					src={Card05}
					alt={"Card 05"}
					className="absolute right-0 bottom-[6.9375rem] opacity-0"
					ref={card5Ref}
				/>
				<Image
					src={Card06}
					alt={"Card 06"}
					className="absolute bottom-1 right-[20.875rem] opacity-0"
					ref={card6Ref}
				/>
			</div>
		</section>
	);
};

export default SectionCards;
