import React from 'react';
import { Container, Display, Legend, List, Logo, Wrapper } from './styles/partners';

import spiceJet from '../../images/logo/spice-jet.png';
import indigo from '../../images/logo/indigo.png';
import goFirst from '../../images/logo/go-first.jpeg';
import airIndia from '../../images/logo/air-india.jpeg';
import airAsia from '../../images/logo/air-asia.jpeg';
import vistara from '../../images/logo/vistara.png';
import jetAirways from '../../images/logo/jet-airways.png';

const Partners = props => {
        const partners = [
        {
            id: 'p1',
            company: 'Spice Jet',
            logo: spiceJet,
        },
        {
            id: 'p2',
            company: 'Indigo',
            logo: indigo,
        },
        {
            id: 'p3',
            company: 'Go First',
            logo: goFirst,
        },
        {
            id: 'p4',
            company: 'Vistara',
            logo: vistara,
        },
        {
            id: 'p5',
            company: 'Jet Airways',
            logo: jetAirways,
        },
        {
            id: 'p6',
            company: 'Air Asia',
            logo: airAsia,
        },
        {
            id: 'p7',
            company: 'Air India',
            logo: airIndia,
        }
    ];

    return (
        <Container>
            <Wrapper>
                <Legend>
                    Associated flight partners
                </Legend>
                <List>
                    {
                        partners.map(p => {
                            return (
                                <Display id={p.id}>
                                    <Logo src={p.logo} alt={p.company} />
                                </Display>
                            );
                        })
                    }
                </List>
            </Wrapper>
        </Container>
    );
}

export default Partners;