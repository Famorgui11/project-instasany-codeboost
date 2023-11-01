import Image from "next/image";
import Link from "next/link";

import Container from "@/components/container";

import Logo from "/public/assets/logo.svg";
import IconSearch from "/public/assets/icon-search.svg";
import IconUser from "/public/assets/icon-user.svg";

const arrayMenu = [
	"Início",
	"Benefícios",
	"Para quem é o curso?",
	"Preços promocionais",
	"Sobre nós",
];

const Header = () => {
	const activeStyled = "bg-brand-light text-opacity-100 rounded-full";
	return (
		<header className="relative w-full h-24 bg-brand-dark flex items-center">
			<Container className="flex items-center justify-between">
				<Image src={Logo} alt={"Logo Instasany"} />
				<div className="flex items-center gap-20">
					<nav className="flex gap-2">
						{arrayMenu.map((item, index) => (
							<Link
								key={index}
								href={""}
								className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all ${
									index === 0 ? activeStyled : " "
								}`}>
								{item}
							</Link>
						))}
					</nav>
					<div className="flex items-center gap-6">
						<button>
							<Image src={IconSearch} alt={"Icone de pesquisa"} />
						</button>
						<button className="flex items-center gap-2">
							<Image src={IconUser} alt={"Icone de usuário"} />
							<span className="font-medium text-white">Fazer login</span>
						</button>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
