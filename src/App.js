import { SidePanel } from "./components/SidePanel";
import { UserInfoPanel } from "./components/UserInfoPanel";
import { Chat } from "./components/Chat";
import "./styles/App.scss";

function App() {
	return (
		<div className="main">
			<div className="main-wrapper">
				<SidePanel />
				{/* <Chat></Chat> */}
				{/* <UserInfoPanel /> */}
			</div>
		</div>
	);
}

export default App;
