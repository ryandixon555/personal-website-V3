import tw from 'tailwind.macro'
import styled from 'styled-components'

const Inner = styled.div`
  ${tw`w-full xxl:w-2/3 text-center lg:text-left`};
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export default Inner