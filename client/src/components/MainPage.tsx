import React from 'react';

interface Test {
  test: {id: number}[];
}

const MainPage: React.FC<Test> = (props: Test) => (
  <h1>
    Hello, World!
  </h1>
);

export default MainPage;