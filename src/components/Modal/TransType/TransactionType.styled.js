import styled from '@emotion/styled';

export const TransactionType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
`;

export const TextType = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.47;
  color: var(--modal-toggle-text-gray);
  font-family: var(--modal-toggle-font);
  color: ${p => {
    if (p.children === 'Income') {
      return p.type ? '' : '#24cca7';
    } else {
      return p.type ? '#ff6596' : '';
    }
  }};
`;

export const Toggle = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;
  > input {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    :checked {
      ~ .thumb {
        background-color: rgba(var(--color-white), 0.1);

        .indicator {
          left: 37px;
          background-color: var(--color-red);
          box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
          :hover {
            box-shadow: none;
          }
          .vertical {
            display: none;
          }
        }
      }
    }
  }
  .thumb {
    position: relative;
    width: 80px;
    height: 40px;
    border-radius: 30px;
    background-color: var(--color-white);
    border: 1px solid var(--modal-toggle-text-gray);
    opacity: 1;
    transition: background-color 200ms ease-in-out;
  }
  .indicator {
    position: absolute;
    top: -2px;
    left: -1px;
    width: 44px;
    height: 44px;
    background-color: var(--color-green);
    border-radius: 22px;
    transition: left 250ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    :hover {
      box-shadow: none;
    }
  }
`;
