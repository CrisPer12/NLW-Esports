import { TouchableOpacity, Text, TouchableOpacityProps, ImageBackground, ImageSourcePropType } from 'react-native';

// Components 
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProsp {
    id: string;
    title: string,
    _count: {
        ads: number
    },
    bannerUlr: string;
}

interface Props extends TouchableOpacityProps {
    data: GameCardProsp
}

export function GameCard({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground
                style={styles.cover}
                source={{uri: data.bannerUlr}}
            >

                <LinearGradient
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >
                    <Text style={styles.name}>
                        {data.title}
                    </Text>

                    <Text style={styles.ads}>
                        {data._count.ads} Anúncios
                    </Text>
                </LinearGradient >
            </ImageBackground>

        </TouchableOpacity>
    );
}