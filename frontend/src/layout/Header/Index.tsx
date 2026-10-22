import { MdOutlinePets } from "react-icons/md";

export default function Header() {
    return (
        <div>
            <div className="flex justify-center mt-10">
                <div className="grid grid-cols-2 gap-200 ">
                    <div className="flex gap-1">
                        <p className="flex py-1">
                        <MdOutlinePets className="color-[#8CD6C4]"/>
                        </p>
                        <p className="font-black text-[#000000]">pet</p>
                        <p className="font-black text-[#8CD6C4]">care</p>
                    </div>
                </div>
            </div>
            <div>
                <span className="font-black text-[#000000]">Cuidado completo em um só</span>
                <span className="font-black text-[#8CD6C4]">lugar.</span>
            </div>
            <div>
                <p>Clientes, pets e serviços organizadoa para o atendimento a cliente do dia a dia.</p>
            </div>
            
        </div>
    );
}