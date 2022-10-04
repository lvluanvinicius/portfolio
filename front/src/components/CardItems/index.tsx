import { 
    BoxItems, ImgItem, CardHeaderItem, CardBodyItem, CardImageHead
} from "./styled";


interface CardBoxProps {
    styled?: {};
    title: string;
    describe: string;
    image?: string;
    header?: boolean;
    onClick?: () => void;
}


export default function CardItemsComponent({
    styled, header, title, describe, image, ...props
}: CardBoxProps) {
    return (
        <BoxItems style={styled} {...props}> 
            { 
                header ? (
                    <CardHeaderItem style={{
                        marginTop: '.5rem',
                        marginBottom: "1rem",
                        transform: 'none',
                     }}>
                        <div style={{ paddingLeft: ".5rem"}}>
                            {title}
                            <CardImageHead/>
                        </div>                     
                    </CardHeaderItem>
                ) : (
                    <CardHeaderItem>
                        <ImgItem src={image} style={{ 
                            marginLeft: '.9rem',
                            marginTop: '.9rem',
                            width: 42
                         }}/>
                        <div>{title}</div>
                    </CardHeaderItem>
                )
            }

            <CardBodyItem>
                <p>{describe}</p>
                {/* <a href="#">Ver mais...</a> */}
            </CardBodyItem>
        </BoxItems>
    )
}