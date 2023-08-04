import Image from "next/image";

export default function Logo() {
    return (
        <div className="relative">
            <Image
                src={'/images/BW.PNG'}
                width={100}
                height={100}
                alt="BW Logo"
            />
        </div>
    )
}