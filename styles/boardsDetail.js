import styled from "@emotion/styled";

export const Wrapper = styled.div`
    padding: 40px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #ccc;
`;

export const CardWrapper = styled.div`      
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Avatar = styled.img`
    margin-right: 10px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
    width: 100%;
    min-height: 800px;
`;

export const Title = styled.h1`
    padding-top: 80px;
`;

export const Contents = styled.div`
    padding-top: 40px;
    padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
`;

export const Button = styled.button`
    width: 179px;
    height: 45px;
    background-color: white;
    border: 1px solid gray;
    margin: 0px 12px;
    cursor: pointer;

    :hover {
        background-color: gold;
        border-color: white;
    }
`;
