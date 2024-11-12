import { Button } from "@/components/ui/button"
import { useState } from "react"
import GetStarted from "./GetStarted"

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=" border-b-2 bg-[#F4F6FF] flex p-5 justify-between">
            <h1 className="text-4xl text-indigo-800 font-sans font-extrabold">Cold Mailer</h1>
            <div className="flex gap-5">
                <Button
                    className="bg-indigo-800 hover:bg-indigo-950"
                    onClick={() => setOpen(!open)}
                >Get started</Button>
            </div>
            <GetStarted open={open} setOpen={setOpen} />
        </div>
    )
}
export default Header