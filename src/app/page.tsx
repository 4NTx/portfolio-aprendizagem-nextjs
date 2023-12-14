"use client"
import { Terminal } from "./components/terminal/terminal";

const Inicio: React.FC = () => {

    return (
        <>
            <div>
                <div className="flex-1 lg:flex hidden justify-end">
                    <Terminal />
                </div>
            </div>

        </>
    );
};

export default Inicio;