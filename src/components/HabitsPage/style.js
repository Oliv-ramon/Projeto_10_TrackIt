import styled from "styled-components";

const Container = styled.main`
    min-height: 100vh;
    padding: 70px 0;

    background-color: #f2f2f2;

    display: flex;
    flex-direction: column;
`;

const Habits = styled.section`
    padding: 20px 17px;

    display: flex;
    flex-direction: column;
    gap: 22px;

    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;

    header {
        display: flex;
        justify-content: space-between;

        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;

        button {
            width: 40px;
            height: 35px;

            background: #52B6FF;
            border-radius: 4.63636px;
        
            display: flex;
            justify-content: center;
            align-items: center;

            font-weight: 400;
            font-size: 26.976px;
            line-height: 34px;
            
            color: #FFFFFF;
        }
    }
`;

const Habit = styled.div` 
    height: 91px;
    padding: 15px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    background: #FFFFFF;
    border-radius: 5px;

    position: relative;

    span {
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }

    img {
        height: 15px;
        width: 13px;

        object-fit: contain;

        position: absolute; 
        top: 11px;
        right: 10px;
    }
`;

const CreatorContainer = styled.div`
    width: 340px;
    height: 180px;
    padding: 18px;

    background-color: #fff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;

    input {
        height: 45px;
        padding-left: 11px;
        
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        color: #666666;

        ::placeholder {
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        }

        :disabled {
            opacity: 0.7;
        }
    }
`;

const WeekDaysButtons = styled.ul`
    display: flex;
    align-items: center;
    gap: 4px;

    li {
        width: 30px;
        height: 30px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        &.selected {
            background-color: #CFCFCF;
            color: #fff;
        }
    }
`;

const Options = styled.div`
    margin-top: auto;

    display: flex;
    justify-content: flex-end;
    gap: 23px;

    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;

    button:first-child {
        color: #52B6FF;

        :disabled {
            opacity: 0.7;
        }
    }

    button:last-child {
        width: 84px;
        height: 35px;
        border-radius: 4.63636px;

        background-color: #52B6FF;

        color: #fff;

        :disabled {
            opacity: 0.7;
        }
    }
`;

export { Container, Habits, CreatorContainer, WeekDaysButtons, Options, Habit };