import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;

  img {
    padding-top: 20px;
    width: 100%;
    height: 250px;

    @media (max-width: 768px) {
      height: 380px;
    }

    @media (max-width: 430px) {
      height: 160px;
    }
  }
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  margin-right: 8px;
  cursor: pointer;
`
