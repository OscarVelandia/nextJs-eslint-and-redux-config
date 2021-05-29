import { useEffect, useState } from 'react';

export const Grid = () => {
  const [bla, setBla] = useState();

  useEffect(() => {
    if (bla) return;

    const blasito = [1, 2, 3, 44, 4, 4, 4, 4, 4, 5, 6, 7, 8, 9, 0, 6567, 567, 5, 67, 56, 7].map(
      () => console.log('hola que tal'),
    );
    setBla('hola');
  }, []);

  return (
    <div>
      <a href="" />
      <button>sdf</button>
    </div>
  );
};
