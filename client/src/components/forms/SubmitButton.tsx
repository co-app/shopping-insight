import styled from 'styled-components';
import { SubmitProps } from '../../utils/@types';

export default function SubmitButton({ onSubmit }: SubmitProps) {
  return (
    <StyledButtonWrapper>
      <StyledButton onClick={onSubmit}>Submit</StyledButton>
    </StyledButtonWrapper>
  );
}

const StyledButtonWrapper = styled.div`
  width: 80px;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: rgba(108, 114, 255, 0.8); /* 투명도를 가진 배경색 */
  color: #fff;

  &:hover {
    background-color: #4a4fff;
  }
`;
