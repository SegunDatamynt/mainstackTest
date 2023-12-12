import {render, screen} from "@testing-library/react"
import Navbar from "../components/Navbar.tsx"
// @ts-ignore
import konva from "konva-node"

konva.isBrowser = false;


it("should have Revenue", async () => {
    render(<Navbar />);

    const message = screen.queryByText(/Revenue/);
    expect(message).toBeVisible();
});
