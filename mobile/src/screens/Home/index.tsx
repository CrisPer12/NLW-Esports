import { useEffect, useState } from 'react';
import { Image, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Assets
import logoImg from '../../assets/logo-nlw-esports.png'

// Components
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProsp } from '../../components/GameCard';
import { Background } from '../../components/Background';


import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProsp[]>();

  const navigation = useNavigation();

  function handleOpenGame({id, title, bannerUlr}: GameCardProsp) {
     navigation.navigate('game', {id, title, bannerUlr});
  }

  useEffect(() => {
    fetch('http://192.168.0.4:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo}
        />

        <Heading
          title="Encontre seu Duo!"
          subtitle="Selecione o game que deseja jogar"
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </View>
    </Background>
  );
}