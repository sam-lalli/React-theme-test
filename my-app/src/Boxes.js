import styled from 'styled-components';

const Box1 = styled.div`
background-color: ${props => props.theme.primaryColor};
margin: ${props => props.theme.smallMargin};
color: white;
`
const Box2 = styled.div`
background-color: ${props => props.theme.primaryColor};
margin: ${props => props.theme.smallMargin};
color: white;
`
const Box3 = styled.div`
background-color: ${props => props.theme.primaryColor};
margin: ${props => props.theme.smallMargin};
color: white;
`
const Box4 = styled.div`
background-color: ${props => props.theme.primaryColor};
margin: ${props => props.theme.smallMargin};
color: white;
`
const Box5 = styled.div`
background-color: ${props => props.theme.primaryColor};
margin: ${props => props.theme.smallMargin};
color: white;
`

const Boxes = () => {
    return (
        <div>
            <Box1>
                <h1>box1</h1>
            </Box1>

            <Box2>
                <h1>box2</h1>
            </Box2>

            <Box3>
                <h1>box3</h1>
            </Box3>

            <Box4>
                <h1>box4</h1>
            </Box4>

            <Box5>
                <h1>box5</h1>
            </Box5>
        </div>
    )
  };

export default Boxes;