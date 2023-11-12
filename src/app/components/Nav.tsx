import Link from "next/link";
import React from "react";

export default function Nav() {
	return (
		<header>
			<nav
				className='flex items-center justify-between p-6 lg:p-8 h-20 border border-b-gray-600'
				aria-label='Global'
			>
				<div className=' flex lg:flex-1'>
					<a href='/' className='-m-1.5 p-1.5'>
						Next Js Authentication
					</a>
				</div>
				<Link href='/dashboard'>Dashboard</Link>
			</nav>
		</header>
	);
}
