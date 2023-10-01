import { ReactNode } from 'react';

interface LoaderProps {
  loading: boolean;
  children: ReactNode;
}

const Loader = ({ loading, children }: LoaderProps) => {
  return loading ? (
    <div className="flex h-[100vh] w-full items-center justify-center">Loading...</div>
  ) : (
    children
  );
};

export default Loader;
