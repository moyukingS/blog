import Welcome from '../../markdown/welcome.mdx';
import { ReactNode } from 'react';

function CustomH1({ children }: { children: ReactNode }) {
  return <h1 style={{ color: 'blue', fontSize: '100px' }}>{children}</h1>;
}

const overrideComponents = {
  h1: CustomH1,
};

export default function Page() {
  return <Welcome components={overrideComponents} />;
}
