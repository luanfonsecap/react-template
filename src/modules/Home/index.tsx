import links from '@common/utils/links';

import { Title } from './components/Title';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Title title="Home" />
      <a href={links.website.base}>Meet our website.</a>
    </Container>
  );
}

export default Home;
