import Image from "next/image";
import Link from "next/link";
import imgSrc from "../../../public/rishav.jpg";

const TinyImg = () => {
    return (
        <Link href={"/"}>
            <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <Image alt="Rishav profile picture" src={imgSrc} width={100} height={100} priority={true} />
                </div>
            </div>
        </Link>
    );
}

export default TinyImg
