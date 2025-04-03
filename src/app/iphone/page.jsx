import { MdLaptopMac } from "react-icons/md";

const IPhone = () => {
    return (
        <div className="flex justify-between items-center mx-auto p-8">
            <div>
                <h1 className="text-lg font-bold">Iphone</h1>
                <p className="text-sm max-w-prose">
                    Mac-computere fra Apple er kendt for deres elegante design, brugervenlighed og kraftige ydeevne. De bruger macOS som operativsystem, hvilket giver problemfri integration med andre Apple-enheder. Populære modeller inkluderer MacBook Air, MacBook Pro og iMac, og de nyeste modeller drives af de effektive M1- og M2-chips. Mac er også populær blandt kreative fagfolk og er kendt for sin fokus på sikkerhed og lang holdbarhed.
                </p>
            </div>
            <div>
                <MdLaptopMac size={100} />
            </div>
        </div>

    );
}

export default IPhone;