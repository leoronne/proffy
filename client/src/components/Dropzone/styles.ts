import styled from 'styled-components';
import { FiUpload } from 'react-icons/fi';

export const Container = styled.div`
  height: 208px;
  display: flex;
  align-items: center;
  justify-content: center;

  .dropzone {
    height: 80px;
    background: var(--color-primary-lightest);
    border-radius: 10px;
    width: 100%;
    display: flow-root;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    outline: 0;
    text-align: center;
    padding: 20px;
    border: 1px dashed var(--color-primary-dark);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dropzone img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  input[type='file'] {
    display: none;
  }

  .dropzone p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed var(--color-primary-dark);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--color-text-title);
  }
`;

export const FiUploadIcon = styled(FiUpload)`
  width: 15px;
  height: 15px;
  color: var(--color-primary);
  cursor: pointer;
  transition: var(--filter-transition);
  margin-right: 1.5rem;

  &:hover {
    transition: var(--filter-transition);
    filter: var(--hover-effect);
  }
`;
