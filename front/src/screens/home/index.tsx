import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { 
    ColumBox, Container, Content, NameProfile, ProfileIcons, LinkToMeet,
    ProfessionTitle, RowBox, Description, ProfileImage, IconsLink
} from "./styled";

import { user } from '../../utils/tmb';
import { useEffect, useState } from 'react';

const IMGProfile = "assets/img/profile/profile-face.png";

interface UserProps {
    id: number;
    name: string;
    professional: string;
    description: string;
    github: string;
    linkedin: string; 
}

export default function HomeScreen() {

    const [dataUser, setDataUser] = useState<UserProps[]>([]) ;

    useEffect(() => {
        setDataUser(user);
    });

    return (
        <Container>
            <Content>

                <RowBox frameColum="INFO">
                    <ColumBox>
                        
                        <NameProfile>{dataUser.map(u => u.name)}</NameProfile>

                        <ProfessionTitle>{dataUser.map(u => u.professional)}</ProfessionTitle>

                        <Description>
                            {dataUser.map(u => u.description)}
                            <LinkToMeet href='/to-meet'>Clique para me conhecer...</LinkToMeet>
                        </Description>

                        
                    </ColumBox>
                </RowBox>
                
                <RowBox frameColum="PROFILE">
                    <ColumBox style={{ 
                        textAlign: "center",
                     }}>
                        <ProfileImage src={IMGProfile}/>
                        <ProfileIcons>
                            <IconsLink href={dataUser.map(u => u.github)} target='_blank'>
                                <AiFillGithub size={34}/>
                            </IconsLink>
                            <IconsLink href={dataUser.map(u => u.linkedin)} target='_blank'>
                                <AiFillLinkedin size={34}/>
                            </IconsLink>
                        </ProfileIcons>
                    </ColumBox>
                </RowBox>

            </Content>
        </Container>
    )
}