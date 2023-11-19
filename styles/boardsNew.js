import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 1180px;
    padding: 40px;
    margin: 0 auto;
    border: 1px solid #ccc;
    box-sizing: border-box;


    @media (max-width: 1180px){
        background: black;
        width: 100%;
    }
`

export const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 35px;
`

export const InputWrapper = styled.div`
    width: 100%;
    margin-bottom: 35px;
`

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 35px;
`

export const TextWrapper = styled.div`
    width: 50%;
`

export const Label = styled.div`
    font-weight: 500;
    margin-bottom: 10px;
`

export const InputWriter = styled.input`
    width: 90%;
    padding: 3px 10px;
    border: 1px solid #bdbdbd;
    height: 24px;
`

export const InputPassword = styled.input`
    width: 90%;
    padding: 3px 10px;
    border: 1px solid #bdbdbd;
    height: 24px;
    
`
export const InputTitle = styled.input`
    width: 95%;
    padding: 3px 10px;
    border: 1px solid #bdbdbd;
    height: 24px;
`

export const InputContent = styled.textarea`
    width: 95%;
    height: 250px;
    resize: none;
    padding: 3px 10px;
    border: 1px solid #bdbdbd;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 22px;
`

export const InputAddrWrapper = styled.div`
    display: flex;
    margin-bottom: 5px;
`

export const Zipcode = styled.input`
    width: 120px;
    padding: 3px 10px;
    border: 1px solid #bdbdbd;
    height: 24px;
`

export const InputAddrBtn = styled.button`
    border: 1px solid #bdbdbd;
    margin-left: 5px;
    cursor: pointer;
`

export const InputAddr = styled.input`
    width: 95%;
    padding: 3px 10px;
    border: 1px solid #bdbdbd;
    height: 24px;
    margin: 5px 0;
`
export const InputYoutube = styled.input`
    width: 95%;
    padding: 3px 10px;
    border: 1px solid #bdbdbd;
    height: 24px;
`

export const ImageWrapper = styled.div`
    display: flex;
`

export const ImageBtn = styled.button`
    margin-right: 10px;
    width: 70px;
    height: 70px;
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 20px;
`

export const ImageBtnSpan = styled.div`
    font-size: 12px;
`

export const OptionWrapper = styled.div`
    display: flex;
`

export const RadioBtn = styled.input`
    cursor: pointer;
    width: 15px;
    height: 15px;
    accent-color: #fdd000;
`

export const RadioLabel = styled.label`
    cursor: pointer;
    margin-right: 10px;
`

export const ButtonWrapper = styled.div`
    width: 100%;
`

export const SubmitBtn = styled.button`
    width: 179px;
    height: 42px;
    font-weight: 700;
    border: none;
    display: block;
    margin: 50px auto 0;
    cursor: pointer;
    background-color: #fdd000;
    color: #333;
`

export const Error = styled.div`
    font-size: 12px;
    color: #ff0000;
    margin-top: 5px;
`

export const Span = styled.span`
    color: #ff0000;
    transform: translateY(3px);
    display: inline-block;
`