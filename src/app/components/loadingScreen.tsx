import Image from "next/image"

export default function LoadingScreen() {
    return (
        <>
            <h1>Loading...</h1>
            <Image alt="Loading circle" width={100} height={100} src={"/misc/loading-circle.svg"} />
        </>
    )
}