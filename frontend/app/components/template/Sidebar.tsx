import { Link } from "@remix-run/react";
import Navigation from "./Navigation";

export default function Sidebar() {
	return (
		<div className="bg-vorboss w-64 h-screen">
			<Link to="/">
				<img src="/logo.png" alt="Vorboss" className="w-64" />
			</Link>
			<Navigation />
		</div>
	);
}
