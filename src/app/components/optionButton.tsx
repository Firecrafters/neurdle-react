import Image from "next/image"

export default function OptionButton(props: { iconSrc: string, buttonDescriptor: string }) {
    let buttonId = props.buttonDescriptor.toLowerCase();
    buttonId = buttonId.replaceAll(/ /g, "-");
    return (
        <>
            <button className="option" id={`option-${buttonId}`} title={props.buttonDescriptor}>
                <Image alt={props.buttonDescriptor} src={props.iconSrc} width="100" height="100" />
            </button>
        </>
    )
}