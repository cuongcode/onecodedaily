import React from 'react';

import { Main } from '../templates/Main';
import { Meta } from '../templates/Meta';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <Main
    meta={<Meta title="One Code Daily" description={AppConfig.description} />}
  >
    <div>One Code Daily</div>
  </Main>
);

export default Index;
