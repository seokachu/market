import { 
    Wrapper,
    Title,
    TextWrapper,
    InputWrapper,
    TitleWrapper,
    Label,
    InputWriter,
    InputPassword,
    InputTitle,
    InputContent,
    InputAddrWrapper,
    Zipcode,
    InputAddrBtn,
    InputAddr,
    InputYoutube,
    ImageWrapper,
    ImageBtn,
    ImageBtnSpan,
    OptionWrapper,
    RadioBtn,
    RadioLabel,
    ButtonWrapper,
    SubmitBtn,
    Error,
    Span
} from "../../../styles/boardsNew";
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!){
        createBoard(createBoardInput: $createBoardInput){
            _id
        }
    }
`

export default function BoardsNewPage(){

    //graphql 추가
    const [createBoard] = useMutation(CREATE_BOARD)
    
    //router 추가
    const router = useRouter()

    //받아오는 value의 값
    const [writer, setWriter] = useState('');
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    //에러메세지 출력
    const [writerError, setWriterError] = useState(''); //작성자
    const [passwordError, setPasswordError] = useState(''); //패스워드
    const [titleError, setTitleError] = useState(''); // 제목
    const [contentError, setContentError] = useState(''); //내용


    const onChangeWriter = (event) =>{
        setWriter(event.target.value)
        if(event.target.value !== ""){
            setWriterError('');
        }
    };

    const onChangePassword = (event) =>{
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setPasswordError('');
        }
    };

    const onChangeTitle = (event) =>{
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleError('');
        }
    };

    const onChangeContent = (event) =>{
        setContent(event.target.value)
        if(event.target.value !== ""){
            setContentError('');
        }
    };

    //결과값 출력
    const onClickSubmit = async () =>{
        if(!writer){ //없을때
            setWriterError('작성자 이름을 입력해주세요.');
            //alert('작성자 이름을 확인해 주세요.');
        }
        if(!password){
            setPasswordError('비밀번호를 입력해주세요.');
            //alert('비밀번호를 확인해 주세요.')
        }
        if(!title){
            setTitleError('제목을 입력해주세요.');
            //alert('제목을 확인해 주세요.')
        }
        if(!content){
            setContentError('내용을 입력해주세요.');
            //alert('내용을 확인해 주세요.')
        }
        if(writer && password && title && content){
            try{
                const result = await createBoard({
                    variables: {
                        createBoardInput:{
                            writer,
                            password,
                            title,
                            contents: content
                        }
                    }
                })
                console.log(result.data.createBoard._id);
                router.push(`/boards/${result.data.createBoard._id}`)
            } catch(error){
                alert(error.message)
            }
        }
    }




    return(
        <Wrapper>
            <Title>게시글 등록</Title>
            <TitleWrapper>
                <TextWrapper>
                    <Label><Span>*</Span> 작성자</Label>
                    <InputWriter placeholder="이름을 입력해 주세요." onChange={onChangeWriter}/>
                    <Error>{writerError}</Error>
                </TextWrapper>
                <TextWrapper>
                    <Label><Span>*</Span> 비밀번호</Label>
                    <InputPassword type="password" placeholder="비밀번호를 입력해 주세요." onChange={onChangePassword}/>
                    <Error>{passwordError}</Error>
                </TextWrapper>
            </TitleWrapper>
            <InputWrapper>
                <Label><Span>*</Span> 제목</Label>
                <InputTitle placeholder="제목을 작성해 주세요." onChange={onChangeTitle} />
                <Error>{titleError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label><Span>*</Span> 내용</Label>
                <InputContent placeholder="내용을 작성해 주세요." onChange={onChangeContent}/>
                <Error>{contentError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <InputAddrWrapper>
                    <Zipcode placeholder = "07250" />
                    <InputAddrBtn>우편번호 검색</InputAddrBtn>
                </InputAddrWrapper>
                <InputAddr />
                <InputAddr />
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <InputYoutube placeholder="링크를 복사해 주세요." />
            </InputWrapper>
            <InputWrapper>
                <Label>사진첨부</Label>
                <ImageWrapper>
                    <ImageBtn>+<ImageBtnSpan>upload</ImageBtnSpan></ImageBtn>
                    <ImageBtn>+<ImageBtnSpan>upload</ImageBtnSpan></ImageBtn>
                    <ImageBtn>+<ImageBtnSpan>upload</ImageBtnSpan></ImageBtn>
                    <ImageBtn>+<ImageBtnSpan>upload</ImageBtnSpan></ImageBtn>
                    <ImageBtn>+<ImageBtnSpan>upload</ImageBtnSpan></ImageBtn>
                </ImageWrapper>
            </InputWrapper>
            <InputWrapper>
                <Label>메인설정</Label>
                <OptionWrapper>
                    <RadioBtn type="radio" id="youtube" name="radio-button" />
                    <RadioLabel htmlFor="youtube" name="youtube-button">유튜브</RadioLabel>
                    <RadioBtn type="radio" id="image" name="radio-button" />
                    <RadioLabel htmlFor="image" name="image-button">사진</RadioLabel>
                </OptionWrapper>
            </InputWrapper>
            <ButtonWrapper>
                <SubmitBtn onClick={onClickSubmit}>등록하기</SubmitBtn>
            </ButtonWrapper>
        </Wrapper>

    )
}