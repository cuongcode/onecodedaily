import React from 'react';

import { BaseButton } from '../components/base/base-button';
import { Main } from '../templates/Main';
import { Meta } from '../templates/Meta';
import { AppConfig } from '../utils/AppConfig';

const Homepage = () => {
  return (
    <Main
      meta={<Meta title="One Code Daily" description={AppConfig.description} />}
    >
      <div>Style Library</div>
      <BaseButton>Resume</BaseButton>
    </Main>
  );
};

export default Homepage;
