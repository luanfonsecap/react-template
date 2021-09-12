import { useEffect, useState } from 'react';

import checkTitleIsValid from '@modules/Home/utils/checkTitleIsValid';

import { Container } from './styles';

type TitleProps = {
  title: string;
};

export function Title({ title }: TitleProps) {
  const [verifiedTitle, setVerifiedTitle] = useState('');

  useEffect(() => {
    if (checkTitleIsValid(title)) {
      setVerifiedTitle(title);
      return;
    }
    setVerifiedTitle('Generic Title');
  }, [title]);

  return (
    <Container>
      <h1>{verifiedTitle}</h1>
    </Container>
  );
}
