import { Link } from 'react-router-dom';
import { Group, Navbar as NavbarMantine, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import ChartInfographicIcon from 'tabler-icons-react/dist/icons/chart-infographic';
import HomeIcon from 'tabler-icons-react/dist/icons/home';

const MainLink = ({ path, label, icon }) => {
  return (
    <Link to={path}>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon variant="light">{icon}</ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
};

const data = [
  { icon: <HomeIcon size={16} />, path: '/', label: 'Home' },
  { icon: <ChartInfographicIcon size={16} />, path: '/trending', label: 'Trending' },
];

const Navbar = () => {
  return (
    <NavbarMantine height="calc(100vh - 60px)" p="xs" width={{ base: 300 }}>
      <NavbarMantine.Section grow mt="md">
        {data.map((link) => (
          <MainLink {...link} key={link.label} />
        ))}
      </NavbarMantine.Section>
    </NavbarMantine>
  );
};

export default Navbar;
