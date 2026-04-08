import reactLogo from "../assets/react.svg"
import viteLogo from "../assets/vite.svg"
import ChildComp from "./ChildComp"

export default function PrentComp(){
    return (
        <>
            <ChildComp 
            imageInfo={
                {
                    src: reactLogo,
                    alt: "React1"
                }
            }
            width={100}
            heigt={100}
            />
            <ChildComp 
            imageInfo={
                {
                    src: reactLogo,
                    alt: "React1"
                }
            }
            width={100}
            heigt={100}
            />
            <ChildComp 
            imageInfo={
                {
                    src: viteLogo,
                    alt: "vite"
                }
            }
            width={100}
            heigt={100}
            />
        </>
    )
}