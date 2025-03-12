import Image, {StaticImageData} from "next/image";
import aliveStatus from "../../../../public/statuses/alive.png";
import {CharacterStatusType} from "../../../../assets/api/rick-and-morty-api";

type PropsType = {
    status: CharacterStatusType
    src: StaticImageData
}

export const Status = (props: PropsType) => {
    const {status, src} = props;

    return (
        <>
            <Image src={src} alt={''} width={20} height={20}/>
        </>
    )
}