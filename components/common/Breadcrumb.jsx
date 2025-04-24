// import Arrow from "@/public/images/about/arrow.png";
// import Image from "next/image";
// import Link from "next/link";
// function BreadCrumb({ bgImage, title }) {
// 	return (
// 		<div className="sofax-breadcrumb"
// 		style={{
// 			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.88)), url(${bgImage.src})`,
// 		}}>
// 			<div className="container">
// 				<h1 className="post__title">{title}</h1>
// 				<nav className="breadcrumbs">
// 					<ul>
// 						<li>
// 							<Link href="/">Home</Link>
// 						</li>
// 						<li>
// 							<Image src={Arrow} alt="arrow" />
// 						</li>
// 						<li aria-current="page"> {title}</li>
// 					</ul>
// 				</nav>
// 			</div>
// 		</div>
// 	);
// }

// export default BreadCrumb;


import React from "react";
import Arrow from "@/public/images/about/arrow.png";
import Image from "next/image";
import Link from "next/link";

function BreadCrumb({ bgImage, trail = [] }) {
	return (
		<div
			className="sofax-breadcrumb"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.88)), url(${bgImage.src})`,
			}}
		>
			<div className="container">
				<h1 className="post__title">{trail[trail.length - 1]?.label}</h1>
				<nav className="breadcrumbs">
					<ul className="flex items-center gap-2">
						{trail.map((item, index) => (
							<React.Fragment key={`breadcrumb-${index}`}>
								<li>
									{item.href ? (
										<Link href={item.href}>{item.label}</Link>
									) : (
										<span aria-current="page">{item.label}</span>
									)}
								</li>
								{index < trail.length - 1 && (
									<li aria-hidden="true">
										<Image src={Arrow} alt="arrow" />
									</li>
								)}
							</React.Fragment>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default BreadCrumb;


