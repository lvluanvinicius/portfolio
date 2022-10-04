import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import {
    Container, SecTitle, SecItems, ContentDialogDetails, FooterDialogDetails, DialogDetails, DialogHeader, ImgDialog,
} from "./styled";

import { Skills } from './../../utils/tmb';
import CardItemsComponent from "../../components/CardItems";
import { THEME } from '../../theme/colors';

interface SkillDataProps {
    id: number;
    name: string;
    description: string;
    path_image: string;
}

export default function ToMeetScreen() {

    const [dataSkills, setDataSkills] = useState<SkillDataProps[]>([]);

    useEffect(() => {
        setDataSkills(Skills);
    });

    const [openDetails, setOpenDetails] = useState(false);

    const [skillDialog, setSkillDialog] = useState<SkillDataProps[]>([]);

    const handleOpenDetailsSkill = (skillId: number) => {
        setOpenDetails(true);
        const skill = dataSkills.filter((item: SkillDataProps) => item.id == skillId);
        setSkillDialog(skill);
        console.log(skillDialog);
    }

    return (
        <Container>
            <Dialog.Root open={openDetails}>
                <SecTitle style={styles.secTitleSkills}>
                    <div>
                        <h1>Minhas Habilidades</h1>
                        <div className="line-titles"></div>
                    </div>
                </SecTitle>

                <SecItems>
                    {dataSkills.map(item => (
                        <CardItemsComponent
                            key={item.id}
                            onClick={() => handleOpenDetailsSkill(item.id)}
                            styled={styles.cardItemsSkills}
                            title={item.name}
                            describe={item.description}
                            image={`assets/img/languages/${item.path_image}`}
                        />
                    ))}

                </SecItems>

                <SecTitle style={styles.secTitleProjects}>
                    <h1>Projetos</h1>
                    <div className="line-titles"></div>
                </SecTitle>

                <SecItems>
                    <CardItemsComponent
                        styled={styles.cardItemsProjects}
                        header
                        title="Python"
                        describe="Occaecat enim dolore non deserunt ipsum amet eiusmod non fugiat veniam..."
                    />
                </SecItems>

                <Dialog.Portal>
                    <Dialog.Overlay style={styles.dialogOverlay}>
                        <Dialog.Content style={styles.dialogContent}>

                            <ContentDialogDetails>
                                <DialogHeader>
                                    <ImgDialog src={`assets/img/languages/${skillDialog.map(item => item.path_image)}`} />
                                    <Dialog.Title style={styles.dialogTitle}>
                                        {skillDialog.map(item => item.name)}
                                        <div className="line-titles" style={{
                                            height: '.1rem',
                                            width: '30%',
                                        }}></div>
                                    </Dialog.Title>
                                </DialogHeader>

                                <DialogDetails>
                                    <p>
                                        {skillDialog.map(item => item.description)}
                                    </p>
                                </DialogDetails>

                                <FooterDialogDetails>
                                    <button onClick={() => setOpenDetails(false)}>Fechar detalhes</button>
                                </FooterDialogDetails>
                            </ContentDialogDetails>

                        </Dialog.Content>
                    </Dialog.Overlay>
                </Dialog.Portal>
            </Dialog.Root>
        </Container>
    )
}

const styles = {
    secTitleSkills: {
    },
    cardItemsSkills: {
        height: "9rem",
    },
    secTitleProjects: {
        marginTop: "2rem",
    },
    cardItemsProjects: {
        width: "11rem",
        height: "15rem",
        borderRadius: "1rem",
    },
    controlsSkillsLeft: {
        cursor: 'pointer',
    },
    controlsSkillsRight: {
        marginLeft: '1rem',
        marginRight: '2rem',
        cursor: 'pointer',
    },
    dialogContent: {
        background: THEME.BACKGROUND.TERTIARY,
        width: '38%',
        height: '70%',
        borderRadius: '2rem',
        padding: '1rem',
        boxShadow: `1px 2px 2px ${THEME.BACKGROUND.BLACK_RGB}`
    },
    dialogOverlay: {
        background: THEME.BACKGROUND.BLACK_RGB as string,
        inset: 0 as number,
        position: "fixed" as string,
        display: 'flex' as string,
        alignItems: 'center' as string,
        justifyContent: 'center' as string,
    },
    dialogTitle: {
        color: THEME.TEXT.WHITE,
        fontSize: '2rem',
        textAlign: 'right',
        letterSpacing: '.2rem',
    }
} 