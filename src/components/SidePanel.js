import React from "react";
import "../styles/SidePanel.scss";
import Dots from "../img/Dots.png";
import Logo from "../img/Logo.png";

export const SidePanel = () => {
	return (
		<div className="side-panel-wrapper">
			{/* == NAV_MENU == */}
			<div className="nav-menu-wrapper">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div className="dots">
						<img src={Dots} alt="Dots" />
					</div>
					<div className="logo">
						<img className="logo-img" src={Logo} alt="Logo" />
					</div>
				</div>
				<button className="btn-add">
					<i
						className="fa-solid fa-plus plus-img"
						style={{ color: "white" }}
					></i>
				</button>
			</div>
			{/* == NOMAD LIST */}
			<div className="nomad-list-wrapper">
				<div>
					<select>Nomad List</select>
				</div>
			</div>
		</div>
	);
};
