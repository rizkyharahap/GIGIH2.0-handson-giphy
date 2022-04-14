import {
  ActionIcon,
  Box,
  Group,
  Header as HeaderMantine,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { MoonStars, Sun } from 'tabler-icons-react';

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <HeaderMantine height={60}>
      <Group sx={{ height: '100%' }} px={20} position="apart">
        <Box>
          <Title>Giphy</Title>
        </Box>
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
          {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
        </ActionIcon>
      </Group>
    </HeaderMantine>
  );
};

export default Header;
