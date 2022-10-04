import React from "react"
import * as Dialog from '@radix-ui/react-dialog';

import { Content } from './styled';

interface LayoutProps {
    children: React.ReactElement;
}

export default function LayoutApp({ children }: LayoutProps) {
    return (
        <Content>            
            {children}                    
        </Content>
    )
}