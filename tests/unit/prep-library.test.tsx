import {fireEvent,render,screen} from "@testing-library/react";
import {describe,expect,it} from "vitest";
import {PrepLibrary} from "../../src/components/prep-library";
describe("PrepLibrary",()=>{it("captures an episode topic without external services",()=>{render(<PrepLibrary/>);fireEvent.change(screen.getByPlaceholderText("What should we talk about?"),{target:{value:"Should AI change work?"}});fireEvent.click(screen.getByRole("button",{name:"Save to prep"}));expect(screen.getByText("Should AI change work?")).toBeInTheDocument();expect(screen.getByText("1 saved")).toBeInTheDocument();});});
