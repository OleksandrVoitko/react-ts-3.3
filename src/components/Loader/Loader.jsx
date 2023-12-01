import { DivLoader } from './Loader.styled';

export function Loader() {
  return (
    <DivLoader className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </DivLoader>
  );
}
